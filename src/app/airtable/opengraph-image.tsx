import { ogFrame, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-frame";

export const dynamic = "force-static";

export const alt =
  "Custom Airtable systems, dashboards and workflow automation by VisionaryFunnels";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogFrame({
    eyebrow: "Airtable & Workflow Automation",
    title: "Turn chaos into clarity with Airtable & workflow automations.",
    accent: "#38BDF8",
  });
}
