import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

import { Section, Pill, Reveal } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { Contact } from "@/app/components/site/Contact"
import { JsonLd } from "@/app/components/site/JsonLd"
import { caseStudies } from "@/app/lib/case-studies"
import { breadcrumbs } from "@/app/lib/structured-data"

export const metadata: Metadata = {
  title: "Case Studies: Real Client Results | Inferaform",
  description: "How local businesses booked more appointments with Google and Meta ads and instant AI follow-up.",
  alternates: { canonical: "/case-studies" },
}

export default function CaseStudiesPage() {
  // No page until there are real results to show
  if (caseStudies.length === 0) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies" }])} />
      <Navbar />
      <main>
        <Section className="py-14 lg:py-24">
          <Reveal className="max-w-3xl">
            <Pill>Case studies</Pill>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">Results from real clients</h1>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {caseStudies.map(({ slug, title, summary, clientType, location, metrics }) => (
              <a key={slug} href={`/case-studies/${slug}`} className="group flex flex-col rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{clientType} · {location}</p>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary"/>
                </div>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
                {metrics[0] && (
                  <p className="mt-6 text-sm">
                    <span className="font-display text-3xl font-semibold text-primary">{metrics[0].after}</span>{" "}
                    <span className="text-muted-foreground">{metrics[0].label.toLowerCase()}</span>
                  </p>
                )}
              </a>
            ))}
          </div>
        </Section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
