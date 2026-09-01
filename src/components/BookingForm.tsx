"use client";

import { useState } from "react";

const CALENDLY_BASE = "https://calendly.com/support-0f8w/discovery-call";

const problems = [
  "One process eating my team's hours",
  "Data scattered across tools and spreadsheets",
  "I'm the bottleneck — everything routes through me",
  "We can't see what's actually happening",
  "Something else",
];

/* Capture first, book second. The lead reaches the CRM even if the person
   abandons the calendar, which is the whole point — today those people are
   invisible. Name and email are pushed into Calendly as prefill so step two
   isn't retyping step one. */
export default function BookingForm({ source = "home" }: { source?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const fd = new FormData(e.currentTarget);
    const lead = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      problem: String(fd.get("problem") || ""),
      detail: String(fd.get("detail") || ""),
      source,
    };

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      /* Capture failing must never cost us the booking. Fall through. */
    }

    const p = new URLSearchParams({
      name: lead.name,
      email: lead.email,
      utm_source: "visionaryfunnels.com",
      utm_medium: "form",
      utm_campaign: "discovery-call",
      utm_content: source,
    });
    if (lead.company) p.set("a1", lead.company);

    window.location.href = `${CALENDLY_BASE}?${p.toString()}`;
  }

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-gray-light focus:border-accent-glow/50 focus:outline-none focus:ring-2 focus:ring-accent-glow/20";
  const label = "block text-sm font-medium text-gray mb-2";

  return (
    <form onSubmit={onSubmit} className="card p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className={label}>
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>

      <div className="mt-5">
        <label htmlFor="problem" className={label}>
          What&apos;s costing you the most right now?
        </label>
        <select id="problem" name="problem" required defaultValue="" className={field}>
          <option value="" disabled>
            Pick the closest one
          </option>
          {problems.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="detail" className={label}>
          Anything useful to know before the call?{" "}
          <span className="text-gray-light">(optional)</span>
        </label>
        <textarea id="detail" name="detail" rows={3} className={field} />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn-primary mt-7 w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-white disabled:opacity-70"
      >
        {state === "sending" ? "Taking you to the calendar…" : "Choose a time →"}
      </button>

      <p className="mt-4 text-center text-xs text-gray-light">
        Next step is picking a slot. Your details carry over — you won&apos;t
        retype them.
      </p>
    </form>
  );
}
