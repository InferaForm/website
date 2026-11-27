import type { Metadata } from "next"
import { pageMeta } from "@/app/lib/seo"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, MapPin, Calendar } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Section, Pill, Reveal } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { Contact } from "@/app/components/site/Contact"
import { JsonLd } from "@/app/components/site/JsonLd"
import { caseStudies, getCaseStudy } from "@/app/lib/case-studies"
import { caseStudyArticle, breadcrumbs } from "@/app/lib/structured-data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug)
  if (!study) return {}
  return pageMeta({
    title: `${study.title} | Inferaform case study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug)
  if (!study) notFound()

  const { title, summary, clientType, industrySlug, location, period, problem, whatWeDid, metrics, quote } = study

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          caseStudyArticle(study),
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
            { name: title, path: `/case-studies/${study.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <div className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div className="absolute left-1/2 top-[-12rem] -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <Section className="py-14 lg:py-24">
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4"/> All case studies
            </Link>
            <Reveal className="mt-8 max-w-3xl">
              <Pill>{clientType}</Pill>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{summary}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/> {location}</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary"/> {period}</span>
              </div>
            </Reveal>
          </Section>
        </div>

        <Section className="pb-16 lg:pb-24">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ label, before, after }) => (
              <div key={label} className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-6">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="mt-2 font-display text-4xl font-semibold tracking-tight">{after}</dd>
                {before && <dd className="mt-1 text-sm text-muted-foreground">Before: {before}</dd>}
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">The problem</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug">{problem}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">What we did</p>
              <ul className="mt-4 space-y-3">
                {whatWeDid.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" strokeWidth={3}/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {quote && (
            <figure className="mt-16 rounded-3xl border bg-card p-6 sm:p-10">
              <blockquote className="font-display text-2xl leading-snug sm:text-3xl">&ldquo;{quote.text}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{quote.name}</span>
                <span className="text-muted-foreground"> · {quote.role}</span>
              </figcaption>
            </figure>
          )}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="#contact"><Button size="lg" className="w-full gap-2 sm:w-auto">Get your free audit <ArrowRight className="h-4 w-4"/></Button></a>
            {industrySlug && (
              <Link href={`/industries/${industrySlug}`}><Button size="lg" variant="outline" className="w-full sm:w-auto">See the {clientType.toLowerCase()} playbook</Button></Link>
            )}
          </div>
        </Section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
