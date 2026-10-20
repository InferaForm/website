'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Bot,
  ArrowRight,
  MessageSquare,
  Megaphone,
  Building2,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  Mail,
  Globe,
  Clock,
  Search,
  Lightbulb,
  Gift,
  Target,
  Palette,
  Workflow,
  MousePointerClick,
  CalendarCheck,
} from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Separator } from "@/app/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar"
import { Label } from "@/app/components/ui/label"
import { Switch } from "@/app/components/ui/switch"
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
]

const industries = [
  "Water treatment",
  "Roofing",
  "HVAC",
  "Remodeling",
  "Basement waterproofing",
  "Med spas",
]

function Services() {
  return (
    <Section id="services" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>What we do</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Ads, creative and follow-up under one roof</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Most agencies stop at the lead. We stay with it until it&apos;s a booked appointment, because that&apos;s what actually grows your business.
        </p>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
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

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">Built for local businesses where one customer is worth $1,000+</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {industries.map((x) => (
            <Badge key={x} variant="secondary" className="text-sm">{x}</Badge>
          ))}
        </div>
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

// ---------- Showcase (Process/Implementation) ----------
function Showcase() {
  const steps = [
    { 
      step: "01",
      icon: Search, 
      title: "Discovery", 
      desc: "We map your workflows, KPIs, constraints, and technical landscape.",
      duration: "1-2 weeks"
    },
    { 
      step: "02",
      icon: Shield, 
      title: "Feasibility", 
      desc: "We validate value, scope, guardrails, and security requirements.",
      duration: "3-5 days"
    },
    { 
      step: "03",
      icon: Building2, 
      title: "Build", 
      desc: "We implement, integrate, test, and deploy with your team.",
      duration: "2-4 weeks"
    },
    { 
      step: "04",
      icon: TrendingUp, 
      title: "Iterate", 
      desc: "We measure performance, tune models, and scale to more use cases.",
      duration: "Ongoing"
    },
  ]

  const integrations = [
    "Salesforce", "HubSpot", "Zendesk", "Intercom", "Slack", "BigQuery",
    "Snowflake", "Marketo", "Braze", "Retool", "Airtable", "Custom APIs"
  ]

  const principles = [
    { icon: Lightbulb, title: "Practical Innovation", desc: "Grounded in your reality and stack, not hype." },
    { icon: Zap, title: "Elegant Systems", desc: "Composable, observable, and well-documented." },
    { icon: Shield, title: "Transparent Intelligence", desc: "Clear prompts, evals, and safeguards." },
  ]

  return (
    <div id="showcase" className="py-16 lg:py-24">
      <Section>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <Pill>Our Process</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">From concept to production in weeks</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers measurable results without disrupting your operations.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" style={{ top: "4rem" }}/>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map(({ step, icon: Icon, title, desc, duration }, idx) => (
              <motion.div 
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary"/>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 -z-10 text-6xl font-bold text-muted/10">{step}</div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                  <Badge variant="outline" className="text-xs">{duration}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Seamless Integrations</h3>
            <p className="text-sm text-muted-foreground">We connect with the tools you already use</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrations.map((name) => (
              <Badge key={name} variant="secondary" className="px-4 py-2">{name}</Badge>
            ))}
          </div>
        </div>

        {/* Principles Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {principles.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6"/>
                </div>
                <h4 className="font-bold mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact"><Button size="lg" className="gap-2">Start Your Pilot <ArrowRight className="h-4 w-4"/></Button></a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4"/>
            <span>First results in 7–14 days</span>
          </div>
        </div>
      </Section>
    </div>
  )
}

// ---------- Pricing ----------
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/mo",
      for: "Solo founders & small teams",
      features: ["1 AI solution deployment", "Up to 3 integrations", "Email + chat support", "Monthly reporting"],
      cta: "Start",
    },
    {
      name: "Growth",
      price: "$12,999",
      period: "/mo",
      for: "Scaling businesses",
      features: ["Up to 3 AI solutions", "Up to 10 integrations", "Priority support & SLA", "Weekly reporting", "Custom model tuning"],
      cta: "Scale",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      for: "Multi‑brand & complex ops",
      features: ["Unlimited solutions & workspaces", "SAML SSO, roles & audit log", "Dedicated CSM & SLA", "On‑prem / VPC options"],
      cta: "Talk to sales",
    },
  ]

  return (
    <Section id="pricing" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>Pricing</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Simple plans that grow with you</h2>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <Card key={t.name} className={`${t.highlighted ? "border-primary shadow-lg" : ""}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t.name}</CardTitle>
                {t.highlighted && <Badge>Most Popular</Badge>}
              </div>
              <div className="mt-2 text-3xl font-bold">{t.price} <span className="text-base font-normal text-muted-foreground">{t.period}</span></div>
              <p className="text-sm text-muted-foreground">{t.for}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {t.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5"/> {f}
                </div>
              ))}
              <a href="#contact"><Button className="w-full mt-2">{t.cta}</Button></a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        All plans include ongoing support, monitoring, and model improvements. Annual discounts available.
      </div>
    </Section>
  )
}

// ---------- Social Proof ----------
function SocialProof() {
  const stats = [
    { value: "500K+", label: "Hours Saved", icon: Clock },
    { value: "95%", label: "Client Satisfaction", icon: CheckCircle2 },
    { value: "40+", label: "AI Solutions Deployed", icon: Zap },
    { value: "12x", label: "Average ROI", icon: TrendingUp },
  ]

  const companies = [
    { name: "TechCorp", industry: "SaaS" },
    { name: "RetailMax", industry: "E-commerce" },
    { name: "FinanceHub", industry: "FinTech" },
    { name: "HealthSync", industry: "HealthTech" },
    { name: "LogiTrack", industry: "Logistics" },
    { name: "EduLearn", industry: "EdTech" },
  ]

  return (
    <Section className="py-16 border-y bg-muted/20">
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-muted-foreground mb-2">Trusted by forward-thinking companies</p>
        <h3 className="text-xl font-bold">Delivering measurable results across industries</h3>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map(({ value, label, icon: Icon }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
              <Icon className="h-6 w-6"/>
            </div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </motion.div>
        ))}
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {companies.map(({ name, industry }) => (
          <Card key={name} className="group hover:shadow-md transition-all hover:scale-105 cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{name.charAt(0)}</span>
              </div>
              <div className="font-semibold text-sm mb-1">{name}</div>
              <div className="text-xs text-muted-foreground">{industry}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// ---------- Testimonials ----------
function Testimonials() {
  const items = [
    {
      name: "Sarah K.",
      role: "VP Operations, D2C Brand",
      quote: "Inferaform built us a lead routing system that increased our sales team's conversion rate by 38% in the first month.",
    },
    {
      name: "Marcus T.",
      role: "CTO, SaaS Startup",
      quote: "We shipped two AI copilots in under two weeks. The team's ability to integrate with our existing stack was impressive.",
    },
    {
      name: "Lisa Chen",
      role: "Head of Marketing, FinTech",
      quote: "The personalization engine they built saves our team 40+ hours a week and boosted engagement by 25%.",
    },
  ]

  return (
    <Section className="py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar><AvatarFallback>{t.name.split(" ")[0][0]}{t.name.split(" ")[1]?.[0] ?? ""}</AvatarFallback></Avatar>
                <div>
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">"{t.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// ---------- FAQ ----------
function FAQ() {
  const qa = [
    {
      q: "How fast can we start?",
      a: "Discovery calls typically happen within a week. First value is usually delivered within 14 days of kickoff.",
    },
    {
      q: "Do you replace our existing tools?",
      a: "No—we integrate with your current stack (CRMs, helpdesks, data warehouses) and fill the gaps with AI-powered automation.",
    },
    {
      q: "What about data privacy and security?",
      a: "We follow SOC2-style controls, offer data retention policies, role-based access, and optional regional data residency.",
    },
    {
      q: "Can humans supervise AI decisions?",
      a: "Absolutely. Every system supports human-in-the-loop approvals, fallback routing, and escalation workflows.",
    },
  ]

  return (
    <Section id="faq" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>FAQ</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Everything you need to know</h2>
      </motion.div>
      <div className="mt-8 max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {qa.map((x, i) => (
            <AccordionItem value={`item-${i}`} key={x.q}>
              <AccordionTrigger className="text-left">{x.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{x.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}

// ---------- Contact ----------
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
        toast.success("🎉 Thank you! We'll contact you within 24 hours.", {
          duration: 5000,
        })
        form.reset()
        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
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

  return (
    <Section id="contact" className="py-16 lg:py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Pill>Get in touch</Pill>
          <h3 className="mt-4 text-2xl font-bold">Tell us about your workflows</h3>
          <p className="mt-2 text-muted-foreground">We'll propose a pilot that delivers ROI in weeks, not months.</p>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4"/> inferaform@gmail.com</div>
            <div className="flex items-center gap-3"><Globe className="h-4 w-4"/> Worldwide / Remote</div>
            <div className="flex items-center gap-3"><Clock className="h-4 w-4"/> Mon–Fri, 9am–6pm EST</div>
          </div>
        </div>

        <Card>
          {submitted ? (
            <>
              <CardHeader>
                <div className="flex flex-col items-center text-center py-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-2">Thank you!</CardTitle>
                  <p className="text-muted-foreground">Your message has been sent successfully.</p>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm">
                  We've received your inquiry and our team will get back to you within 24 hours.
                </p>
                <div className="pt-4 pb-2">
                  <Button 
                    onClick={() => setSubmitted(false)} 
                    variant="outline" 
                    className="gap-2"
                  >
                    Send another message
                  </Button>
                </div>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle>Book a demo</CardTitle>
                <p className="text-sm text-muted-foreground">Share a few details and we'll get back within one business day.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Jane Doe" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" placeholder="jane@company.com" required/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Acme Inc"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">What are you interested in?</Label>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    { id: "ads", label: "Google & Meta Ads", emoji: "📣" },
                    { id: "creative", label: "Ad Creative & Landing Pages", emoji: "🎨" },
                    { id: "automation", label: "Lead Follow-up Automation", emoji: "⚡" },
                    { id: "audit", label: "Free Ad Audit", emoji: "🔍" },
                  ].map((x) => (
                    <label key={x.id} className="flex items-center gap-2 rounded-lg border p-2 cursor-pointer hover:bg-accent">
                      <input type="checkbox" name="interests" value={x.label} />
                      <span>{x.emoji}</span>
                      <span>{x.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Describe your use case, tools, and timeline" rows={5}/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch id="nda" name="nda"/><Label htmlFor="nda">Request NDA</Label>
                </div>
                <Button type="submit" className="gap-2" disabled={submitting}>
                  {submitting ? "Sending..." : "Send request"} <ArrowRight className="h-4 w-4"/>
                </Button>
              </div>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </Section>
  )
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="border-t">
      <Section className="py-10">
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold"><Bot className="h-5 w-5"/> Inferaform</div>
            <p className="mt-2 text-sm text-muted-foreground">Intelligence, shaped for you. AI systems that scale with your business.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#showcase" className="hover:underline">Process</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Stay Updated</div>
            <p className="mt-2 text-muted-foreground">Get product updates and case studies.</p>
            <div className="mt-3 flex gap-2">
              <Input placeholder="huzaifa@inferaform.com" />
              <Button>Join</Button>
            </div>
          </div>
        </div>
        <Separator className="my-6"/>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Inferaform. All rights reserved.</div>
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
      <SocialProof />
      <Services />
      <Pipeline />
      <Showcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
