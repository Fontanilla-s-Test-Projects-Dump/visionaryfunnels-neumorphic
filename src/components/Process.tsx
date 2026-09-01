const steps = [
  {
    number: "01",
    title: "Discovery & Map",
    description:
      "We audit your tools, workflows, and bottlenecks. You get a clear blueprint with priorities and quick wins.",
    detail: "1-2 week deep dive",
  },
  {
    number: "02",
    title: "Build & Automate",
    description:
      "We install the AI operating system, connect your tools, and build the first automations. You see results in weeks, not months.",
    detail: "2-3 week sprint",
  },
  {
    number: "03",
    title: "Optimize & Grow",
    description:
      "Each month, we add new systems. The retainer grows as your operations compound. You get more leverage, not more overhead.",
    detail: "Ongoing retainer",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 px-6 lg:px-8 bg-dark">
      <div className="reveal max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Three phases. Zero guesswork.
          </h2>
          <p className="text-lg text-gray-light leading-relaxed">
            Every engagement follows the same proven path — from chaos to
            clarity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <p className="font-mono text-accent-light text-sm font-bold mb-4">
                {step.number}
              </p>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-light leading-relaxed mb-6">
                {step.description}
              </p>
              <p className="font-mono text-xs text-accent-light/70 uppercase tracking-wider">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
