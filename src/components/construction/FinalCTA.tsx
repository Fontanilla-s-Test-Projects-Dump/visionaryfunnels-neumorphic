export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 bg-dark">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/4 bg-glow" aria-hidden />

      <div className="reveal relative max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Open your site group.{" "}
          <span className="text-accent-light">Scroll back one week.</span>
        </h2>

        <p className="text-lg text-gray-light leading-relaxed mb-10 max-w-xl mx-auto">
          Count what was decided in there that never made it into a record. That
          number is what this fixes — and it&apos;s the only thing worth talking
          about on the call.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="btn-primary bg-accent text-white text-base font-semibold px-8 py-4 rounded-full"
          >
            Book a 20-minute walkthrough
          </a>
          <a
            href="#bridge"
            className="btn-secondary bg-white/10 text-white text-base font-semibold px-8 py-4 rounded-full border border-white/20"
          >
            See how it works
          </a>
        </div>

        <p className="text-gray-light/60 text-sm mt-8">
          No slides. We look at how your sites actually communicate today.
        </p>
      </div>
    </section>
  );
}
