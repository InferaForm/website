'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Bot,
  ArrowRight,
  Phone,
  MessageSquare,
  Megaphone,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  Mail,
  Globe,
  Wallet,
  Clock,
  Search,
  Lightbulb,
} from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Separator } from "@/app/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
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
  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
    <Sparkles className="h-4 w-4" /> {children}
  </div>
)

// ---------- Navbar ----------
function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b">
      <Section className="flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-bold text-lg">Inferaform</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#solutions" className="hover:text-primary">Products</a>
          <a href="#showcase" className="hover:text-primary">Process</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:block">
            <Button variant="ghost">Book a demo</Button>
          </a>
          <a href="#contact">
            <Button className="gap-2">Get Started <ArrowRight className="h-4 w-4"/></Button>
          </a>
        </div>
      </Section>
    </header>
  )
}

// ---------- Hero ----------
function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"/>
      <Section className="py-20 lg:py-28">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <Pill>Build and deploy production AI systems</Pill>
          <h1 className="mt-6 text-3xl sm:text-5xl font-bold tracking-tight">
            Crafting intelligent systems that <span className="text-primary">scale with you</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            We design and implement AI-powered workflows that automate work, surface insights, and move KPIs—without breaking your stack.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#solutions"><Button size="lg" className="gap-2">Explore Products <ArrowRight className="h-4 w-4"/></Button></a>
            <a href="#contact"><Button size="lg" variant="outline">Talk to an expert</Button></a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            {[
              { icon: Clock, label: "14 Days to Value" },
              { icon: Shield, label: "SOC2 Practices" },
              { icon: Zap, label: "Fast Integration" },
              { icon: Wallet, label: "90-Day ROI" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 text-muted-foreground">
                <Icon className="h-4 w-4"/> <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

// ---------- Products ----------
const products = [
  {
    id: "riley",
    emoji: "⭐",
    icon: Phone,
    title: "Riley",
    subtitle: "Your Smart Voice Assistant",
    tagline: "For Calls, Scheduling & Notes",
    features: [
      "AI-powered call handling",
      "Smart scheduling assistant",
      "Automatic note-taking",
      "Voice-to-text transcription",
    ],
  },
  {
    id: "orbit",
    emoji: "🔶",
    icon: MessageSquare,
    title: "Orbit",
    subtitle: "Your AI Meeting Assistant",
    tagline: "Meeting & Action Tracking",
    features: [
      "Meeting summaries & insights",
      "Action item extraction",
      "Follow-up reminders",
      "Integration with calendars",
    ],
  },
  {
    id: "forge",
    emoji: "🔧",
    icon: Building2,
    title: "Forge",
    subtitle: "Your AI Business Engine",
    tagline: "Business Development Automation",
    features: [
      "Lead generation & qualification",
      "Outreach automation",
      "Pipeline management",
      "Revenue forecasting",
    ],
  },
  {
    id: "luma",
    emoji: "💬",
    icon: MessageSquare,
    title: "Luma",
    subtitle: "Your AI Support Agent",
    tagline: "Customer Support Automation",
    features: [
      "24/7 customer support",
      "Multi-channel responses",
      "Ticket triage & routing",
      "Knowledge base integration",
    ],
  },
  {
    id: "aura",
    emoji: "🔮",
    icon: TrendingUp,
    title: "AURA",
    subtitle: "The AI Growth Engine",
    tagline: "For eCommerce Success",
    features: [
      "Personalized recommendations",
      "Cart abandonment recovery",
      "Dynamic pricing optimization",
      "Customer lifetime value tracking",
    ],
  },
]

function Products() {
  return (
    <Section id="solutions" className="py-16 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <Pill>Our AI Products</Pill>
        <h2 className="mt-4 text-2xl sm:text-4xl font-bold">Intelligent agents for every workflow</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Purpose-built AI assistants that integrate seamlessly with your operations and deliver immediate value.
        </p>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(({ id, emoji, icon: Icon, title, subtitle, tagline, features }) => (
          <Card key={id} className="group hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-20">{emoji}</div>
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Icon className="h-5 w-5"/>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{emoji}</span>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </div>
                  <p className="text-sm font-medium text-foreground mt-1">{subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tagline}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0"/> <span>{f}</span>
                </div>
              ))}
              <div className="pt-2">
                <a href="#contact">
                  <Button variant="outline" className="w-full group-hover:translate-x-0.5 transition-transform">
                    Learn more about {title}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// ---------- Showcase (Process/Implementation) ----------
function Showcase() {
  const items = [
    { icon: Phone, title: "Discovery", desc: "We map your workflows, KPIs, constraints, and technical landscape." },
    { icon: Shield, title: "Feasibility", desc: "We validate value, scope, guardrails, and security requirements." },
    { icon: Building2, title: "Build", desc: "We implement, integrate, test, and deploy with your team." },
    { icon: TrendingUp, title: "Iterate", desc: "We measure performance, tune models, and scale to more use cases." },
  ]

  return (
    <div id="showcase" className="bg-muted/30 border-y">
      <Section className="py-16 lg:py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <Pill>Process</Pill>
          <h2 className="mt-4 text-2xl sm:text-4xl font-bold">A focused path from idea to impact</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Practical innovation grounded in your reality, with elegant systems and transparent intelligence.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5"/></div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Tabs defaultValue="stacks" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="stacks">Tech Stacks</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="principles">Principles</TabsTrigger>
            </TabsList>
            <TabsContent value="stacks" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {[
                  "CRMs & ERPs (Salesforce, HubSpot)",
                  "Data Warehouses (BigQuery, Snowflake)",
                  "Marketing Suites (Marketo, Braze)",
                  "Helpdesks (Zendesk, Intercom)",
                  "Internal Tools (Retool, Airtable)",
                  "Custom APIs & Databases",
                ].map((x) => (
                  <div key={x} className="flex items-center gap-2"><Badge variant="secondary">{x}</Badge></div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="integrations" className="mt-6">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                {[
                  "OAuth & API key management",
                  "Webhook & event streaming",
                  "Batch & real-time sync",
                  "Secure credential vaults",
                  "Error monitoring & retry logic",
                  "Audit logs & compliance",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5"/> {x}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="principles" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {["Practical Innovation", "Elegant Systems", "Transparent Intelligence"].map((t) => (
                  <Card key={t}>
                    <CardHeader><CardTitle className="text-base">{t}</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      {t === "Practical Innovation" && "Grounded in your reality and stack, not hype."}
                      {t === "Elegant Systems" && "Composable, observable, and well-documented."}
                      {t === "Transparent Intelligence" && "Clear prompts, evals, and safeguards."}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact"><Button size="lg" className="gap-2">Start a Pilot <ArrowRight className="h-4 w-4"/></Button></a>
          <Badge variant="outline" className="text-sm">Typical setup: 7–14 days</Badge>
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
        <h2 className="mt-4 text-2xl sm:text-4xl font-bold">Simple plans that grow with you</h2>
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
  const logos = ["Acme Corp", "TechStart", "GrowthLabs", "Innovate Inc", "ScaleUp"]
  return (
    <Section className="py-12">
      <div className="text-center text-xs text-muted-foreground mb-6">Trusted by forward-thinking teams</div>
      <div className="grid sm:grid-cols-5 gap-6 items-center justify-center opacity-60">
        {logos.map((l) => (
          <div key={l} className="text-center text-sm font-semibold">{l}</div>
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
        <h2 className="mt-4 text-2xl sm:text-4xl font-bold">Everything you need to know</h2>
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await res.json()
      
      if (res.ok) {
        toast.success("Thanks! We'll reach out shortly.")
        form.reset()
      } else {
        toast.error(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error("Network error. Please try again.")
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
                <Label htmlFor="interest">Which product(s) interest you?</Label>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    { id: "riley", label: "Riley (Voice Assistant)", emoji: "⭐" },
                    { id: "orbit", label: "Orbit (Meeting AI)", emoji: "🔶" },
                    { id: "forge", label: "Forge (Business Dev)", emoji: "🔧" },
                    { id: "luma", label: "Luma (Support AI)", emoji: "💬" },
                    { id: "aura", label: "AURA (eCommerce)", emoji: "🔮" },
                    { id: "custom", label: "Custom Solution", emoji: "✨" },
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
                <li><a href="#solutions" className="hover:underline">Products</a></li>
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
      <Products />
      <Showcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
