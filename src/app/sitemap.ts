import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://visionaryfunnels.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${BASE}/airtable`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/construction`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
