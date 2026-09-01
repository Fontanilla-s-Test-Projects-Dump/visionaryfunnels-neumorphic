import BaseGrid from "@/components/airtable/BaseGrid";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />

      <div className="hero-zoom relative max-w-7xl mx-auto flex flex-col gap-14 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <div className="w-full min-w-0 max-w-2xl">
          <div className="animate-fade-up flex w-fit max-w-full flex-wrap items-center gap-2.5 rounded-full border border-border bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wide text-gray backdrop-blur-sm">
            <span className="relative hidden sm:flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
            </span>
            Airtable systems, automations &amp; AI workflows
          </div>

          <h1
            className="animate-fade-up mt-7 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] sm:leading-[1.05] text-foreground"
            style={{ animationDelay: "0.08s" }}
          >
            Turn chaos into clarity with{" "}
            <span className="text-accent-glow">
              Airtable &amp; workflow automations.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-gray"
            style={{ animationDelay: "0.16s" }}
          >
            We build custom Airtable systems, dashboards, and AI-powered
            workflows that save you time, reduce errors, and help you scale with
            less stress.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#book"
              className="btn-primary rounded-full bg-accent px-8 py-4 text-center text-base font-semibold text-white"
            >
              Book a Free Workflow Audit
            </a>
            <a
              href="#services"
              className="btn-secondary rounded-full border border-border bg-white/5 px-8 py-4 text-center text-base font-semibold text-foreground"
            >
              See what we build ↓
            </a>
          </div>

          <p
            className="animate-fade-up mt-8 font-mono text-xs tracking-wide text-gray-light"
            style={{ animationDelay: "0.32s" }}
          >
            Systems running in lending, legal, e-commerce, professional services
            &amp; construction.
          </p>
        </div>

        <div
          className="animate-fade-up min-w-0 w-full"
          style={{ animationDelay: "0.4s" }}
        >
          <BaseGrid />
        </div>
      </div>
    </section>
  );
}
