// Personal preview pages for businesses we contacted through their own website form.
// Each one lives at /for/<slug>. The data is written by leadflow/scripts/local-leads/form-messages.mjs
// into prospects.json; the slug ends in random characters so one business cannot guess another's page.
// These pages are kept out of search engines (noindex here and Disallow: /for/ in robots.ts).
import data from "./prospects.json"

export type Prospect = {
  slug: string
  business: string
  trade: string
  city: string
  state: string
  rating: number | null
  reviews: number
  // A short made-up exchange in their trade: what a new customer sends through the form at night,
  // the reply they would get within a minute, the customer's answer, and the reply that books them.
  customerAsk: string
  reply1: string
  customerFollow: string
  reply2: string
  replyPromise: string | null
  // Their own website, shown in the "opened their page" alert. Never shown on the page.
  website?: string
}

export const prospects = data as Prospect[]
export const getProspect = (slug: string) => prospects.find((p) => p.slug === slug)
export const BOOKING_URL = "https://calendar.app.google/3nUST4xsqchDzfdUA"
