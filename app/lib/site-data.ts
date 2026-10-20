import {
  Droplets,
  Home,
  Thermometer,
  Hammer,
  Waves,
  Smile,
  Crosshair,
  FlaskConical,
  Target,
  LayoutTemplate,
  Gauge,
  Zap,
  Search,
  Wrench,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

export type Industry = {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
  headline: string
  intro: string
  pain: string
  approach: string
  offers: string[]
  channels: { name: string; why: string }[]
  faq: { q: string; a: string }[]
}

export const industries: Industry[] = [
  {
    slug: "water-treatment",
    name: "Water treatment",
    icon: Droplets,
    tagline: "Free water test offers that fill your calendar",
    headline: "More in-home water tests for water treatment dealers",
    intro:
      "Most homeowners don't know they have a water problem until someone shows them. We run ads that get them curious, then book the in-home test before they cool off.",
    pain: "Homeowners don't know they have a water problem until someone shows them, and most dealers rely on referrals or shared leads.",
    approach: "Free water test offers on Meta, plus Google ads for hard water, well water and softener searches.",
    offers: [
      "Free in-home water test",
      "Hard water check with a same-week appointment",
      "Well water analysis for rural homeowners",
      "Seasonal softener tune-up for existing customers",
    ],
    channels: [
      { name: "Meta ads", why: "Reaches homeowners in your area before they start searching, with simple water test offers." },
      { name: "Google Search", why: "Catches people already searching for water softeners, filtration or well water treatment." },
      { name: "AI follow-up", why: "Asks whether they're on city water or a well and books the test while they're still interested." },
    ],
    faq: [
      { q: "Do you work with dealers of specific brands?", a: "Yes. We work with independent dealers of brands like Kinetico, RainSoft, EcoWater and Hague, as long as you control your own local marketing." },
      { q: "Can you target well water homes?", a: "We target rural areas and use well water specific messaging and keywords, which tends to attract homeowners who need treatment most." },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    icon: Home,
    tagline: "Be the first roofer to call after the storm",
    headline: "More roof inspections booked, especially after storms",
    intro:
      "Roofing demand spikes after bad weather, and the company that responds first usually wins the inspection. We make sure that's you.",
    pain: "Demand spikes after storms, and the fastest company to respond wins the inspection.",
    approach: "Storm-triggered campaigns, free inspection offers and instant follow-up so you're first to call.",
    offers: [
      "Free roof inspection with photos",
      "Storm damage check and insurance claim help",
      "Same-week replacement estimate",
      "Financing options for full replacements",
    ],
    channels: [
      { name: "Google Search & LSA", why: "Captures urgent searches like roof leak repair or storm damage roofer." },
      { name: "Meta ads", why: "Reaches homeowners in hail and wind-affected zip codes right after a storm." },
      { name: "AI follow-up", why: "Calls and texts within seconds so you book the inspection before competitors do." },
    ],
    faq: [
      { q: "Can you launch campaigns right after a storm?", a: "Yes. We prepare storm campaigns in advance so they can go live in affected areas within hours." },
      { q: "Do you handle residential or commercial roofing?", a: "Mostly residential, where ads and fast follow-up have the biggest impact. We can discuss commercial on a call." },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: Thermometer,
    tagline: "Emergency calls and system replacements",
    headline: "More HVAC service calls and system replacements",
    intro:
      "Emergency repair clicks are expensive, and replacement jobs take longer to close. We split the two so each gets the right campaign and follow-up.",
    pain: "Emergency calls are expensive on Google, and replacement jobs take longer to close.",
    approach: "Local Services Ads for emergencies and Meta campaigns for system replacement and financing offers.",
    offers: [
      "Same-day AC or furnace repair",
      "Free replacement estimate with financing",
      "Seasonal tune-up for new customers",
      "Maintenance plan sign-ups",
    ],
    channels: [
      { name: "Local Services Ads", why: "Puts you at the top of Google for emergency searches, and you pay per lead instead of per click." },
      { name: "Meta ads", why: "Promotes replacement and financing offers to homeowners with older systems." },
      { name: "AI follow-up", why: "Answers after-hours leads instantly and books them into your dispatch schedule." },
    ],
    faq: [
      { q: "Can you help us get more replacement jobs, not just repairs?", a: "Yes. We run separate campaigns for replacements with financing offers and follow up over several weeks, since these decisions take longer." },
      { q: "What about after-hours leads?", a: "The AI follow-up answers 24/7 and can book or escalate emergencies to your on-call tech." },
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    icon: Hammer,
    tagline: "Fewer tire-kickers, more real projects",
    headline: "Qualified kitchen and bathroom remodel leads",
    intro:
      "Remodeling projects are high value, but many leads aren't ready or don't have the budget. We filter them before they reach your calendar.",
    pain: "High-value projects with long decision cycles and lots of tire-kickers.",
    approach: "Before-and-after creative, budget pre-qualification in the form, and nurture sequences until they're ready.",
    offers: [
      "Free design consultation",
      "Kitchen or bath remodel estimate",
      "Financing for larger projects",
      "Limited-time design package for booked projects",
    ],
    channels: [
      { name: "Meta ads", why: "Before-and-after photos and video perform well for remodeling and reach people planning a project." },
      { name: "Google Search", why: "Captures high-intent searches like kitchen remodel near me." },
      { name: "AI follow-up", why: "Asks about budget and timeline, then nurtures leads who aren't ready yet." },
    ],
    faq: [
      { q: "How do you filter out low-budget leads?", a: "The form and AI follow-up ask about project scope, budget range and timeline, so you only meet people who are a fit." },
      { q: "Can you use photos of our past projects?", a: "Yes. Your real project photos usually make the best-performing ads." },
    ],
  },
  {
    slug: "basement-waterproofing",
    name: "Basement waterproofing",
    icon: Waves,
    tagline: "Win the job when the water comes in",
    headline: "More basement waterproofing and foundation inspections",
    intro:
      "Customers usually search in a panic after a leak, then compare three quotes. We get you there first and build trust before the estimate.",
    pain: "Customers search in a panic after a leak, then compare three quotes.",
    approach: "Search ads for urgent problems, plus educational video that builds trust before the estimate.",
    offers: [
      "Free basement inspection",
      "Wet basement assessment within 48 hours",
      "Foundation crack evaluation",
      "Financing for larger repairs",
    ],
    channels: [
      { name: "Google Search & LSA", why: "Captures urgent searches like wet basement repair or foundation crack." },
      { name: "Meta ads", why: "Short educational videos build trust with homeowners before they need you." },
      { name: "AI follow-up", why: "Responds instantly when someone has water in their basement and books the inspection." },
    ],
    faq: [
      { q: "Do you target specific seasons?", a: "Yes. We increase budget during rainy seasons and snowmelt, when demand peaks." },
      { q: "Can you also promote foundation repair?", a: "Yes. We usually run separate campaigns for waterproofing and foundation repair, since people search for them differently." },
    ],
  },
  {
    slug: "med-spas",
    name: "Med spas",
    icon: Smile,
    tagline: "More consultations, fewer no-shows",
    headline: "More booked consultations for med spas",
    intro:
      "There's plenty of interest in aesthetic treatments, but many bookings never show up. We pair compliant ads with instant booking and reminders.",
    pain: "Lots of interest in treatments, but many bookings never show up.",
    approach: "Offer-led Meta campaigns within ad policy, instant booking by text and reminders that cut no-shows.",
    offers: [
      "New client consultation",
      "Introductory treatment offer",
      "Membership or package sign-ups",
      "Seasonal promotions for existing clients",
    ],
    channels: [
      { name: "Meta & Instagram ads", why: "Visual, offer-led creative that follows Meta's rules for health and beauty ads." },
      { name: "Google Search", why: "Captures searches for specific treatments in your area." },
      { name: "AI follow-up", why: "Books consultations by text and sends reminders that reduce no-shows." },
    ],
    faq: [
      { q: "Can you run ads that follow Meta's health policies?", a: "Yes. We write creative and landing pages that follow Meta's rules on health claims and before-and-after imagery." },
      { q: "Do you work with medical practices too?", a: "We focus on med spas and aesthetic clinics. We can discuss other practices on a call." },
    ],
  },
]

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug)

export const adImprovements = [
  {
    icon: Crosshair,
    title: "A sharper offer",
    before: "“Quality service, call today”",
    after: "A specific, low-risk offer like a free in-home water test or a same-week roof inspection.",
  },
  {
    icon: FlaskConical,
    title: "Creative that's always tested",
    before: "One ad running for months until it stops working",
    after: "New hooks, images and videos every month. Winners get more budget, losers get switched off.",
  },
  {
    icon: Target,
    title: "Tighter targeting",
    before: "Broad keywords and wasted spend on people who'll never buy",
    after: "Service-area targeting, negative keywords and audiences built from your real customers.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing pages built to convert",
    before: "Sending paid clicks to your homepage",
    after: "One page per offer, fast on mobile, with reviews, a short form and click-to-call.",
  },
  {
    icon: Gauge,
    title: "Tracking that counts jobs",
    before: "Reports full of clicks and impressions",
    after: "Conversion tracking tied to calls, forms and booked appointments, so Google and Meta optimize for real customers.",
  },
  {
    icon: Zap,
    title: "Follow-up in seconds",
    before: "Leads wait hours for a callback",
    after: "Every lead gets a text and call in under 60 seconds, with reminders until they book.",
  },
]

export const processSteps = [
  { icon: Search, when: "Day 1", title: "Free audit", desc: "We review your current ads, website and follow-up, and show you where leads are slipping through." },
  { icon: Wrench, when: "Week 1", title: "Build", desc: "Tracking, landing page, first round of ad creative and your follow-up automation, all set up and tested." },
  { icon: Rocket, when: "Week 2", title: "Launch", desc: "Campaigns go live on Google and Meta. Every lead gets an instant reply and lands in your pipeline." },
  { icon: TrendingUp, when: "Ongoing", title: "Optimize", desc: "Weekly report on leads, cost per lead and booked appointments. New creative every month." },
]
