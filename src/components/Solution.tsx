const features = [
  {
    title: "Context Loaded",
    description:
      "We learn your business — your tools, your team, your bottlenecks. The AI layer understands how your company actually operates.",
  },
  {
    title: "Tools Connected",
    description:
      "Your CRM, project management, invoicing, and communication tools are wired together. Data flows automatically.",
  },
  {
    title: "Systems Built Monthly",
    description:
      "Each month we build new automations, dashboards, and workflows. Your operating system grows as your business grows.",
  },
];

export default function Solution() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              The Solution
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              The AI Operating System
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-10">
              Not another tool. Not another dashboard nobody checks. A connected
              infrastructure layer that makes your entire business run — so your
              team operates on intelligence, not guesswork.
            </p>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center font-heading font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual diagram */}
          <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border">
            <div className="space-y-4">
              {/* Tool icons */}
              <div className="grid grid-cols-3 gap-3">
                {["CRM", "Projects", "Invoicing", "Email", "Docs", "Chat"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="bg-background rounded-xl p-4 text-center border border-border"
                    >
                      <p className="font-mono text-xs text-gray-light uppercase tracking-wider">
                        {tool}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-2">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* AIOS box */}
              <div className="bg-accent rounded-2xl p-6 text-center">
                <p className="text-white font-heading font-bold text-lg">
                  AI Operating System
                </p>
                <p className="text-blue-200 text-sm mt-1">
                  One source of truth. Automated workflows. Real-time visibility.
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-2">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Output */}
              <div className="grid grid-cols-2 gap-3">
                {["Dashboards", "Automations", "Reports", "Alerts"].map(
                  (output) => (
                    <div
                      key={output}
                      className="bg-dark rounded-xl p-4 text-center border border-border"
                    >
                      <p className="font-mono text-xs text-accent-light uppercase tracking-wider">
                        {output}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
