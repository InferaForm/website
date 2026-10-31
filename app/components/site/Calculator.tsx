'use client'

import React, { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator as CalculatorIcon, Check, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import {
  calculate,
  parseInput,
  defaultInput,
  limits,
  responseTimes,
  formatMoney,
  formatJobs,
  assumptionNote,
  type ResponseTime,
} from "@/app/lib/calculator"
import { Section, Pill, Reveal } from "./primitives"

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

type Fields = { leads: string; jobValue: string; closeRate: string; responseTime: ResponseTime }

function NumberField({ id, label, hint, prefix, suffix, value, onChange, min, max }: {
  id: string
  label: string
  hint: string
  prefix?: string
  suffix?: string
  value: string
  onChange: (v: string) => void
  min: number
  max: number
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {prefix && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{prefix}</span>}
        <Input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-11 rounded-xl ${prefix ? "pl-7" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{suffix}</span>}
      </div>
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  )
}

export function MissedLeadCalculator() {
  const [fields, setFields] = useState<Fields>({
    leads: String(defaultInput.leads),
    jobValue: String(defaultInput.jobValue),
    closeRate: String(defaultInput.closeRate),
    responseTime: defaultInput.responseTime,
  })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const input = parseInput(fields)
  const result = input ? calculate(input) : null
  const set = (key: keyof Fields) => (value: string) => setFields((f) => ({ ...f, [key]: value }))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input) return
    setSubmitting(true)
    const form = e.currentTarget
    const data = { ...Object.fromEntries(new FormData(form).entries()), ...input }

    try {
      const res = await fetch('/api/calculator-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const body = await res.json()

      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        toast.error(body.error || "Something went wrong. Please try again.", { duration: 6000 })
        if (body.details) {
          console.error('Error details:', body.details)
        }
      }
    } catch (error) {
      console.error('Network error:', error)
      toast.error("Network error. Please check your connection and try again.", { duration: 6000 })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl border bg-card p-5 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <NumberField id="leads" label="Leads per month" hint="Forms, calls and lead ads combined" value={fields.leads} onChange={set("leads")} {...limits.leads}/>
          <NumberField id="jobValue" label="Average job value" hint="Revenue from a typical sale" prefix="$" value={fields.jobValue} onChange={set("jobValue")} {...limits.jobValue}/>
          <NumberField id="closeRate" label="Close rate" hint="Share of all leads that become paying jobs" suffix="%" value={fields.closeRate} onChange={set("closeRate")} {...limits.closeRate}/>
          <div className="space-y-2">
            <Label htmlFor="responseTime">Typical response time</Label>
            <select id="responseTime" value={fields.responseTime} onChange={(e) => set("responseTime")(e.target.value)} className={selectClass}>
              {responseTimes.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
            <p className="text-xs text-muted-foreground">How long until a new lead hears from you</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/[0.08] to-card p-5 sm:p-8" aria-live="polite">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Your estimate</p>
          <span className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-[11px] text-muted-foreground">Estimate</span>
        </div>

        {result ? (
          <>
            <p className="mt-4 text-sm text-muted-foreground">Revenue lost to slow response, per year</p>
            <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">{formatMoney(result.lostRevenueYearly)}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-6">
              <div>
                <dt className="text-xs text-muted-foreground">Per month</dt>
                <dd className="font-display text-2xl font-semibold">{formatMoney(result.lostRevenueMonthly)}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Jobs lost per month</dt>
                <dd className="font-display text-2xl font-semibold">{formatJobs(result.lostJobsMonthly)}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-muted-foreground">Jobs booked now per month</dt>
                <dd className="font-display text-lg font-semibold">{formatJobs(result.currentJobs)}</dd>
              </div>
            </dl>
            {result.lostJobsMonthly === 0 && (
              <p className="mt-4 text-sm text-muted-foreground">You&apos;re already answering fast. Keep it up after hours and on weekends too.</p>
            )}
          </>
        ) : (
          <p className="mt-6 text-sm text-muted-foreground">
            Enter leads (1–5,000), a job value of at least $100 and a close rate between 1% and 100% to see your estimate.
          </p>
        )}

        <div className="mt-auto pt-8">
          {sent ? (
            <div className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/[0.06] p-4 text-sm">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/>
              <span>Report sent. Check your inbox in a minute or two.</span>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <Label htmlFor="report-email" className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary"/> Send me this report</Label>
              {/* Honeypot: hidden from people, often filled in by bots */}
              <input type="text" name="url" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden"/>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input id="report-email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" className="h-11 rounded-xl"/>
                <Button type="submit" className="h-11 flex-shrink-0 gap-2" disabled={submitting || !input}>
                  {submitting ? "Sending..." : "Email it"} <ArrowRight className="h-4 w-4"/>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">We&apos;ll email you these numbers. No spam.</p>
            </form>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground lg:col-span-2">{assumptionNote}</p>
    </div>
  )
}

// Short homepage section that links to the full calculator
export function CalculatorTeaser() {
  return (
    <Section className="py-16 lg:py-24">
      <Reveal className="flex flex-col items-start gap-6 rounded-3xl border border-primary/25 bg-primary/[0.06] p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <CalculatorIcon className="h-5 w-5"/>
          </div>
          <div className="max-w-xl">
            <Pill>Missed-lead calculator</Pill>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">How much is slow follow-up costing you?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your leads, job value, close rate and response time. Get a conservative estimate of the jobs and revenue you lose each month.
            </p>
          </div>
        </div>
        <Link href="/calculator" className="w-full flex-shrink-0 md:w-auto">
          <Button size="lg" className="w-full gap-2">Run the numbers <ArrowRight className="h-4 w-4"/></Button>
        </Link>
      </Reveal>
    </Section>
  )
}
