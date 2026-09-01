import Link from "next/link";

/* Diverts contractors off the general pitch and onto the vertical page,
   after they've seen what we build but before the Investment section. */
export default function ConstructionBanner() {
  return (
    <section className="px-6 lg:px-8 pb-4 md:pb-8">
      <div className="reveal max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-accent-glow/25 bg-surface p-8 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-glow opacity-60"
            aria-hidden
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-light mb-3">
                For Construction
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                Running job sites? There&apos;s a version built for them.
              </h2>
              <p className="text-gray leading-relaxed">
                Site issues, material requests, deliveries and RFIs tracked
                straight out of your team&apos;s group chat — no new app for the
                field, and no logins below your project-in-charge.
              </p>
            </div>

            <Link
              href="/construction"
              className="btn-primary shrink-0 rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white"
            >
              See the construction system →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
