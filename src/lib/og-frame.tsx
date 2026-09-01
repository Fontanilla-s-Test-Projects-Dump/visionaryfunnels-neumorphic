import { ImageResponse } from "next/og";

/* Shared frame for every route's OG card. ImageResponse supports a subset of
   CSS — flexbox only, no grid, and every element needs an explicit display. */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function ogFrame({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#080B12",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(56,189,248,0.20) 0%, rgba(37,99,235,0.10) 40%, rgba(8,11,18,0) 75%)",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: "#2563EB",
            }}
          />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#E6EDF7" }}>
            Visionary
            <span style={{ color: "#38BDF8" }}>Funnels</span>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 2,
              color: accent,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#E6EDF7",
              maxWidth: 940,
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 90, height: 4, backgroundColor: accent }} />
          <div style={{ display: "flex", fontSize: 24, color: "#8B9AB3" }}>
            visionaryfunnels.com
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
