import type { MetadataRoute } from "next"
import { SITE_URL, industries } from "@/app/lib/site-data"
import { caseStudies } from "@/app/lib/case-studies"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/seo-geo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/calculator`, changeFrequency: "monthly", priority: 0.7 },
    ...industries.map((i) => ({
      url: `${SITE_URL}/industries/${i.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...(caseStudies.length > 0
      ? [
          { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly" as const, priority: 0.7 },
          ...caseStudies.map((c) => ({
            url: `${SITE_URL}/case-studies/${c.slug}`,
            lastModified: c.published,
            changeFrequency: "yearly" as const,
            priority: 0.7,
          })),
        ]
      : []),
  ]
}
