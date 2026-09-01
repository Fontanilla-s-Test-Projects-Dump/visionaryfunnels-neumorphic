const steps = [
  {
    title: "They talk. Nothing changes.",
    description:
      "Your site groups stay exactly where they are — one group per project, a topic per division. The AI reads. It doesn't reply, doesn't nag, and doesn't join the conversation.",
  },
  {
    title: "The exchange becomes a record.",
    description:
      "When a conversation finishes, it's written up as a minute — what was said, by whom, in their own words. Issues, material requests, deliveries and RFIs are pulled out as cards.",
  },
  {
    title: "Your manager curates, he doesn't type.",
    description:
      "New cards arrive as a short review list. Confirm, correct in plain language, or remove. What he confirms is the record — and nothing touching money or status moves without him.",
  },
];

const lanes = [
  {
    label: "The field",
    items: ["Foremen", "Subcon leads", "Bodegero", "Equipment"],
    note: "Telegram. No app, no licence, no training.",
    tone: "surface",
  },
  {
    label: "The bridge",
    items: ["Reads", "Minutes", "Extracts", "Proposes"],
    note: "Quotes verbatim. Never invents a number.",
    tone: "accent",
  },
  {
    label: "The office",
    items: ["Registry", "Manager console", "Reminders", "Owner view"],
    note: "The system of record. The chat never is.",
    tone: "surface",
  },
];

export default function Bridge() {
  return (
    <section id="bridge" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              The bridge between the office and the site
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-10">
              Every system before this one asked the field to change. Log in
              here, fill this form, update that status. It fails on week three,
              every time. So we didn&apos;t build a system for the field — we
              built a bridge to it.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center font-heading font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: the supervisory-line diagram */}
          <div className="bg-surface rounded-3xl p-6 md:p-9 border border-border">
            <div className="space-y-3">
              {lanes.map((lane, i) => (
                <div key={lane.label}>
                  <div
                    className={`rounded-2xl border p-5 ${
                      lane.tone === "accent"
                        ? "border-accent-glow/30 bg-accent/10"
                        : "border-border bg-background"
                    }`}
                  >
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                        lane.tone === "accent"
                          ? "text-accent-glow"
                          : "text-gray-light"
                      }`}
                    >
                      {lane.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {lane.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] ${
                            lane.tone === "accent"
                              ? "border-accent-glow/25 text-foreground/90"
                              : "border-border text-gray"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-gray-light">
                      {lane.note}
                    </p>
                  </div>

                  {/* The boundary, drawn where it actually sits */}
                  {i === 0 && (
                    <div className="flex items-center gap-3 py-3">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-glow/40 to-accent-glow/40" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-glow/80">
                        Supervisory line
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-glow/40 to-accent-glow/40" />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="flex justify-center py-2.5">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-gray-light">
              Below the line, nobody needs an account. Above it, one person
              approves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
