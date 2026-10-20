'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Globe, MoreHorizontal, ThumbsUp, X, Check } from "lucide-react"
import type { AdExample } from "@/app/lib/site-data"
import { Section, Pill, Reveal } from "./primitives"

// ---------- Ad makeover: before/after ad mockups ----------
function AdFrame({ business, children, tone }: React.PropsWithChildren<{ business: string; tone: "before" | "after" }>) {
  return (
    <div className={`overflow-hidden rounded-2xl border bg-background ${tone === "after" ? "border-primary/50 shadow-glow" : "border-foreground/10"}`}>
      <div className="flex items-center gap-2.5 px-4 pt-4">
        <div className={`grid h-9 w-9 place-items-center rounded-full font-display text-sm font-semibold ${tone === "after" ? "bg-primary text-primary-foreground" : "bg-foreground/10"}`}>
          {business.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{business}</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">Sponsored · <Globe className="h-3 w-3"/></p>
        </div>
        <MoreHorizontal className="h-4 w-4 text-muted-foreground"/>
      </div>
      {children}
      <div className="flex items-center gap-1.5 border-t border-foreground/5 px-4 py-2.5 text-xs text-muted-foreground">
        <ThumbsUp className="h-3.5 w-3.5"/> Like · Comment · Share
      </div>
    </div>
  )
}

function Callout({ n, children }: React.PropsWithChildren<{ n: number }>) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-primary font-display text-xs font-semibold text-primary-foreground">{n}</span>
      <span className="pt-0.5">{children}</span>
    </li>
  )
}

