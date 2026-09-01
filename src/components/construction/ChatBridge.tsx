/* Hero signature — a site-group exchange becoming a tracked record.
   Sample conversation is illustrative, not a client transcript. */

const messages = [
  {
    who: "Foreman",
    initials: "RF",
    time: "07:42",
    text: "Sir kulang yung delivery ng gravel kanina — 15 cu.m lang dumating sa 20.",
    delay: "0.5s",
  },
  {
    who: "Site Engineer",
    initials: "MB",
    time: "07:44",
    text: "Noted. Pakuhanan ng photo yung DR bago umalis yung truck.",
    delay: "0.95s",
  },
  {
    who: "Foreman",
    initials: "RF",
    time: "07:51",
    text: "Sent na po sir. Follow-up ko na rin sa supplier.",
    delay: "1.4s",
  },
];

export default function ChatBridge() {
  return (
    <div className="cb-wrap">
      {/* ---- The site group ---- */}
      <div className="cb-panel">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] text-gray-light">
            SITE GROUP · PURCHASING
          </span>
        </div>

        <div className="space-y-2.5 p-4">
          {messages.map((m) => (
            <div
              key={m.time}
              className="cb-msg flex gap-2.5"
              style={{ animationDelay: m.delay }}
            >
              <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/8 font-mono text-[9px] text-gray">
                {m.initials}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] font-medium text-foreground/85">
                    {m.who}
                  </span>
                  <span className="font-mono text-[9px] text-gray-light">
                    {m.time}
                  </span>
                </div>
                <p className="mt-0.5 rounded-lg rounded-tl-sm bg-white/[0.05] px-2.5 py-1.5 text-[12px] leading-snug text-gray">
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- The wire ---- */}
      <div className="cb-rail">
        <span className="cb-packet" />
      </div>

      {/* ---- The record ---- */}
      <div className="cb-card cb-panel border-accent-glow/25">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-gray-light">
            REGISTRY
          </span>
          <span className="rounded-full bg-accent-glow/12 px-2 py-0.5 font-mono text-[9px] tracking-wider text-accent-glow">
            NEW · DELIVERY
          </span>
        </div>

        <div className="p-4">
          <p className="text-sm font-semibold text-foreground">
            Gravel delivery short — 15 of 20 cu.m
          </p>

          <p className="mt-2.5 border-l-2 border-accent-glow/40 pl-2.5 text-[11px] italic leading-snug text-gray">
            &ldquo;kulang yung delivery ng gravel kanina — 15 cu.m lang dumating
            sa 20&rdquo;
          </p>
          <p className="mt-1 font-mono text-[9px] tracking-wider text-gray-light">
            VERBATIM · NOT PARAPHRASED
          </p>

          <dl className="mt-3.5 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-border pt-3 font-mono text-[10px]">
            <div>
              <dt className="text-gray-light">OWNER</dt>
              <dd className="mt-0.5 text-foreground/85">Site Foreman</dd>
            </div>
            <div>
              <dt className="text-gray-light">AWAITING</dt>
              <dd className="mt-0.5 text-foreground/85">DR photo</dd>
            </div>
          </dl>

          <div className="cb-confirm mt-3.5 flex gap-2 rounded-lg">
            <span className="rounded-md bg-accent px-2.5 py-1 font-mono text-[10px] font-semibold text-white">
              ✓ Confirm
            </span>
            <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] text-gray">
              ✎ Fix
            </span>
            <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] text-gray">
              ✕ Remove
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-gray-light">
        Nobody typed this into a form.
      </p>
    </div>
  );
}
