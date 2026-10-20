'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  MessageSquare,
  Megaphone,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  Check,
  Mail,
  Globe,
  Clock,
  Search,
  Gift,
  Palette,
  Workflow,
  MousePointerClick,
  CalendarCheck,
  Users,
  BarChart3,
  Wrench,
  Rocket,
  Target,
  Droplets,
  Home,
  Thermometer,
  Hammer,
  Waves,
  Smile,
  MapPin,
  Bot,
  FlaskConical,
  Crosshair,
  LayoutTemplate,
  Gauge,
  } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Label } from "@/app/components/ui/label"
import { toast } from "sonner"

// ---------- Helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Section = ({ id, className = "", children }: React.PropsWithChildren<{ id?: string; className?: string }>) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const Pill = ({ children }: React.PropsWithChildren) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-foreground/70">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {children}
  </div>
)

const LogoMark = () => (
  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
    <Zap className="h-4 w-4" strokeWidth={2.5} />
  </span>
)

// ---------- Navbar ----------
function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/5 bg-background/70 backdrop-blur-xl">
      <Section className="flex items-center justify-between py-3.5">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg font-semibold tracking-tight">Inferaform</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#how-it-works" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#industries" className="transition-colors hover:text-foreground">Industries</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:block">
            <Button variant="ghost">Book a call</Button>
          </a>
          <a href="#contact">
            <Button className="gap-2">Free audit <ArrowRight className="h-4 w-4"/></Button>
          </a>
        </div>
      </Section>
    </header>
  )
}

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
              <span className="font-semibold text-foreground">Free ad audit + 3 custom ad creatives.</span>{" "}
              We show you where leads are leaking and design three ads for your business. Yours to keep, no contract.
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
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-foreground/5 pt-5">
              <div>
                <p className="font-display text-2xl font-semibold">38s</p>
                <p className="text-xs text-muted-foreground">to first reply</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold">5 min</p>
                <p className="text-xs text-muted-foreground">click to booked</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
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
        {services.map(({ icon: Icon, title, subtitle, features }, i) => (
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

        <div className="mt-10 flex justify-center">
          <a href="#contact"><Button size="lg" className="gap-2">Get your free audit <ArrowRight className="h-4 w-4"/></Button></a>
        </div>
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

// ---------- How we make ads better ----------
const adImprovements = [
  {
    icon: Crosshair,
    title: "A sharper offer",
    before: "\u201cQuality service, call today\u201d",
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

function AdsBetter() {
  return (
    <Section id="results" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>How we get better results</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">What we change in your ads</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Most underperforming ad accounts have the same handful of problems. Here&apos;s what we fix first.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adImprovements.map(({ icon: Icon, title, before, after }) => (
          <Card key={title} className="hover:border-primary/40">
            <CardHeader className="pb-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5"/></div>
              <CardTitle className="pt-3 text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-xl bg-foreground/[0.03] p-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Typical</p>
                <p className="mt-1 text-muted-foreground line-through decoration-foreground/20">{before}</p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/[0.06] p-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">With us</p>
                <p className="mt-1">{after}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// ---------- SEO & GEO ----------
const seoGeo = [
  {
    icon: MapPin,
    title: "Local SEO",
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
    points: [
      "Content structured so ChatGPT, Gemini and Perplexity can cite you",
      "Clear answers to the questions customers ask AI assistants",
      "Schema markup so search engines and AI understand your services",
      "Mentions on the review sites and directories AI tools pull from",
    ],
  },
]

function SeoGeo() {
  return (
    <div id="seo" className="border-y border-foreground/5 bg-card/40">
      <Section className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Pill>SEO &amp; GEO</Pill>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Get found where people search now</h2>
            <p className="mt-4 text-muted-foreground">
              Your customers still search Google and Google Maps, but more of them now ask ChatGPT or see an AI Overview first. Ads bring leads today. SEO and GEO build a steady stream of free leads that keeps growing.
            </p>
            <div className="mt-6 rounded-2xl border border-foreground/10 bg-background/60 p-4 text-sm">
              <p className="text-muted-foreground">Someone asks an AI assistant:</p>
              <p className="mt-1 font-medium">&ldquo;Who&apos;s the best water softener company near Mesa, AZ?&rdquo;</p>
              <p className="mt-3 text-muted-foreground">Our goal is for your business to be in the answer.</p>
            </div>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {seoGeo.map(({ icon: Icon, title, points }) => (
              <Card key={title} className="bg-background/60">
                <CardHeader className="pb-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5"/></div>
                  <CardTitle className="pt-3 text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/> <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

// ---------- Industries ----------
const industryCards = [
  {
    icon: Droplets,
    name: "Water treatment",
    pain: "Homeowners don't know they have a water problem until someone shows them.",
    approach: "Free water test offers on Meta, plus Google ads for hard water, well water and softener searches.",
  },
  {
    icon: Home,
    name: "Roofing",
    pain: "Demand spikes after storms, and the fastest company to respond wins the inspection.",
    approach: "Storm-triggered campaigns, free inspection offers and instant follow-up so you're first to call.",
  },
  {
    icon: Thermometer,
    name: "HVAC",
    pain: "Emergency calls are expensive on Google, and replacement jobs take longer to close.",
    approach: "Local Services Ads for emergencies and Meta campaigns for system replacement and financing offers.",
  },
  {
    icon: Hammer,
    name: "Remodeling",
    pain: "High-value projects with long decision cycles and lots of tire-kickers.",
    approach: "Before-and-after creative, budget pre-qualification in the form, and nurture sequences until they're ready.",
  },
  {
    icon: Waves,
    name: "Basement waterproofing",
    pain: "Customers search in a panic after a leak, then compare three quotes.",
    approach: "Search ads for urgent problems, plus educational video that builds trust before the estimate.",
  },
  {
    icon: Smile,
    name: "Med spas",
    pain: "Lots of interest in treatments, but many bookings never show up.",
    approach: "Offer-led Meta campaigns within ad policy, instant booking by text and reminders that cut no-shows.",
  },
]

function Industries() {
  return (
    <Section id="industries" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>Industries</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Built for high-ticket local businesses</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Every industry buys differently, so every playbook is different. Here&apos;s how we approach the ones we know best.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industryCards.map(({ icon: Icon, name, pain, approach }) => (
          <Card key={name} className="group hover:border-primary/40">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5"/></div>
                <CardTitle className="text-xl">{name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p><span className="font-medium text-foreground">The challenge: </span><span className="text-muted-foreground">{pain}</span></p>
              <p><span className="font-medium text-primary">Our approach: </span><span className="text-muted-foreground">{approach}</span></p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Don&apos;t see your industry? If one customer is worth $1,000 or more to you, <a href="#contact" className="text-primary hover:underline">we should talk</a>.
      </p>
    </Section>
  )
}

// ---------- Process ----------
const processSteps = [
  { icon: Search, when: "Day 1", title: "Free audit", desc: "We review your current ads, website and follow-up, and show you where leads are slipping through." },
  { icon: Wrench, when: "Week 1", title: "Build", desc: "Tracking, landing page, first round of ad creative and your follow-up automation, all set up and tested." },
  { icon: Rocket, when: "Week 2", title: "Launch", desc: "Campaigns go live on Google and Meta. Every lead gets an instant reply and lands in your pipeline." },
  { icon: TrendingUp, when: "Ongoing", title: "Optimize", desc: "Weekly report on leads, cost per lead and booked appointments. New creative every month." },
]

function Process() {
  return (
    <Section id="process" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>Our process</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Live in about two weeks</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          No long onboarding. You spend about an hour with us up front, then we handle the rest.
        </p>
      </motion.div>

      <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent lg:block" />
        {processSteps.map(({ icon: Icon, when, title, desc }) => (
          <div key={title} className="relative">
            <div className="relative grid h-12 w-12 place-items-center rounded-full border border-foreground/10 bg-background text-primary">
              <Icon className="h-5 w-5"/>
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-primary">{when}</p>
            <h3 className="mt-1 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
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
      </Section>
    </div>
  )
}

// ---------- Founding clients ----------
function FoundingClients() {
  const perks = [
    "Reduced pricing for the first 3 months",
    "Direct line to the people running your ads",
    "Weekly strategy call",
    "Only one business per service area",
  ]

  return (
    <Section className="py-16 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/[0.10] via-card to-card p-8 sm:p-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Pill>Founding client program</Pill>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">We&apos;re taking on a few founding clients</h2>
            <p className="mt-3 text-muted-foreground">
              We&apos;re building our first case studies in each industry we serve. Founding clients get better pricing and more of our attention, and in return we ask to share the results.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3}/>
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-block">
              <Button size="lg" className="gap-2">Apply for a spot <ArrowRight className="h-4 w-4"/></Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
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
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Pill>FAQ</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Questions, answered</h2>
          <p className="mt-3 text-muted-foreground">
            Something else on your mind? <a href="#contact" className="text-primary hover:underline">Ask us directly.</a>
          </p>
        </motion.div>
        <Accordion type="single" collapsible className="border-t border-foreground/10">
          {qa.map((x, i) => (
            <AccordionItem value={`item-${i}`} key={x.q} className="border-foreground/10">
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">{x.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{x.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}

// ---------- Contact ----------
const industryOptions = ["Water treatment", "Roofing", "HVAC", "Remodeling", "Basement waterproofing", "Med spa", "Other"]
const budgetOptions = ["Under $1,500/mo", "$1,500 – $3,000/mo", "$3,000 – $10,000/mo", "$10,000+/mo", "Not running ads yet"]

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      ...Object.fromEntries(formData.entries()),
      // fromEntries keeps only the last checked box; collect them all
      interests: formData.getAll('interests'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await res.json()

      if (res.ok) {
        setSubmitted(true)
        toast.success("Thanks! We'll be in touch within one business day.", {
          duration: 5000,
        })
        form.reset()
      } else {
        toast.error(result.error || "Something went wrong. Please try again.", {
          duration: 6000,
        })
        if (result.details) {
          console.error('Error details:', result.details)
        }
      }
    } catch (error) {
      console.error('Network error:', error)
      toast.error("Network error. Please check your connection and try again.", {
        duration: 6000,
      })
    } finally {
      setSubmitting(false)
    }
  }

  const nextSteps = [
    "We look at your current ads, website and how fast leads get a reply.",
    "On a 20-minute call we walk you through what we found and show you 3 ad creatives made for your business.",
    "If it's a fit, we can have your campaigns live in about two weeks. If not, the audit and creatives are yours to keep.",
  ]

  return (
    <Section id="contact" className="py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Pill>Free audit</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Get your free ad audit</h2>
          <p className="mt-3 text-muted-foreground">Tell us a bit about your business. It takes about a minute.</p>

          <h3 className="mt-10 text-sm font-medium uppercase tracking-[0.14em] text-foreground/70">What happens next</h3>
          <ol className="mt-4 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-foreground/10 font-display text-sm text-primary">{i + 1}</span>
                <p className="pt-1 text-sm text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 space-y-3 text-sm text-muted-foreground">
            <a href="mailto:inferaform@gmail.com" className="flex items-center gap-3 hover:text-foreground"><Mail className="h-4 w-4 text-primary"/> inferaform@gmail.com</a>
            <div className="flex items-center gap-3"><Globe className="h-4 w-4 text-primary"/> Serving the US and Canada</div>
          </div>
        </div>

        <Card className="p-2 sm:p-4">
          {submitted ? (
            <CardContent className="flex flex-col items-center py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <Check className="h-8 w-8" strokeWidth={3}/>
              </motion.div>
              <h3 className="mt-6 text-2xl font-semibold">Request received</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                We&apos;ll start on your audit and reach out within one business day to set up a time to walk through it.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8">
                Submit another request
              </Button>
            </CardContent>
          ) : (
            <CardContent className="pt-6">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" required className="h-11 rounded-xl"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Business name</Label>
                    <Input id="company" name="company" placeholder="Clear Water Co." required className="h-11 rounded-xl"/>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="jane@company.com" required className="h-11 rounded-xl"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" className="h-11 rounded-xl"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" placeholder="yourbusiness.com" className="h-11 rounded-xl"/>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select id="industry" name="industry" required defaultValue="" className={selectClass}>
                      <option value="" disabled>Select one</option>
                      {industryOptions.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly ad budget</Label>
                    <select id="budget" name="budget" required defaultValue="" className={selectClass}>
                      <option value="" disabled>Select one</option>
                      {budgetOptions.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>What are you interested in?</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Google & Meta Ads", "Ad Creative & Landing Pages", "Lead Follow-up Automation", "SEO & GEO"].map((x) => (
                      <label key={x} className="cursor-pointer">
                        <input type="checkbox" name="interests" value={x} className="peer sr-only" />
                        <span className="inline-flex items-center rounded-full border border-foreground/15 px-3.5 py-1.5 text-sm transition-colors hover:border-foreground/30 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
                          {x}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Anything else? <span className="text-muted-foreground">(optional)</span></Label>
                  <Textarea id="message" name="message" placeholder="Service area, what you've tried so far, goals for the next few months" rows={3} className="rounded-xl"/>
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={submitting}>
                  {submitting ? "Sending..." : "Get my free audit"} <ArrowRight className="h-4 w-4"/>
                </Button>
                <p className="text-center text-xs text-muted-foreground">No contract, no spam. We&apos;ll only use your details to prepare your audit.</p>
              </form>
            </CardContent>
          )}
        </Card>
      </div>
    </Section>
  )
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="border-t border-foreground/5">
      <Section className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-semibold tracking-tight">Inferaform</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Google and Meta ads plus AI lead follow-up for local businesses in the US and Canada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground">How it works</a></li>
                <li><a href="#industries" className="hover:text-foreground">Industries</a></li>
                <li><a href="#seo" className="hover:text-foreground">SEO &amp; GEO</a></li>
                <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Get in touch</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li><a href="#contact" className="hover:text-foreground">Free ad audit</a></li>
                <li><a href="mailto:inferaform@gmail.com" className="hover:text-foreground">inferaform@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-foreground/5 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Inferaform. All rights reserved.
        </div>
      </Section>
    </footer>
  )
}

// ---------- Page ----------
export default function InferaformWebsite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Pipeline />
      <AdsBetter />
      <SeoGeo />
      <Industries />
      <Process />
      <Pricing />
      <FoundingClients />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
