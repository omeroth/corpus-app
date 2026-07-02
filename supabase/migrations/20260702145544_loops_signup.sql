-- Loops signup integration
--
-- Sends every new auth.users row to Loops (loops.so) so the user receives a
-- welcome email. Server-side end to end — no client dependency.
--
-- Moving parts:
--   1. Vault entry named 'loops_webhook_secret' holds the shared secret
--      that authenticates the trigger's HTTP call to the Edge Function.
--      Populated OUT-OF-BAND (not in this migration; the secret must never
--      be committed). Recommended: SELECT vault.create_secret(
--        encode(gen_random_bytes(32), 'hex'), 'loops_webhook_secret'
--      ) — the entire hex value is generated in-DB so no manual paste can
--      corrupt it. Rotate with UPDATE vault.secrets SET secret = ...
--      followed by `supabase functions deploy loops-signup` (to recycle
--      the function's in-isolate cache).
--   2. public.get_loops_webhook_secret() — SECURITY DEFINER RPC that
--      reads the Vault entry on behalf of the Edge Function.
--      EXECUTE granted only to service_role; anon/authenticated have none.
--   3. public.notify_loops_signup() — trigger function on auth.users.
--      Reads the same Vault entry, PERFORMs net.http_post to the loops-signup
--      Edge Function with a webhook-shaped payload. Failures are logged and
--      swallowed so no Loops issue can ever block a signup.
--   4. Trigger on_auth_user_signup_notify_loops binds (3) to auth.users
--      AFTER INSERT.
--
-- Requires pg_net extension. If auth.users DDL is blocked in your Supabase
-- project, the CREATE TRIGGER at the end of this file will fail; see the
-- pg_cron fallback pattern in the project history.

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- === RPC read by the loops-signup Edge Function ==============================

CREATE OR REPLACE FUNCTION public.get_loops_webhook_secret()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path = vault, public
AS $$
  SELECT decrypted_secret
    FROM vault.decrypted_secrets
    WHERE name = 'loops_webhook_secret'
    LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_loops_webhook_secret() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_loops_webhook_secret() TO service_role;

-- === Trigger function that POSTs to the Edge Function ========================

CREATE OR REPLACE FUNCTION public.notify_loops_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions, vault
AS $$
DECLARE
  webhook_url    text := 'https://xcoikjoatcrjqxzykwlt.supabase.co/functions/v1/loops-signup';
  webhook_secret text;
BEGIN
  SELECT decrypted_secret
    INTO webhook_secret
    FROM vault.decrypted_secrets
    WHERE name = 'loops_webhook_secret'
    LIMIT 1;

  IF webhook_secret IS NULL THEN
    RAISE WARNING '[notify_loops_signup] loops_webhook_secret missing from Vault; skipping';
    RETURN NEW;
  END IF;

  PERFORM net.http_post(
    url     := webhook_url,
    headers := jsonb_build_object(
      'Content-Type',           'application/json',
      'X-Loops-Webhook-Secret', webhook_secret
    ),
    body    := jsonb_build_object(
      'type',       'INSERT',
      'schema',     'auth',
      'table',      'users',
      'record',     row_to_json(NEW),
      'old_record', NULL
    )
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Never let a Loops issue block signups.
  RAISE WARNING '[notify_loops_signup] failed: %', SQLERRM;
  RETURN NEW;
END;
$$;

-- === Trigger on auth.users INSERT ===========================================

DROP TRIGGER IF EXISTS on_auth_user_signup_notify_loops ON auth.users;
CREATE TRIGGER on_auth_user_signup_notify_loops
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.notify_loops_signup();
