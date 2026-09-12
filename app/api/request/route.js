/**
 * Lead capture for the "Request Service" form.
 *
 * Storage: Supabase table `public.service_requests` (insert-only via RLS).
 * Required env vars (set these in Vercel → Project → Settings → Environment Variables):
 *   SUPABASE_URL                (or NEXT_PUBLIC_SUPABASE_URL)
 *   SUPABASE_SERVICE_ROLE_KEY   (or SUPABASE_ANON_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY)
 *
 * If the vars are missing the submission is still accepted and logged server-side,
 * so visitors never hit a dead end in the middle of an emergency.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const clean = (value, max) => String(value ?? '').trim().slice(0, max);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: silently accept so bots don't retry.
  if (clean(body?.company, 40)) {
    return Response.json({ ok: true });
  }

  const record = {
    name: clean(body?.name, 120),
    phone: clean(body?.phone, 32),
    service: clean(body?.service, 120),
    urgency: clean(body?.urgency, 80),
    notes: clean(body?.notes, 2000),
    source: 'website',
    user_agent: clean(request.headers.get('user-agent'), 300),
  };

  const digits = record.phone.replace(/\D/g, '');

  if (record.name.length < 2 || digits.length < 10) {
    return Response.json(
      { ok: false, error: 'Please add your name and a phone number we can call you back on.' },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let stored = false;

  if (supabaseUrl && supabaseKey) {
    try {
      const response = await fetch(
        `${supabaseUrl.replace(/\/$/, '')}/rest/v1/service_requests`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify(record),
          cache: 'no-store',
        }
      );

      stored = response.ok;

      if (!response.ok) {
        console.error(
          '[request-service] Supabase insert failed:',
          response.status,
          await response.text().catch(() => '')
        );
      }
    } catch (error) {
      console.error('[request-service] Supabase error:', error);
    }
  }

  if (!stored) {
    // Never lose a lead: at minimum it lands in the Vercel function logs.
    console.warn('[request-service] lead not persisted in a database:', record);
  }

  return Response.json({ ok: true, stored });
}
