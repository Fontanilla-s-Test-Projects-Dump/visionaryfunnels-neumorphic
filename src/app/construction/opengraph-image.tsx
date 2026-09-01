import { ogFrame, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-frame";

export const dynamic = "force-static";

export const alt =
  "Site tracking that runs on your team's group chat — VisionaryFunnels for general contractors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogFrame({
    eyebrow: "For General Contractors",
    title: "Your crew already reports everything. It just dies in the group chat.",
    accent: "#38BDF8",
  });
}
