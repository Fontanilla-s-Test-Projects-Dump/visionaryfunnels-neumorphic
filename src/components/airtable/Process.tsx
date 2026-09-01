const phases = [
  {
    num: "01",
    title: "Discovery & Map",
    lead: "We start by understanding how your business actually operates today.",
    body: "We review your current tools, workflows, and bottlenecks to identify where time, money, and effort are being wasted. Then we map out a clear system architecture using Airtable, automation, and AI — tailored to your business.",
    outcome:
      "A clear system blueprint with priorities, scope, and quick wins.",
  },
  {
    num: "02",
    title: "Build & Automate",
    lead: "We design and build your custom Airtable system and connect everything with reliable automation.",
    body: "This includes databases, workflows, approvals, integrations, dashboards, and — if needed — AI agents or RAG-powered knowledge tools. Everything is built clean, documented, and ready for real-world use.",
    outcome:
      "A working system that replaces manual work and keeps operations running smoothly.",
  },
  {
    num: "03",
    title: "Deploy & Optimize",
    lead: "Once live, we fine-tune the system based on real usage.",
    body: "We monitor workflows, adjust automations, clean up edge cases, and make sure your team is comfortable using the system. If needed, we iterate and expand as your business grows.",
    outcome:
      "A stable, scalable system that saves time, reduces stress, and supports growth.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our 3-Phase Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            How we build &amp; automate your system
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            The same path every time — so you always know what happens next and
            what you get at the end of it.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div key={phase.num} className="card flex h-full flex-col p-8">
              <p className="font-mono text-sm tracking-[0.2em] text-accent-glow/70">
                {phase.num}
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground mt-3 mb-3">
                {phase.title}
              </h3>
              <p className="text-foreground/85 leading-relaxed mb-3">
                {phase.lead}
              </p>
              <p className="text-sm text-gray leading-relaxed flex-1">
                {phase.body}
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-light mb-1.5">
                  Outcome
                </p>
                <p className="text-sm text-accent-light leading-snug">
                  {phase.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#book"
            className="btn-primary inline-block rounded-full bg-accent px-8 py-4 text-base font-semibold text-white"
          >
            Book a Free Workflow Audit
          </a>
        </div>
      </div>
    </section>
  );
}
