import type { MetadataRoute } from "next"
import { SITE_URL } from "@/app/lib/site-data"

// /for/ is not disallowed on purpose: those pages carry noindex (meta + X-Robots-Tag),
// and crawlers can only obey a noindex they are allowed to fetch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
