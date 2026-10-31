'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, MessageSquare, Smartphone } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { PRONTO_DEMO_URL } from "@/app/lib/site-data"
import { Section, Pill, Reveal } from "./primitives"

const consentText =
  "I agree to receive text messages from Inferaform's demo assistant; msg & data rates may apply; reply STOP to opt out."

// US and Canadian numbers only, sent as E.164 (+15551234567)
function toE164(raw: string) {
  const digits = raw.replace(/\D/g, "")
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`
  return null
}

export function DemoText({ industry }: { industry?: string }) {
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    const form = e.currentTarget
    const formData = new FormData(form)
    const phone = toE164(String(formData.get("phone") || ""))
    if (!phone) {
      setError("Please enter a 10-digit US or Canadian mobile number.")
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(PRONTO_DEMO_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: String(formData.get("firstName") || "").trim(), phone, consent: true }),
      })
      const body = await res.json().catch(() => ({}))

      if (res.ok) {
        setSent(true)
        form.reset()
      } else if (body.error) {
        setError(String(body.error))
      } else if (res.status === 503) {
        setError("The text demo is opening soon. Please check back shortly.")
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error('Network error:', err)
      setError("We couldn't reach the demo right now. Please try again in a minute.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section id="demo" className="py-16 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <Pill>Live demo</Pill>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Text yourself a demo</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            See what your {industry ? `${industry.toLowerCase()} ` : ""}leads would get. Enter your mobile number and Pronto, our follow-up assistant, texts you within seconds. Reply like a customer would and watch it answer questions and offer appointment times.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { icon: Smartphone, label: "A real text to your phone, not a video" },
              { icon: MessageSquare, label: "Ask it anything a customer might ask" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="h-4 w-4 flex-shrink-0 text-primary"/> {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Card className="p-2 sm:p-4">
          {sent ? (
            <CardContent className="flex flex-col items-center py-12 text-center" aria-live="polite">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <Check className="h-8 w-8" strokeWidth={3}/>
              </motion.div>
              <h3 className="mt-6 text-2xl font-semibold">Check your phone</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">You&apos;ll get a text in a few seconds. Reply to it like a customer would.</p>
              <Button onClick={() => setSent(false)} variant="outline" className="mt-8">
                Try another number
              </Button>
            </CardContent>
          ) : (
            <CardContent className="pt-6">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="demo-firstName">First name</Label>
                    <Input id="demo-firstName" name="firstName" placeholder="Jane" required maxLength={40} autoComplete="given-name" className="h-11 rounded-xl"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-phone">Mobile number</Label>
                    <Input id="demo-phone" name="phone" type="tel" placeholder="(555) 123-4567" required autoComplete="tel" className="h-11 rounded-xl"/>
                  </div>
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[hsl(var(--primary))]"/>
                  <span>{consentText}</span>
                </label>
                {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
                <Button type="submit" size="lg" className="w-full gap-2" disabled={submitting}>
                  {submitting ? "Sending..." : "Text me a demo"} <ArrowRight className="h-4 w-4"/>
                </Button>
                <p className="text-center text-xs text-muted-foreground">US and Canadian mobile numbers only.</p>
              </form>
            </CardContent>
          )}
        </Card>
      </div>
    </Section>
  )
}
