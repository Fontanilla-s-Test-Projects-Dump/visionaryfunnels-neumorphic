const rules = [
  {
    title: "The database is the record. Chat is only a view of it.",
    description:
      "What appears in Telegram is posted from the registry, not stored in it. In a dispute you're reading a record, not scrolling a conversation.",
  },
  {
    title: "It quotes. It never invents.",
    description:
      "Specs, quantities and prices are copied word for word from what was actually said, or left blank. A number it can't verify gets dropped, not guessed — enforced in the code, not just asked of the AI.",
  },
  {
    title: "It proposes. A human decides.",
    description:
      "The AI raises cards; your project-in-charge confirms, corrects or removes them. Nothing touching money or status changes on its own.",
  },
  {
    title: "One seat runs everything.",
    description:
      "The bot writes on everyone's behalf. Your foremen, bodegero and subcontractors never need an account, a licence, or a training session.",
  },
  {
    title: "It stops at the supervisory line.",
    description:
      "The system reaches your project-in-charge and goes no further. We don't touch personal Messenger, and we don't turn your crew's phones into a monitoring device.",
  },
  {
    title: "A muted bot is a dead bot.",
    description:
      "Digests and rate limits, not a ping every four minutes. If people mute it in week two, nothing else on this page matters.",
  },
];

export default function Rules() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 bg-dark">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <div className="reveal relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
            The Rules
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Why it survives contact with a real job site
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Most AI pilots die because the tool was trusted with things it
            shouldn&apos;t have been. These constraints are built in, and
            they&apos;re the reason the thing is still running.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {rules.map((rule, i) => (
            <div key={rule.title} className="flex gap-4">
              <span className="mt-0.5 font-mono text-xs text-accent-glow/60 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-l border-white/10 pl-4">
                <h3 className="font-heading font-bold text-white mb-1.5">
                  {rule.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
