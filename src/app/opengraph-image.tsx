import { ogFrame, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-frame";

export const dynamic = "force-static";

export const alt =
  "VisionaryFunnels — all your tools, running as one AI operating system";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogFrame({
    eyebrow: "AI Operating Systems",
    title: "All your tools, running as one AI operating system.",
    accent: "#38BDF8",
  });
}
