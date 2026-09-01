/* Lead capture. The browser posts here; this forwards to a Make.com webhook
   which writes the Lead into Airtable.

   The webhook URL is a SERVER-ONLY env var on purpose. If it were public the
   endpoint could be spammed straight into the CRM, and a contractor works in
   this repo — no CRM credentials belong anywhere near it. Make holds the
   Airtable token; this file never sees it. */

export const runtime = "nodejs";

type Lead = {
  name?: string;
  email?: string;
  company?: string;
  problem?: string;
  detail?: string;
  source?: string;
};

const MAX = 2000;

function clean(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, MAX) : "";
}

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const lead = {
    name: clean(body.name),
    email: clean(body.email),
    company: clean(body.company),
    problem: clean(body.problem),
    detail: clean(body.detail),
    source: clean(body.source) || "unknown",
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.email || !lead.email.includes("@")) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const webhook = process.env.MAKE_LEAD_WEBHOOK_URL;

  /* If capture is not configured or Make is down, we still let the booking
     proceed. Losing a CRM row is bad; blocking someone from booking a call
     because of it is worse. The failure is logged, not surfaced. */
  if (!webhook) {
    console.warn("[lead] MAKE_LEAD_WEBHOOK_URL unset — lead not captured", {
      email: lead.email,
      source: lead.source,
    });
    return Response.json({ ok: true, captured: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[lead] webhook rejected", res.status, lead.email);
      return Response.json({ ok: true, captured: false });
    }
  } catch (err) {
    console.error("[lead] webhook failed", err, lead.email);
    return Response.json({ ok: true, captured: false });
  }

  return Response.json({ ok: true, captured: true });
}
