-- Loops progress-sync integration
--
-- Extends the existing signup pipeline (see 20260702145544_loops_signup.sql)
-- so re-engagement emails have live activity signals. Mirrors that file
-- structure: shared-secret in Vault, RPC to read it, trigger function fires
-- pg_net → Edge Function → Loops /contacts/update.
--
-- Reuses the SAME 'loops_webhook_secret' Vault entry as loops-signup, and
-- the SAME get_loops_webhook_secret() RPC. Rotating the secret rotates
-- both integrations at once (single source of truth).
--
-- Fields synced to Loops (mirror the client-authoritative snapshot):
--   lastActiveAt        — when we last saw a real progress write
--   lastSubject         — 'philosophy' or 'economics'
--   subjectsStarted     — 'philosophy' | 'economics' | 'both'
--   bonusUnlocked       — any completed_days key starting with 'bonus'
--   chaptersCompleted   — length of chapter_complete_shown
--
-- Debounce: loops_last_synced_at gates the trigger. Progress syncs fire
-- multiple upserts (base + preferences), and only the base upsert touches
-- last_active_at, so the trigger only sees one meaningful fire per session
-- already. The 30-second debounce is defense-in-depth against future
-- callers touching last_active_at more often than necessary.

-- === Columns ================================================================

ALTER TABLE public.user_progress
  ADD COLUMN IF NOT EXISTS last_active_at        timestamptz,
  ADD COLUMN IF NOT EXISTS last_subject          text,
  ADD COLUMN IF NOT EXISTS loops_last_synced_at  timestamptz;

-- === Trigger function =======================================================

CREATE OR REPLACE FUNCTION public.notify_loops_progress()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions, vault, auth
AS $$
DECLARE
  webhook_url    text := 'https://xcoikjoatcrjqxzykwlt.supabase.co/functions/v1/loops-progress';
  webhook_secret text;
  v_email        text;
BEGIN
  -- Only fire when last_active_at was actually written. Preference-only
  -- upserts (appearance / daily_reminder) skip this via NEW IS NOT DISTINCT
  -- FROM OLD on that column.
  IF TG_OP = 'UPDATE' AND NEW.last_active_at IS NOT DISTINCT FROM OLD.last_active_at THEN
    RETURN NEW;
  END IF;
  IF NEW.last_active_at IS NULL THEN
    RETURN NEW;
  END IF;

  -- Debounce: skip if we synced this contact within the last 30 seconds.
  -- Multiple sequential upserts from a single session collapse into one
  -- Loops call.
  IF NEW.loops_last_synced_at IS NOT NULL
     AND NEW.loops_last_synced_at > NOW() - INTERVAL '30 seconds' THEN
    RETURN NEW;
  END IF;

  -- Reuse the signup pipeline's shared secret (single source of truth).
  SELECT decrypted_secret
    INTO webhook_secret
    FROM vault.decrypted_secrets
    WHERE name = 'loops_webhook_secret'
    LIMIT 1;
  IF webhook_secret IS NULL THEN
    RAISE WARNING '[notify_loops_progress] loops_webhook_secret missing from Vault; skipping';
    RETURN NEW;
  END IF;

  -- Look up the contact's email while we have SECURITY DEFINER access to
  -- auth.users. Passing the email in the webhook payload saves the Edge
  -- Function a round-trip.
  SELECT email INTO v_email FROM auth.users WHERE id = NEW.user_id LIMIT 1;
  IF v_email IS NULL THEN
    -- User has no email (phone-only signup, or deleted). Nothing to sync.
    RETURN NEW;
  END IF;

  PERFORM net.http_post(
    url     := webhook_url,
    headers := jsonb_build_object(
      'Content-Type',           'application/json',
      'X-Loops-Webhook-Secret', webhook_secret
    ),
    body    := jsonb_build_object(
      'type',       TG_OP,
      'schema',     'public',
      'table',      'user_progress',
      'email',      v_email,
      'record',     row_to_json(NEW),
      'old_record', CASE WHEN TG_OP = 'UPDATE' THEN row_to_json(OLD) ELSE NULL END
    )
  );

  -- Mark synced. This UPDATE re-enters this trigger, but the second-level
  -- fire hits the "NOT DISTINCT FROM OLD.last_active_at" early-return above
  -- because we're touching loops_last_synced_at only. No recursion loop.
  UPDATE public.user_progress
     SET loops_last_synced_at = NOW()
   WHERE user_id = NEW.user_id;

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Never let a Loops issue block a progress sync.
  RAISE WARNING '[notify_loops_progress] failed: %', SQLERRM;
  RETURN NEW;
END;
$$;

-- === Trigger on user_progress INSERT/UPDATE ================================

DROP TRIGGER IF EXISTS on_user_progress_notify_loops ON public.user_progress;
CREATE TRIGGER on_user_progress_notify_loops
AFTER INSERT OR UPDATE ON public.user_progress
FOR EACH ROW
EXECUTE FUNCTION public.notify_loops_progress();
