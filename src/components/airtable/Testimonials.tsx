import Stars from "@/components/Stars";

export const testimonials = [
  {
    quote:
      "Arvin became our go-to automation partner. What used to take days now happens automatically. Our document processing time dropped dramatically, and errors disappeared. This system paid for itself fast.",
    name: "Michael R.",
    role: "Operations Director — SBA Lending Firm",
  },
  {
    quote:
      "We were buried in spreadsheets and email approvals. The Airtable system Arvin built gave us instant visibility and control. Our team is calmer, faster, and far more consistent.",
    name: "Sarah K.",
    role: "Managing Partner — Law & Servicing Firm",
  },
  {
    quote:
      "The dashboards alone changed how we operate. I can see what’s happening in real time without chasing updates. Our workflows are cleaner, and we’re no longer reacting to problems — we’re preventing them.",
    name: "Lila C.",
    role: "Founder — E-commerce Operations Team",
  },
  {
    quote:
      "This replaced legacy tools and manual processes we’d been using for years. Scheduling, production tracking, and client management are finally in one place. It saved us countless hours every week.",
    name: "James T.",
    role: "Owner — School Photography Studio",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 lg:px-8 bg-surface-2">
      <div className="reveal max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            What our clients say
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Operators who replaced spreadsheets and inbox approvals with a
            system that runs itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex h-full flex-col p-8">

              <Stars className="mb-5" label={`${t.name} rated us 5 out of 5`} />

              <blockquote className="text-foreground leading-relaxed flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-gray text-xs mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
