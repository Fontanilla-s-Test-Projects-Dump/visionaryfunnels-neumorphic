export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 bg-dark">
      {/* Background glow bookend */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/4 bg-glow" aria-hidden />

      <div className="reveal relative max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Chaos ends here.{" "}
          <span className="text-accent-light">Clarity starts now.</span>
        </h2>

        <p className="text-lg text-gray-light leading-relaxed mb-10 max-w-xl mx-auto">
          If 500 new clients showed up tomorrow, would your operations hold? If
          the answer isn&apos;t a confident &ldquo;yes,&rdquo; let&apos;s talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="btn-primary bg-accent text-white text-base font-semibold px-8 py-4 rounded-full"
          >
            Book a Discovery Call
          </a>
          <a
            href="#offer"
            className="btn-secondary bg-white/10 text-white text-base font-semibold px-8 py-4 rounded-full border border-white/20"
          >
            See How It Works
          </a>
        </div>

        <p className="text-gray-light/60 text-sm mt-8">
          Free 15-minute call. No pitch. Just a conversation about what&apos;s
          breaking.
        </p>
      </div>
    </section>
  );
}
