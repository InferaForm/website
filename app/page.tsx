'use client'

import React from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  Megaphone,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  Check,
  Clock,
  Gift,
  Palette,
  Workflow,
  MousePointerClick,
  CalendarCheck,
  Users,
  BarChart3,
  MapPin,
} from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Section, Pill, Reveal, fadeUp } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { Contact } from "@/app/components/site/Contact"
import { FaqList } from "@/app/components/site/FaqList"
import { industries } from "@/app/lib/site-data"
import { AdMakeover, LeadLeak, RampChart } from "@/app/components/site/Visuals"
import { Testimonials } from "@/app/components/site/Blocks"
import { JsonLd } from "@/app/components/site/JsonLd"
import { organization, faqPage } from "@/app/lib/structured-data"

// ---------- Hero ----------
const leadFlow = [
  { icon: Megaphone, label: "New lead from Facebook ad", detail: "Whole-home water softener · Mesa, AZ", time: "2:14 PM" },
  { icon: MessageSquare, label: "AI texted back", detail: "\u201cHi Dana, thanks for reaching out! Is your home on city water or a well?\u201d", time: "2:14 PM" },
  { icon: CalendarCheck, label: "Appointment booked", detail: "Free in-home water test · Thu 10:00 AM", time: "2:19 PM" },
]

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-[-12rem] -z-10 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <Section className="grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <Pill>Google &amp; Meta ads + AI follow-up</Pill>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Ads that bring you leads.{" "}
            <span className="text-primary">Automation that books them.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We run your Google and Meta ads, then our AI follows up with every new lead in under 60 seconds by text, call and email, so more of them end up as appointments on your calendar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact"><Button size="lg" className="w-full gap-2 sm:w-auto">Claim your free audit <ArrowRight className="h-4 w-4"/></Button></a>
            <a href="#how-it-works"><Button size="lg" variant="outline" className="w-full sm:w-auto">See how it works</Button></a>
          </div>

          <div className="mt-8 flex max-w-xl items-start gap-3 rounded-2xl border border-primary/25 bg-primary/[0.06] p-4">
            <Gift className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"/>
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">Free ad audit.</span>{" "}
              We show you where leads are leaking, no contract. Qualified businesses also get 3 custom ad creatives, yours to keep.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {[
              { icon: Clock, label: "Under 60s lead response" },
              { icon: Shield, label: "You own your ad accounts" },
              { icon: Calendar, label: "Month-to-month" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary"/> <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
          <div className="rounded-3xl border border-foreground/10 bg-card/80 p-5 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Lead activity</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Example flow
              </span>
            </div>
            <ol className="mt-5 space-y-3">
              {leadFlow.map(({ icon: Icon, label, detail, time }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.25 }}
                  className="flex gap-3 rounded-2xl border border-foreground/5 bg-background/60 p-4"
                >
                  <div className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl ${i === leadFlow.length - 1 ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground/80"}`}>
                    <Icon className="h-4 w-4"/>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold">{label}</p>
                      <span className="text-xs text-muted-foreground">{time}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">{detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

// ---------- Problem ----------
const problems = [
  {
    icon: Clock,
    title: "Leads go cold in minutes",
    desc: "Someone fills in a form and contacts three companies. Whoever calls back first usually gets the appointment.",
  },
  {
    icon: Users,
    title: "Shared leads are a race to the bottom",
    desc: "Lead marketplaces sell the same homeowner to several businesses. You pay full price to compete on speed and discounts.",
  },
  {
    icon: BarChart3,
    title: "Agencies report clicks, not jobs",
    desc: "Impressions and click-through rates look nice in a report. What you need to know is how many appointments the ads booked.",
  },
]

function Problem() {
  return (
    <Section className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl">
        <Pill>The problem</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Most leads are lost after the click</h2>
        <p className="mt-3 text-muted-foreground">
          Running ads is the easy part. Turning a form fill into a booked appointment is where most local businesses lose money.
        </p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="border-t border-foreground/10 pt-6">
            <Icon className="h-6 w-6 text-primary"/>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ---------- Services ----------
const services = [
  {
    icon: Megaphone,
    title: "Paid Ads",
    subtitle: "Google Search, Local Services Ads & Meta",
    features: [
      "Campaigns built around booked jobs, not clicks",
      "Local targeting by service area",
      "Conversion tracking set up properly",
      "Weekly optimization and budget pacing",
    ],
  },
  {
    icon: Palette,
    title: "Creative & Landing Pages",
    subtitle: "Ads people stop scrolling for",
    features: [
      "Static, video and UGC-style ad creative",
      "Fresh creative tested every month",
      "Fast, mobile-first landing pages",
      "Offers written for your market",
    ],
  },
  {
    icon: Workflow,
    title: "Lead Automation",
    subtitle: "Every lead contacted in under 60 seconds",
    features: [
      "Instant text, call and email follow-up",
      "AI receptionist that qualifies and books",
      "CRM pipeline with reminders and no-show recovery",
      "Re-engage old leads you already paid for",
    ],
  },
  {
    icon: MapPin,
    href: "/seo-geo",
    title: "SEO & GEO",
    subtitle: "Get found on Google Maps and in AI answers",
    features: [
      "Google Business Profile optimization and review growth",
      "Local service-area pages that rank",
      "Show up in ChatGPT, Gemini and Google AI Overviews",
      "Citations and listings kept consistent everywhere",
    ],
  },
]

function Services() {
  return (
    <Section id="services" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>What we do</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Ads, SEO and follow-up under one roof</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Most agencies stop at the lead. We stay with it until it&apos;s a booked appointment, because that&apos;s what actually grows your business.
        </p>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {services.map(({ icon: Icon, title, subtitle, features, href }, i) => (
          <Card key={title} className="group relative overflow-hidden hover:border-primary/40">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5"/>
                </div>
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <CardTitle className="pt-4 text-2xl">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0"/> <span>{f}</span>
                </div>
              ))}
              {href && (
                <a href={href} className="inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary hover:underline">
                  Learn about SEO &amp; GEO <ArrowRight className="h-4 w-4"/>
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

    </Section>
  )
}

// ---------- Pipeline (Ads + Automation) ----------
const pipeline = [
  { icon: Megaphone, title: "Ad", desc: "Someone in your area sees your ad on Google or Facebook." },
  { icon: MousePointerClick, title: "Landing page", desc: "They land on a page built for one offer and fill in a short form." },
  { icon: Zap, title: "Instant follow-up", desc: "Within 60 seconds they get a text and a call, day or night." },
  { icon: CalendarCheck, title: "Booked", desc: "The AI answers questions, qualifies them and books the appointment." },
  { icon: TrendingUp, title: "Optimize", desc: "We see which ads produce booked jobs and put the budget there." },
]

function Pipeline() {
  return (
    <div id="how-it-works" className="border-y border-foreground/5 bg-card/40">
      <Section className="py-16 lg:py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <Pill>How it works</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">From ad click to booked appointment</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Leads go cold fast. Answering in the first few minutes is often the difference between winning the job and losing it to whoever called back first.
          </p>
        </motion.div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-5">
          {pipeline.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <Card className="h-full bg-background/60 hover:border-primary/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl ${i === pipeline.length - 2 ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}><Icon className="h-5 w-5"/></div>
                    <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  </div>
                  <CardTitle className="text-lg pt-2">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
              {i < pipeline.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3.5 z-10 h-5 w-5 -translate-y-1/2 text-primary"/>
              )}
            </motion.li>
          ))}
        </ol>

        <LeadLeak />

        <div className="mt-10 flex justify-center">
          <a href="#contact"><Button size="lg" className="gap-2">Get your free audit <ArrowRight className="h-4 w-4"/></Button></a>
        </div>
      </Section>
    </div>
  )
}

// ---------- Industries teaser ----------
function IndustriesTeaser() {
  return (
    <Section id="industries" className="py-16 lg:py-24">
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Pill>Industries</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Built for high-ticket local businesses</h2>
          <p className="mt-3 text-muted-foreground">
            Every industry buys differently, so every playbook is different. Pick yours to see how we&apos;d approach it.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ slug, name, icon: Icon, tagline }) => (
          <a
            key={slug}
            href={`/industries/${slug}`}
            className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5"/>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{tagline}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary"/>
          </a>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Don&apos;t see your industry? If one customer is worth $1,000 or more to you, <a href="#contact" className="text-primary hover:underline">we should talk</a>.
      </p>
    </Section>
  )
}

// ---------- Pricing ----------
const tiers = [
  {
    name: "Ads",
    price: "$1,500",
    period: "/mo",
    for: "You already handle follow-up well and need more leads",
    features: [
      "Google Search or Meta campaigns",
      "Conversion tracking setup",
      "4 new ad creatives per month",
      "Weekly performance report",
    ],
    cta: "Start with ads",
  },
  {
    name: "Ads + Automation",
    price: "$2,500",
    period: "/mo",
    for: "The full system: leads in, appointments out",
    features: [
      "Google and Meta campaigns",
      "Landing page built and tested",
      "8 new ad creatives per month",
      "Instant AI text, call and email follow-up",
      "CRM pipeline and appointment reminders",
      "Weekly report on booked appointments",
    ],
    cta: "Get the full system",
    highlighted: true,
  },
  {
    name: "Pay per appointment",
    price: "Custom",
    period: "",
    for: "Pay only for qualified appointments that get booked",
    features: [
      "Everything in Ads + Automation",
      "Priced per booked appointment",
      "Available in select niches",
      "Based on your average job value",
    ],
    cta: "Ask about pricing",
  },
]

function Pricing() {
  return (
    <div id="pricing" className="border-y border-foreground/5 bg-card/40">
      <Section className="py-16 lg:py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <Pill>Pricing</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Straightforward pricing</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Month-to-month. Ad spend is paid directly to Google and Meta from your own accounts, so you always see exactly where it goes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`relative flex flex-col ${t.highlighted ? "border-primary/60 bg-gradient-to-b from-primary/[0.08] to-card shadow-glow" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.name}</CardTitle>
                  {t.highlighted && <Badge>Most popular</Badge>}
                </div>
                <div className="pt-4 font-display text-5xl font-semibold tracking-tight">
                  {t.price}<span className="ml-1 text-base font-normal text-muted-foreground">{t.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t.for}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 block">
                  <Button className="w-full" variant={t.highlighted ? "default" : "outline"}>{t.cta}</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          We recommend a starting ad budget of at least $1,500/month for most local markets.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-primary/25 bg-primary/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">Founding client program</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;re building our first case studies. Founding clients get reduced pricing for 3 months and only one business per service area.
            </p>
          </div>
          <a href="#contact" className="flex-shrink-0"><Button variant="outline">Apply for a spot</Button></a>
        </div>
      </Section>
    </div>
  )
}

// ---------- FAQ ----------
const qa = [
  {
    q: "How much should I spend on ads?",
    a: "For most local service businesses we recommend starting with at least $1,500 a month in ad spend. In competitive markets or high-ticket services, more budget usually means more booked jobs. We'll give you a recommendation for your area during the free audit.",
  },
  {
    q: "How quickly will I get leads?",
    a: "Campaigns usually go live within about two weeks of kickoff, and leads typically start coming in soon after launch. The first 60 to 90 days are when we learn what works best in your market and bring the cost per appointment down.",
  },
  {
    q: "Do I own my ad accounts?",
    a: "Yes. Campaigns run in your own Google and Meta ad accounts, and you pay the platforms directly. If you ever leave, you keep the accounts, the data and the creative.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We work month-to-month. We'd rather keep you because the results are good than because a contract says so.",
  },
  {
    q: "Will the AI follow-up sound robotic?",
    a: "The messages are written for your business and sound like a helpful person from your office. Your team can take over any conversation at any time, and anything the AI can't handle gets passed to you right away.",
  },
  {
    q: "Which industries and areas do you work with?",
    a: "Local businesses in the US and Canada where one customer is worth $1,000 or more, such as water treatment, roofing, HVAC, remodeling, basement waterproofing and med spas.",
  },
]

function FAQ() {
  return (
    <Section id="faq" className="py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Pill>FAQ</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Questions, answered</h2>
          <p className="mt-3 text-muted-foreground">
            Something else on your mind? <a href="#contact" className="text-primary hover:underline">Ask us directly.</a>
          </p>
        </Reveal>
        <FaqList items={qa} />
      </div>
    </Section>
  )
}

// ---------- Page ----------
export default function InferaformWebsite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={[organization, faqPage(qa)]} />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <AdMakeover example={industries[0].adExample} />
        <Pipeline />
        <RampChart />
        <Testimonials />
        <IndustriesTeaser />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
