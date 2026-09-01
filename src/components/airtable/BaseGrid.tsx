/* Hero signature — a base view with an automation pass running down it.
   Sample records are illustrative. */

const rows = [
  { name: "Riverside — Phase 2", owner: "MB", status: "Approved", tone: "done", pct: 100 },
  { name: "Acme onboarding", owner: "RF", status: "In progress", tone: "wip", pct: 62 },
  { name: "Q3 supplier audit", owner: "LC", status: "Needs review", tone: "wait", pct: 38 },
  { name: "Invoice run — August", owner: "JT", status: "In progress", tone: "wip", pct: 74 },
  { name: "New hire kit", owner: "SK", status: "Approved", tone: "done", pct: 100 },
];

const toneClass: Record<string, string> = {
  done: "bg-emerald-400/12 text-emerald-300",
  wip: "bg-accent-glow/12 text-accent-glow",
  wait: "bg-amber-400/12 text-amber-300",
};

export default function BaseGrid() {
  return (
    <div>
      <div className="ag-wrap">
        {/* Field header */}
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border px-4 py-2.5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-gray-light">
            PROJECT
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] text-gray-light">
            STATUS
          </span>
          <span className="w-12 text-right font-mono text-[10px] tracking-[0.14em] text-gray-light">
            DONE
          </span>
        </div>

        <div className="relative">
          <span className="ag-sweep" aria-hidden />

          {rows.map((row, i) => (
            <div
              key={row.name}
              className="ag-row grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border/60 px-4 py-2.5 last:border-b-0"
              style={{ animationDelay: `${0.35 + i * 0.13}s` }}
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/8 font-mono text-[8px] text-gray">
                  {row.owner}
                </span>
                <span className="truncate text-[12px] text-foreground/85">
                  {row.name}
                </span>
              </div>

              {/* Row 3 flips as the sweep passes; the rest hold */}
              {i === 2 ? (
                <span className="ag-stat">
                  <span
                    className={`ag-stat-a block rounded-md px-2 py-0.5 font-mono text-[10px] ${toneClass.wait}`}
                  >
                    Needs review
                  </span>
                  <span
                    className={`ag-stat-b block rounded-md px-2 py-0.5 text-center font-mono text-[10px] ${toneClass.done}`}
                  >
                    Approved
                  </span>
                </span>
              ) : (
                <span
                  className={`rounded-md px-2 py-0.5 font-mono text-[10px] ${toneClass[row.tone]}`}
                >
                  {row.status}
                </span>
              )}

              <span className="w-12 text-right font-mono text-[10px] text-gray">
                {row.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-gray-light">
        One source of truth. Not four spreadsheets.
      </p>
    </div>
  );
}
