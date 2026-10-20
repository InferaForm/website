'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Globe, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import { industries } from "@/app/lib/site-data"
import { Section, Pill } from "./primitives"

// ---------- Contact ----------
const industryOptions = [...industries.map((i) => i.name), "Other"]
const budgetOptions = ["Under $1,500/mo", "$1,500 – $3,000/mo", "$3,000 – $10,000/mo", "$10,000+/mo", "Not running ads yet"]

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function Contact({ defaultIndustry = "" }: { defaultIndustry?: string }) {
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
                    <select id="industry" name="industry" required defaultValue={defaultIndustry} className={selectClass}>
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

