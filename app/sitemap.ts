import type { MetadataRoute } from "next"
import { SITE_URL, industries } from "@/app/lib/site-data"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/seo-geo`, changeFrequency: "monthly", priority: 0.8 },
    ...industries.map((i) => ({
      url: `${SITE_URL}/industries/${i.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
