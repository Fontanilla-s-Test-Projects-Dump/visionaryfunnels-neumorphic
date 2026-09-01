// Hero signature: the AIOS nucleus, with two shells of client tools (brand
// logos) orbiting it like an atom. On load (and every cycle) the core explodes
// outward; a single shockwave sweeps out and ACTIVATES each icon's border as it
// passes (power up -> glow), the tools orbit lit, then power down as they
// spiral back in and merge into the hub. SVG + SMIL — no CSS dependency.

import { TOOL_ICONS, TOOL_ICONS_OUTER, type ToolIcon } from "@/components/toolIcons";

const C = 270; // center (viewBox 540 leaves room for the shockwave)
const R_IN = 150; // inner orbit radius
const R_OUT = 198; // outer orbit radius
const SPIN = "64s"; // one revolution
const CYCLE = "11s"; // merged -> explode -> orbit -> collapse -> merge

// Cycle phases (start collapsed so it bursts open on load):
// 0.00 merged · 0.04 hold · 0.20 exploded · 0.60 orbit · 0.85 collapsed · 1 merged
const BREATHE_KEYTIMES = "0; 0.04; 0.20; 0.60; 0.85; 1";
const BREATHE_SPLINES =
  "0 0 1 1 ; 0.1 0.7 0.3 1 ; 0 0 1 1 ; 0.45 0 0.9 0.45 ; 0 0 1 1";

function Badge({
  tool,
  radius,
  angleDeg,
  badgeR,
  iconSize,
  activateAt,
}: {
  tool: ToolIcon;
  radius: number;
  angleDeg: number;
  badgeR: number;
  iconSize: number;
  activateAt: number; // keyTime when the shockwave reaches this ring
}) {
  const theta = (angleDeg * Math.PI) / 180;
  const tx = C + radius * Math.sin(theta);
  const ty = C - radius * Math.cos(theta);
  const h = iconSize / 2;
  const o = `${tx} ${ty}`;
  const c = `${C} ${C}`;
  const a = activateAt;
  // power up -> bright -> settle to glow (hold through orbit) -> power down on collapse
  const actKeyTimes = `0; ${a}; ${(a + 0.07).toFixed(2)}; ${(a + 0.15).toFixed(2)}; 0.62; 0.84; 1`;
  return (
    <g opacity={0}>
      <animate attributeName="opacity" from="0" to="1" dur="0.35s" begin="0s" fill="freeze" />
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        values={`${c}; ${c}; ${o}; ${o}; ${c}; ${c}`}
        keyTimes={BREATHE_KEYTIMES}
        calcMode="spline"
        keySplines={BREATHE_SPLINES}
        dur={CYCLE}
        repeatCount="indefinite"
      />
      <g>
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0" to="-360" dur={SPIN} repeatCount="indefinite" />
        {/* badge body */}
        <circle r={badgeR} fill="#0E1420" stroke="rgba(255,255,255,0.16)" strokeWidth={1} />
        {/* activation glow — lights up as the shockwave passes, then powers down */}
        <circle r={badgeR} fill="none" stroke="#38BDF8" strokeWidth={3} opacity={0} filter="url(#softGlow)">
          <animate attributeName="opacity" values="0;0;0.9;0.5;0.5;0;0" keyTimes={actKeyTimes} dur={CYCLE} repeatCount="indefinite" />
        </circle>
        {/* activation crisp edge */}
        <circle r={badgeR} fill="none" stroke="#A5F3FC" strokeWidth={1.4} opacity={0}>
          <animate attributeName="opacity" values="0;0;1;0.55;0.55;0;0" keyTimes={actKeyTimes} dur={CYCLE} repeatCount="indefinite" />
        </circle>
        <svg x={-h} y={-h} width={iconSize} height={iconSize} viewBox={tool.viewBox} dangerouslySetInnerHTML={{ __html: tool.inner }} />
      </g>
    </g>
  );
}

export default function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 540 540"
      className="w-full h-auto max-w-[520px] mx-auto"
      role="img"
      aria-label="Business tools exploding out of and orbiting one central AI operating system"
    >
      <defs>
        <radialGradient id="hubGrad" cx="50%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
        <filter id="bloom" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="softGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* faint orbit rings */}
      <circle cx={C} cy={C} r={R_IN} fill="none" stroke="rgba(56,189,248,0.13)" strokeWidth={1} strokeDasharray="2 7" />
      <circle cx={C} cy={C} r={R_OUT} fill="none" stroke="rgba(56,189,248,0.09)" strokeWidth={1} strokeDasharray="2 8" />

      {/* spinning shells */}
      <g>
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from={`0 ${C} ${C}`} to={`360 ${C} ${C}`} dur={SPIN} repeatCount="indefinite" />
        {TOOL_ICONS.map((tool, i) => (
          <Badge key={`in-${tool.name}`} tool={tool} radius={R_IN} angleDeg={i * 60} badgeR={23} iconSize={26} activateAt={0.25} />
        ))}
        {TOOL_ICONS_OUTER.map((tool, i) => (
          <Badge key={`out-${tool.name}`} tool={tool} radius={R_OUT} angleDeg={30 + i * 60} badgeR={16} iconSize={19} activateAt={0.35} />
        ))}
      </g>

      {/* hub bloom — swells at the merge */}
      <circle cx={C} cy={C} r={72} fill="#2563EB" opacity={0.42} filter="url(#bloom)">
        <animate attributeName="opacity" values="0.42;0.42;0.85;0.42" keyTimes="0;0.8;0.93;1" dur={CYCLE} repeatCount="indefinite" />
      </circle>
      <circle cx={C} cy={C} r={64} fill="url(#hubGrad)" />
      {/* merge flash */}
      <circle cx={C} cy={C} r={64} fill="#BAE6FD" opacity={0}>
        <animate attributeName="opacity" values="0;0;0.8;0.25;0" keyTimes="0;0.84;0.93;0.98;1" dur={CYCLE} repeatCount="indefinite" />
      </circle>

      {/* (shockwave removed — the icons still activate in an inner→outer sweep) */}

      {/* hub rim + label */}
      <circle cx={C} cy={C} r={64} fill="none" stroke="rgba(56,189,248,0.55)" strokeWidth={1} />
      <text x={C} y={C - 2} textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="24" fontWeight="700" fill="#FFFFFF">
        AIOS
      </text>
      <text x={C} y={C + 16} textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="1.5" fill="rgba(230,237,247,0.8)">
        ONE SYSTEM
      </text>
    </svg>
  );
}
