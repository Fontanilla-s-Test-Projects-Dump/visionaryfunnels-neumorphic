/* The whole commercial story in one section: fix one thing, then build the
   rest. No figures — the discovery call is what this sells. */

const steps = [
  {
    step: "Step 01",
    name: "7-Day Automation Sprint",
    shape: "One week · one problem · fixed scope",
    summary:
      "We take the single most expensive manual process you have and make it run without you. One week, one working system, live in the tools your team already uses.",
    features: [
      "The one process costing you the most hours",
      "Built, tested, and running on your real data",
      "Documented so your team can operate it",
      "Yours to keep, whether or not we continue",
    ],
    bestFor: "“There's one thing here that's driving me crazy.”",
    featured: false,
  },
  {
    step: "Step 02",
    name: "30-Day AIOS Install",
    shape: "One month · the operating system",
    summary:
      "If the sprint proves out, we install the layer around it — your context loaded, your tools connected, and the systems that actually run the work built on top.",
    features: [
      "Full operations audit and blueprint",
      "Your context and business rules loaded",
      "Tools connected into one source of truth",
      "Dashboards and automations built",
      "Team trained, documented, handed over",
    ],
    bestFor: "“That worked. Do it across the business.”",
    featured: true,
  },
];

export default function Offer() {
  return (
    <section id="offer" className="py-20 md:py-28 px-6 lg:px-8 bg-surface-2">
      <div className="reveal max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How to Start
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Fix one thing first. Then build the rest.
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            We start with a single urgent problem — the one costing you most
            right now. If that week works, we install the operating system
            around it. If it doesn&apos;t, you&apos;ve lost a week, not a
            quarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.name}
              className={`card relative flex h-full flex-col p-8 ${
                s.featured ? "border-accent-glow/40" : ""
              }`}
            >
              <p className="font-mono text-xs tracking-[0.2em] text-accent-glow/70">
                {s.step}
              </p>

              <h3 className="font-heading text-2xl font-bold text-foreground mt-3">
                {s.name}
              </h3>

              <p className="mt-3 w-fit rounded-full border border-accent-glow/25 bg-accent/10 px-3 py-1.5 font-mono text-[11px] tracking-wide text-accent-light">
                {s.shape}
              </p>

              <p className="mt-5 text-gray leading-relaxed">{s.summary}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-gray">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-none text-accent-glow"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-border pt-4 font-mono text-xs text-gray-light">
                Best for: <span className="text-gray">{s.bestFor}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 mx-auto max-w-2xl text-center text-sm text-gray-light leading-relaxed">
          The sprint isn&apos;t a trial or a discount — it&apos;s the smallest
          piece of real work that shows whether we should keep going. Nothing
          about the 30 days gets decided until the 7 are done.
        </p>
      </div>
    </section>
  );
}
