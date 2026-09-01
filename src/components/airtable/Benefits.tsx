const benefits = [
  {
    title: "Built for you, not DIY",
    description:
      "We design and build your Airtable systems, automations, and dashboards for you. No tutorials. No figuring things out alone.",
  },
  {
    title: "Consistent & scalable operations",
    description:
      "Your workflows run the same way every time — even as your workload grows.",
  },
  {
    title: "One source of truth",
    description:
      "All your data, projects, clients, and statuses live in one system — not scattered across tools and inboxes.",
  },
  {
    title: "Workflows run automatically",
    description:
      "Tasks, approvals, notifications, and handoffs happen without manual follow-ups. The system does the heavy lifting.",
  },
  {
    title: "Less stress, fewer fire drills",
    description:
      "When everyone knows what to do and where to look, problems stop escalating. Clarity replaces constant interruption.",
  },
  {
    title: "More time, better decisions",
    description:
      "You spend less time managing and more time leading, with dashboards that give you answers instantly.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 bg-dark">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <div className="reveal relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
            Why It Works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Why operators choose us
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Because it&apos;s built around how your business actually operates —
            not generic templates or off-the-shelf software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <svg
                className="mt-0.5 h-5 w-5 flex-none text-accent-glow"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-heading font-bold text-white mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
