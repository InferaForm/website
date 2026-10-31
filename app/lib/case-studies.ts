// Real client results only, with the client's permission. While this list is empty the
// case study pages, nav and footer links and sitemap entries all stay hidden.

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  // e.g. "Water treatment dealer"; match an industry name to link the industry page
  clientType: string
  industrySlug?: string
  location: string
  // e.g. "Mar – May 2026"
  period: string
  problem: string
  whatWeDid: string[]
  // e.g. { label: "Cost per booked appointment", before: "$210", after: "$84" }
  metrics: { label: string; before?: string; after: string }[]
  quote?: { text: string; name: string; role: string }
  // ISO date the case study was published
  published: string
}

export const caseStudies: CaseStudy[] = []

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
