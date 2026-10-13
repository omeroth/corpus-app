-- user_progress.timezone — IANA zone id captured client-side via
-- Intl.DateTimeFormat().resolvedOptions().timeZone and persisted on
-- every state save, so a user who travels gets corrected on their
-- next session. Null when Intl is missing / throws on the device —
-- no guess, no fallback.
--
-- Forwarded by the existing notify_loops_progress trigger's
-- row_to_json(NEW) payload without any trigger change — the trigger
-- picks up the new column automatically. loops-progress derives two
-- Loops contact properties from this value:
--   timezone   : raw IANA string, forwarded as-is
--   utcOffset  : current offset as "+HH:MM" / "-HH:MM", recomputed on
--                every sync via Intl.DateTimeFormat timeZoneName:
--                'longOffset' so DST transitions correct automatically
-- Both properties are omitted from the Loops PATCH body when this
-- column is null (Loops reads null as "clear this field", matching
-- the convention already used for language / platform / firstName).
--
-- The daily loops-inactive-sweep job also unconditionally refreshes
-- utcOffset for every row with timezone IS NOT NULL, catching DST
-- drift for users who do not open the app across a transition day.
-- Unconditional (rather than diff-against-last-sent) because a diff
-- check can't catch the cases where loops-progress itself failed to
-- land — an identical wrong value would compare equal and never heal.

alter table public.user_progress
  add column if not exists timezone text;
