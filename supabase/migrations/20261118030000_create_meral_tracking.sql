-- Enquiry and contact-click counting for the Meral Gören website (nüll Supabase project "Dedication").
-- Read by the monthly report (null-client-reports). Written only by the edge functions
-- meral-anfrage and meral-klick, which use the service role; RLS stays on with no policies,
-- so the anon key cannot read or write anything.

-- Every enquiry from the contact form or the WhatsApp lead form.
create table if not exists public.meral_anfragen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  channel text not null check (channel in ('form', 'whatsapp')),
  name text not null,
  email text not null,
  phone text,
  area text not null,
  found_via text,
  message text not null,
  language text,
  page_path text,
  -- true while the address is not the client's live domain (preview deployments, local tests)
  is_test boolean not null default false,
  -- qualified / unclear / not_qualified / duplicate, set by hand for the report
  lead_quality text check (lead_quality in ('qualified', 'unclear', 'not_qualified', 'duplicate')),
  status text not null default 'received',
  email_sent_at timestamptz,
  resend_email_id text,
  email_error text
);

alter table public.meral_anfragen enable row level security;

create index if not exists meral_anfragen_created_at_idx on public.meral_anfragen (created_at desc);

-- Clicks on phone and email links and on the WhatsApp buttons. Kind and page path only:
-- no IP, no cookie, no visitor id, so it needs no consent and counts every visitor.
create table if not exists public.meral_klicks (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  kind text not null check (kind in ('phone', 'whatsapp', 'email')),
  path text,
  is_test boolean not null default false
);

alter table public.meral_klicks enable row level security;

create index if not exists meral_klicks_created_at_idx on public.meral_klicks (created_at desc);

-- Monthly totals for the report (Europe/Berlin months, tests excluded).
create or replace view public.meral_monatsuebersicht
with (security_invoker = true) as
with months as (
  select date_trunc('month', created_at at time zone 'Europe/Berlin')::date as monat from public.meral_anfragen where not is_test
  union
  select date_trunc('month', created_at at time zone 'Europe/Berlin')::date from public.meral_klicks where not is_test
)
select
  m.monat,
  (select count(*) from public.meral_anfragen a where not a.is_test and a.channel = 'form'
     and date_trunc('month', a.created_at at time zone 'Europe/Berlin')::date = m.monat) as anfragen_formular,
  (select count(*) from public.meral_anfragen a where not a.is_test and a.channel = 'whatsapp'
     and date_trunc('month', a.created_at at time zone 'Europe/Berlin')::date = m.monat) as anfragen_whatsapp,
  (select count(*) from public.meral_anfragen a where not a.is_test and a.lead_quality = 'qualified'
     and date_trunc('month', a.created_at at time zone 'Europe/Berlin')::date = m.monat) as anfragen_qualifiziert,
  (select count(*) from public.meral_klicks k where not k.is_test and k.kind = 'phone'
     and date_trunc('month', k.created_at at time zone 'Europe/Berlin')::date = m.monat) as klicks_telefon,
  (select count(*) from public.meral_klicks k where not k.is_test and k.kind = 'whatsapp'
     and date_trunc('month', k.created_at at time zone 'Europe/Berlin')::date = m.monat) as klicks_whatsapp,
  (select count(*) from public.meral_klicks k where not k.is_test and k.kind = 'email'
     and date_trunc('month', k.created_at at time zone 'Europe/Berlin')::date = m.monat) as klicks_email
from months m
order by m.monat desc;

revoke all on public.meral_monatsuebersicht from anon, authenticated;
