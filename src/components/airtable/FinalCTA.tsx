export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 bg-dark">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/4 bg-glow" aria-hidden />

      <div className="reveal relative max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Chaos ends here.{" "}
          <span className="text-accent-light">Clarity starts now.</span>
        </h2>

        <p className="text-lg text-gray-light leading-relaxed mb-10 max-w-xl mx-auto">
          You don&apos;t need to work harder to run your business — you need
          better systems. We build the Airtable systems and automation that save
          time, reduce stress, and cut operating costs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="btn-primary bg-accent text-white text-base font-semibold px-8 py-4 rounded-full"
          >
            Book a Free Workflow Audit
          </a>
          <a
            href="#process"
            className="btn-secondary bg-white/10 text-white text-base font-semibold px-8 py-4 rounded-full border border-white/20"
          >
            See the process
          </a>
        </div>

        <p className="text-gray-light/60 text-sm mt-8">
          Free 30-minute audit. We map where the time is going before anyone
          talks about a build.
        </p>
      </div>
    </section>
  );
}
