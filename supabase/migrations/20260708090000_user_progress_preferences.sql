-- Adds the two device-preference columns that syncProgressToSupabase has
-- been trying to write since July 5, resulting in silent PostgREST 400s
-- swallowed by try/catch. Base progress sync was never broken; only these
-- two preference upserts failed.
--
-- Semantics (matches the client's field-wise merge on login):
--   - appearance      : per-device UI preference. Client writes on change;
--                       on load the client prefers its LOCAL value (server
--                       row is a backup for reinstalls, not an override).
--   - daily_reminder  : notification schedule + local OS-permission state.
--                       Same "prefer local" load semantics; write on every
--                       reminder change.
--
-- Both nullable — client tolerates NULL / undefined defensively.

ALTER TABLE public.user_progress
  ADD COLUMN IF NOT EXISTS appearance     text,
  ADD COLUMN IF NOT EXISTS daily_reminder jsonb;
