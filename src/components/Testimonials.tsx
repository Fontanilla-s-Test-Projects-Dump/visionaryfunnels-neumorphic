import Stars from "@/components/Stars";

const testimonials = [
  {
    quote:
      "VisionaryFunnels transformed how we manage our projects. Everything is connected now — our team actually knows what's happening without asking me.",
    name: "Construction Company Owner",
    industry: "Construction",
    metric: "Reporting: 4 hours → 12 minutes",
  },
  {
    quote:
      "We went from 6 spreadsheets to one system. Our team onboarding went from 2 weeks to 3 days because everything is documented and automated.",
    name: "E-commerce Operations Manager",
    industry: "E-commerce",
    metric: "Replaced 6 spreadsheets with 1 system",
  },
  {
    quote:
      "The follow-up automation alone paid for the entire engagement. We're recovering leads we didn't even know we were losing.",
    name: "Services Company Founder",
    industry: "Professional Services",
    metric: "$30K+ in recovered dead leads per quarter",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="reveal max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Results
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Systems that pay for themselves
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Real results from real businesses that replaced chaos with connected
            systems.
          </p>
        </div>

        {/* Featured case study */}
        <div className="card p-8 md:p-10 mb-10">
          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-mono text-xs text-accent-light uppercase tracking-wider mb-4">
                Featured Case Study · Web3 / Digital Assets
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                An AI layer that catches what their CRM missed
              </h3>
              <p className="text-gray leading-relaxed mb-5">
                We run an AI layer over their CRM that analyzes every record and
                catches a lot of what the manual process misses — unlogged
                transactions and data-entry errors. For this digital-asset fund,
                it reconciled deposits against on-chain records and surfaced gaps
                no one knew were there.
              </p>
              <p className="font-mono text-xs text-gray-light">
                Client anonymized at their request.
              </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                { stat: "98%", label: "of deposits auto-reconciled on-chain" },
                { stat: "22%", label: "of records were duplicates or errors" },
                { stat: "~230", label: "deposits verified against the blockchain" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-background border border-border rounded-xl p-4 text-center lg:text-left"
                >
                  <p className="font-heading text-3xl font-extrabold text-accent-light">
                    {s.stat}
                  </p>
                  <p className="text-gray-light text-xs mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card p-8 flex flex-col"
            >
              {/* Metric badge */}
              <div className="bg-accent/10 text-accent-light font-mono text-xs font-bold px-3 py-1.5 rounded-full self-start mb-5">
                {testimonial.metric}
              </div>

              <Stars
                className="mb-5"
                label={`${testimonial.name} rated us 5 out of 5`}
              />

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gray text-xs mt-0.5">
                  {testimonial.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