export function AdMakeover({ example, title = "What a better ad looks like" }: { example: AdExample; title?: string }) {
  const { business, before, after } = example

  return (
    <Section id="ad-makeover" className="py-16 lg:py-24">
      <Reveal className="text-center">
        <Pill>Ad makeover</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">{title}</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Same business, same budget. The difference is a clear hook, a specific offer and one obvious next step.
        </p>
      </Reveal>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Before */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground/10"><X className="h-3.5 w-3.5"/></span>
            <p className="font-display text-lg font-semibold">Typical ad</p>
          </div>
          <div className="mx-auto max-w-sm">
            <AdFrame business={business} tone="before">
              <p className="px-4 py-3 text-sm text-foreground/80">{before.text}</p>
              <div className="grid aspect-[4/3] place-items-center bg-foreground/[0.06] text-sm text-muted-foreground">
                {before.image}
              </div>
              <div className="flex items-center justify-between gap-3 bg-foreground/[0.03] px-4 py-3">
                <p className="truncate text-sm text-muted-foreground">{business.toLowerCase().replace(/[^a-z]/g, "")}.com</p>
                <span className="rounded-md bg-foreground/10 px-3 py-1.5 text-xs font-semibold">{before.cta}</span>
              </div>
            </AdFrame>
          </div>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-sm text-muted-foreground">
            {["No reason to stop scrolling", "No specific offer", "Generic “Learn more” button", "Sends people to the homepage"].map((x) => (
              <li key={x} className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/40"/> {x}</li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3.5 w-3.5" strokeWidth={3}/></span>
            <p className="font-display text-lg font-semibold">Our version</p>
          </div>
          <div className="mx-auto max-w-sm">
            <AdFrame business={business} tone="after">
              <p className="px-4 py-3 text-sm">{after.text}</p>
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-background p-6">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-2xl" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{after.headline}</span>
                  <p className="font-display text-2xl font-bold leading-tight sm:text-3xl">{after.overlay}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 bg-foreground/[0.03] px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-xs text-muted-foreground">Limited spots this week</p>
                  <p className="truncate text-sm font-semibold">{after.headline}</p>
                </div>
                <span className="flex-shrink-0 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">{after.cta}</span>
              </div>
            </AdFrame>
          </div>
          <ol className="mx-auto mt-6 max-w-sm space-y-3">
            <Callout n={1}>A hook about a problem they already notice</Callout>
            <Callout n={2}>A free, specific, low-risk offer</Callout>
            <Callout n={3}>A visual that stops the scroll</Callout>
            <Callout n={4}>One clear button to a page built for this offer</Callout>
          </ol>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">Example ads for illustration. Business names are fictional.</p>
    </Section>
  )
}

// ---------- Lead leak funnel: slow vs instant follow-up ----------
const funnelStages = ["Leads", "Reached", "Booked", "Showed up"]
const funnels = [
  { label: "Follow-up hours later", sub: "Typical callback the same or next day", values: [100, 45, 15, 10], fast: false },
  { label: "Follow-up in under 60 seconds", sub: "Instant text and call, plus reminders", values: [100, 85, 40, 32], fast: true },
]

export function LeadLeak() {
  return (
    <div className="mt-16">
      <div className="max-w-2xl">
        <h3 className="text-2xl sm:text-3xl font-semibold">Where leads leak out</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Same 100 leads, two ways of following up. Speed and persistence decide how many turn into appointments.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {funnels.map(({ label, sub, values, fast }) => (
          <div key={label} className={`rounded-2xl border p-5 sm:p-6 ${fast ? "border-primary/40 bg-primary/[0.05]" : "bg-background/60"}`}>
            <p className="font-display text-lg font-semibold">{label}</p>
            <p className="text-sm text-muted-foreground">{sub}</p>
            <div className="mt-6 space-y-4">
              {values.map((v, i) => (
                <div key={funnelStages[i]}>
                  <div className="mb-1.5 flex items-baseline justify-between text-sm">
                    <span className="text-muted-foreground">{funnelStages[i]}</span>
                    <span className="font-display font-semibold">{v}</span>
                  </div>
                  <div className="h-3 rounded-full bg-foreground/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                      className={`h-3 rounded-full ${fast ? "bg-primary" : "bg-[#6b6b76]"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className={`mt-6 text-sm ${fast ? "text-foreground" : "text-muted-foreground"}`}>
              <span className="font-display text-3xl font-semibold">{values[3]}</span> customers in the door
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Illustrative example, not client data. Your numbers will depend on your market, offer and team.</p>
    </div>
  )
}

// ---------- Example 90-day ramp (labeled scenario) ----------
const weekly = [2, 3, 5, 4, 6, 8, 9, 11, 10, 13, 14, 16]
const phases = [
  { month: "Month 1", title: "Launch and learn", desc: "Test 3 offers and 8+ creatives. Fix tracking gaps. Follow-up goes live on day one." },
  { month: "Month 2", title: "Double down", desc: "Move budget to the winning offer and ads. Cut keywords and audiences that don't book." },
  { month: "Month 3", title: "Scale what works", desc: "Raise budget on proven campaigns, refresh creative and re-engage older leads." },
]

export function RampChart() {
  const [hover, setHover] = useState<number | null>(null)
  const max = 20
  const W = 600, H = 240, padL = 32, padB = 28, padT = 12
  const plotW = W - padL, plotH = H - padB - padT
  const slot = plotW / weekly.length
  const barW = Math.min(24, slot - 8)

  return (
    <Section id="example" className="py-16 lg:py-24">
      <Reveal className="max-w-2xl">
        <Pill>Example scenario</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">What the first 90 days look like</h2>
        <p className="mt-3 text-muted-foreground">
          Results build as we learn what works in your market. Here&apos;s how a typical ramp-up is structured.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <figure className="rounded-2xl border bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <figcaption className="font-display text-lg font-semibold">Booked appointments per week</figcaption>
            <span className="rounded-full border border-foreground/15 px-2.5 py-0.5 text-xs text-muted-foreground">Example · not a client result</span>
          </div>
          <div className="relative mt-4">
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Example: booked appointments per week rising from 2 in week 1 to 16 in week 12">
              {[0, 5, 10, 15, 20].map((t) => {
                const y = padT + plotH - (t / max) * plotH
                return (
                  <g key={t}>
                    <line x1={padL} x2={W} y1={y} y2={y} stroke="hsl(var(--foreground) / 0.08)" strokeWidth={1} />
                    <text x={padL - 8} y={y + 4} textAnchor="end" fontSize="11" fill="hsl(var(--muted-foreground))">{t}</text>
                  </g>
                )
              })}
              {weekly.map((v, i) => {
                const h = (v / max) * plotH
                const x = padL + i * slot + (slot - barW) / 2
                const y = padT + plotH - h
                const r = 4
                const active = hover === i
                return (
                  <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                    <rect x={padL + i * slot} y={padT} width={slot} height={plotH} fill="transparent" />
                    <path
                      d={`M${x},${y + h} V${y + r} Q${x},${y} ${x + r},${y} H${x + barW - r} Q${x + barW},${y} ${x + barW},${y + r} V${y + h} Z`}
                      fill="hsl(var(--primary))"
                      opacity={hover === null || active ? 1 : 0.45}
                    />
                    {(i === weekly.length - 1 || active) && (
                      <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">{v}</text>
                    )}
                    {(i % 4 === 0 || i === weekly.length - 1) && (
                      <text x={x + barW / 2} y={H - 8} textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">W{i + 1}</text>
                    )}
                  </g>
                )
              })}
            </svg>
            {hover !== null && (
              <div className="pointer-events-none absolute top-0 rounded-lg border bg-background px-3 py-2 text-xs shadow-lg" style={{ left: `${((padL + hover * slot + slot / 2) / W) * 100}%`, transform: "translateX(-50%)" }}>
                <p className="text-muted-foreground">Week {hover + 1}</p>
                <p className="font-semibold">{weekly[hover]} appointments</p>
              </div>
            )}
          </div>
          <details className="mt-3 text-xs text-muted-foreground">
            <summary className="cursor-pointer">View as table</summary>
            <table className="mt-2 w-full text-left">
              <thead><tr><th className="py-1 font-medium">Week</th>{weekly.map((_, i) => <th key={i} className="py-1 font-medium">{i + 1}</th>)}</tr></thead>
              <tbody><tr><td className="py-1">Booked</td>{weekly.map((v, i) => <td key={i} className="py-1">{v}</td>)}</tr></tbody>
            </table>
          </details>
        </figure>

        <ol className="space-y-4">
          {phases.map((p) => (
            <li key={p.month} className="rounded-2xl border bg-card p-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{p.month}</p>
              <p className="mt-1 font-display text-lg font-semibold">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        Example scenario for illustration only. It is not a result from a real client, and actual results vary by market, budget and offer.
      </p>
    </Section>
  )
}
