import type { Metadata } from "next"
import { ArrowRight, Bot, Check, FileText, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Section, Pill, Reveal } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { Contact } from "@/app/components/site/Contact"
import { FaqList } from "@/app/components/site/FaqList"
import { JsonLd } from "@/app/components/site/JsonLd"
import { service, faqPage, breadcrumbs } from "@/app/lib/structured-data"

export const metadata: Metadata = {
  title: "Local SEO & GEO for Local Businesses | Inferaform",
  description:
    "Rank on Google Maps and show up in ChatGPT, Gemini and Google AI Overviews. Local SEO and Generative Engine Optimization for businesses in the US and Canada.",
  alternates: { canonical: "/seo-geo" },
}

const pillars = [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Show up in the Google Maps pack and local search results when people near you need your service.",
    points: [
      "Google Business Profile fully optimized and posted to weekly",
      "Review requests sent automatically after every job",
      "Service and city pages for each area you cover",
      "Consistent name, address and phone across directories",
    ],
  },
  {
    icon: Bot,
    title: "GEO (Generative Engine Optimization)",
    desc: "Make your business the one AI assistants recommend when someone asks who to hire.",
    points: [
      "Content structured so ChatGPT, Gemini and Perplexity can cite you",
      "Clear answers to the questions customers ask AI assistants",
      "Schema markup so search engines and AI understand your services",
      "Mentions on the review sites and directories AI tools pull from",
    ],
  },
]

const monthly = [
  { icon: Star, title: "Reviews", desc: "Automated review requests and responses to every review." },
  { icon: MapPin, title: "Google Business Profile", desc: "Weekly posts, photos, services and Q&A kept up to date." },
  { icon: FileText, title: "Content", desc: "New service and location pages written to answer real customer questions." },
  { icon: Search, title: "Reporting", desc: "Monthly report on rankings, calls from Maps and mentions in AI answers." },
]

const faq = [
  {
    q: "What is GEO?",
    a: "Generative Engine Optimization means making your business easy for AI tools like ChatGPT, Gemini, Perplexity and Google AI Overviews to find, understand and recommend. It builds on good SEO: clear content, structured data, strong reviews and consistent listings.",
  },
  {
    q: "How long does SEO take to work?",
    a: "Google Business Profile and review improvements often show results within a few months. Ranking new pages for competitive terms usually takes longer. That's why we pair SEO with ads, which bring leads from day one.",
  },
  {
    q: "Can you guarantee a #1 ranking or an AI mention?",
    a: "No one can honestly guarantee that, since Google and AI companies control their results. We focus on the things that consistently move rankings and track progress every month.",
  },
  {
    q: "Can I get SEO without ads?",
    a: "Yes. SEO & GEO can be added to any plan or run on its own. We'll recommend what makes sense for your market during the free audit.",
  },
]

export default function SeoGeoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          service({
            name: "Local SEO and Generative Engine Optimization (GEO)",
            description: "Rank on Google Maps and show up in ChatGPT, Gemini and Google AI Overviews.",
            path: "/seo-geo",
          }),
          faqPage(faq),
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "SEO & GEO", path: "/seo-geo" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div className="absolute left-1/2 top-[-12rem] -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <Section className="grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <Reveal>
              <Pill>SEO &amp; GEO</Pill>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
                Get found on Google <span className="text-primary">and in AI answers.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Your customers still search Google and Google Maps, but more of them now ask ChatGPT or see an AI Overview first. We make sure your business shows up in both.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact"><Button size="lg" className="w-full gap-2 sm:w-auto">Get your free audit <ArrowRight className="h-4 w-4"/></Button></a>
                <a href="#whats-included"><Button size="lg" variant="outline" className="w-full sm:w-auto">What&apos;s included</Button></a>
              </div>
            </Reveal>

            <div className="rounded-3xl border border-foreground/10 bg-card/80 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bot className="h-4 w-4 text-primary"/> AI assistant
              </div>
              <div className="mt-4 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-foreground/[0.06] px-4 py-3 text-sm">
                Who&apos;s the best water softener company near Mesa, AZ?
              </div>
              <div className="mt-3 max-w-[90%] rounded-2xl rounded-bl-md border border-primary/25 bg-primary/[0.06] px-4 py-3 text-sm">
                <p>Here are a few well-reviewed options near Mesa:</p>
                <p className="mt-2 font-semibold text-primary">1. Your Business Here</p>
                <p className="text-muted-foreground">4.9 stars from 230+ reviews, offers free in-home water tests…</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Example. This is the spot we work to get you into.</p>
            </div>
          </Section>
        </div>

        {/* Pillars */}
        <Section id="whats-included" className="py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <Pill>What we do</Pill>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Two ways customers find you, one plan</h2>
            <p className="mt-3 text-muted-foreground">
              Ads bring leads today. SEO and GEO build a steady stream of free leads that keeps growing month after month.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, desc, points }) => (
              <div key={title} className="rounded-2xl border bg-card p-6 sm:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5"/></div>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Monthly work */}
        <div className="border-y border-foreground/5 bg-card/40">
          <Section className="py-16 lg:py-24">
            <Reveal className="text-center">
              <Pill>Every month</Pill>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold">What you get each month</h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {monthly.map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <Icon className="h-6 w-6 text-primary"/>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section className="py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Pill>FAQ</Pill>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">SEO &amp; GEO questions</h2>
            </Reveal>
            <FaqList items={faq} />
          </div>
        </Section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
