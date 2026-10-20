import { SITE_URL, type Industry } from "@/app/lib/site-data"

type Faq = { q: string; a: string }

const areaServed = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
]

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Inferaform",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: "inferaform@gmail.com",
  description:
    "Google and Meta ads, AI lead follow-up and local SEO for high-ticket local businesses in the US and Canada.",
  areaServed,
}

export const faqPage = (items: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
})

export const service = ({ name, description, path, audience }: { name: string; description: string; path: string; audience?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${SITE_URL}${path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed,
  ...(audience && { audience: { "@type": "BusinessAudience", name: audience } }),
})

export const industryService = (industry: Industry) =>
  service({
    name: `${industry.name} marketing: Google & Meta ads and AI lead follow-up`,
    description: industry.intro,
    path: `/industries/${industry.slug}`,
    audience: `${industry.name} businesses`,
  })

export const breadcrumbs = (crumbs: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path}`,
  })),
})
