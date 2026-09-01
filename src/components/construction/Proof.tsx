const stats = [
  { stat: "14/14", label: "open loose ends found and tracked" },
  { stat: "0", label: "quotes dropped or paraphrased" },
  { stat: "< $1", label: "per day to run, per active project" },
];

export default function Proof() {
  return (
    <section id="proof" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="reveal max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            From the Pilot
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Day one, on a live job site
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            This is a deployment in progress, not a finished case study. Here is
            exactly what the first day produced.
          </p>
        </div>

        <div className="card p-8 md:p-10">
          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-mono text-xs text-accent-light uppercase tracking-wider mb-4">
                Live Pilot · Philippine Civil Works Contractor
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                Fifty messages in. Nothing lost.
              </h3>
              <p className="text-gray leading-relaxed mb-4">
                A civil-works contractor — roughly 15 core staff plus 25
                project-based crew — was running every site through a chat
                community that had collapsed into one General channel. We put
                the bridge on a single live project.
              </p>
              <p className="text-gray leading-relaxed mb-5">
                On the first day it minuted eight real conversations in mixed
                Bisaya, Tagalog and English, tracked every open loose end it was
                asked to surface, and stored every quantity exactly as the
                foreman said it. The crew did nothing differently.
              </p>
              <p className="font-mono text-xs text-gray-light leading-relaxed">
                Client anonymized at their request. Figures are from the first
                day of a live pilot, not a completed rollout.
              </p>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((s) => (
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
      </div>
    </section>
  );
}
