const tracks = [
  {
    tag: "01",
    title: "Site issues",
    description:
      "Raised the moment someone mentions it — with the remedy, the person who owns it, and who confirmed it was actually fixed.",
  },
  {
    tag: "02",
    title: "Material requests",
    description:
      "What was asked for, by whom, for which project. Nothing waits three days because the request was said out loud and never written down.",
  },
  {
    tag: "03",
    title: "Purchase orders",
    description:
      "Request through approval to issued PO, tracked as one chain — so you can answer \"where is it\" without calling three people.",
  },
  {
    tag: "04",
    title: "Deliveries",
    description:
      "Quantity, quality, who received it and when — with the photo attached to the record instead of buried a hundred messages up.",
  },
  {
    tag: "05",
    title: "Variations",
    description:
      "Caught the day they're discussed on site, not the month the billing doesn't reconcile. Scope creep you can price.",
  },
  {
    tag: "06",
    title: "RFIs and RFAs",
    description:
      "Every submission timestamped and every day of client silence counted. That's your extension-of-time evidence, building itself.",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 md:py-28 px-6 lg:px-8 bg-surface-2">
      <div className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What It Tracks
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            The six things that actually worry you on site
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Not a feature list. This is the shortlist contractors name when you
            ask what keeps costing them money.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div key={track.tag} className="card p-7">
              <p className="font-mono text-xs tracking-[0.2em] text-accent-glow/70">
                {track.tag}
              </p>
              <h3 className="font-heading text-lg font-bold text-foreground mt-3 mb-2.5">
                {track.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-light max-w-2xl mx-auto leading-relaxed">
          Same engine, different subject — daily site reports drafted from the
          day&apos;s tracked work, permit and insurance renewals, equipment
          maintenance, collections follow-up.
        </p>
      </div>
    </section>
  );
}
