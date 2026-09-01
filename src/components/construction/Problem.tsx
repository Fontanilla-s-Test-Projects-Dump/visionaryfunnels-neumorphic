const iconClass = "w-6 h-6";

const painPoints = [
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Everything lands in General",
    description:
      "One group, every trade, every topic. The message that actually mattered is forty messages up, buried under a photo of somebody's lunch.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "You are the routing layer",
    description:
      "Nothing moves unless you read it and repeat it to the right person. You're the owner, the project manager, and the message bus — and only one of those is your job.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Loose ends never announce themselves",
    description:
      "A question nobody answered. A delivery nobody confirmed. A variation nobody costed. You find out it was open when it becomes a delay — not while it was still cheap.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Reports get written from memory",
    description:
      "The daily report is retyped at 9pm from scrollback and recollection. That's a story about the day. It isn't evidence, and it won't hold up in a claim.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 px-6 lg:px-8 bg-surface-2">
      <div className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            The group chat was never a system
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            It started as a fast way to reach the site. Three projects later
            it&apos;s where{" "}
            <span className="font-semibold text-foreground">
              your project record goes to disappear
            </span>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point) => (
            <div key={point.title} className="card p-8">
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

        <div className="mt-12 bg-background rounded-2xl p-8 md:p-12 text-center border border-border">
          <p className="font-heading text-accent-light text-2xl md:text-3xl font-bold mb-3">
            A delay you can&apos;t prove is a delay you absorb
          </p>
          <p className="text-gray-light text-lg max-w-2xl mx-auto leading-relaxed">
            You submitted the RFI. They took eleven days. Everyone remembers it
            differently, and the timestamps are somewhere in a chat nobody can
            search.
          </p>
        </div>
      </div>
    </section>
  );
}
