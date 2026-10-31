import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Section, Pill, Reveal } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { Contact } from "@/app/components/site/Contact"
import { DemoText } from "@/app/components/site/DemoText"
import { MissedLeadCalculator } from "@/app/components/site/Calculator"
import { JsonLd } from "@/app/components/site/JsonLd"
import { breadcrumbs } from "@/app/lib/structured-data"
import { SITE_URL } from "@/app/lib/site-data"

const description =
  "Estimate how many jobs and how much revenue slow lead follow-up costs your business each month and year. Free, conservative, and emailed to you if you like."

export const metadata: Metadata = {
  title: "Missed-Lead Calculator: What Slow Follow-up Costs You | Inferaform",
  description,
  alternates: { canonical: "/calculator" },
}

const calculatorApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Missed-lead calculator",
  url: `${SITE_URL}/calculator`,
  description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@id": `${SITE_URL}/#organization` },
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          calculatorApp,
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Missed-lead calculator", path: "/calculator" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <div className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div className="absolute left-1/2 top-[-12rem] -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <Section className="py-14 lg:py-20">
            <Reveal className="max-w-3xl">
              <Pill>Missed-lead calculator</Pill>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">What is slow follow-up costing you?</h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Leads who hear back within minutes book far more often than leads who wait hours. Put in your numbers to see a conservative estimate of what the gap is worth.
              </p>
            </Reveal>
            <div className="mt-10">
              <MissedLeadCalculator />
            </div>
          </Section>
        </div>

        <DemoText />

        <Section className="pb-4">
          <div className="flex flex-col items-start gap-4 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Want the real number?</span> A free audit looks at how fast your leads actually get a reply today.
            </p>
            <a href="#contact" className="flex-shrink-0"><Button variant="outline" className="gap-2">Get your free audit <ArrowRight className="h-4 w-4"/></Button></a>
          </div>
        </Section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
