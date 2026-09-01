const iconClass = "w-6 h-6";
const painPoints = [
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 00-1.242 7.244M3 3l18 18" />
      </svg>
    ),
    title: "Disconnected Tools",
    description:
      "Your CRM doesn't talk to your project tracker. Your project tracker doesn't talk to your invoicing. Every handoff is manual.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Manual Data Entry",
    description:
      "Your team copies data between spreadsheets, emails, and tools. 20+ hours every week on work a system could do in minutes.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "No Visibility",
    description:
      "You can't answer basic questions about your business without asking three people and checking four spreadsheets.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Founder Bottleneck",
    description:
      "Every decision that needs context routes through you. You're the glue holding operations together — and it doesn't scale.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-surface-2">
      <div className="reveal max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            The $50K Problem You Can&apos;t See
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            If 500 new clients showed up tomorrow, what would break first? For
            most growing businesses, the answer is{" "}
            <span className="font-semibold text-foreground">everything</span>.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="card p-8"
            >
              <div className="w-11 h-11 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5">
                {point.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-gray leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div className="mt-12 bg-background rounded-2xl p-8 md:p-12 text-center border border-border">
          <p className="font-mono text-accent-light text-4xl md:text-5xl font-bold mb-3">
            20+ hrs/week
          </p>
          <p className="text-gray-light text-lg">
            The average SMB wastes on work a connected system could do in
            minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
