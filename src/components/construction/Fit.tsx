/* The qualifying gate that used to sit under the pricing tiers. Price did the
   filtering before; this does it now. */
export default function Fit() {
  return (
    <section className="px-6 lg:px-8 pb-20 md:pb-28 bg-surface-2">
      <div className="reveal max-w-6xl mx-auto">
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-light mb-3">
            Who this is for
          </p>
          <p className="text-gray leading-relaxed">
            Contractors running{" "}
            <span className="font-semibold text-foreground">
              more than one active site
            </span>
            , with a project-in-charge on staff who can approve what the system
            raises. If you&apos;re a two-man crew coordinating one job, this is
            more system than you need — and we&apos;ll tell you that on the call
            rather than sell it to you.
          </p>
          <p className="mt-5 border-t border-border pt-5 text-sm text-gray-light leading-relaxed">
            Hosting and running costs come to a few dollars a month per project.
            What you&apos;re paying for is the build and the people behind it,
            not software rent.
          </p>
        </div>
      </div>
    </section>
  );
}
