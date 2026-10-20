import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Section, Pill, Reveal } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { Contact } from "@/app/components/site/Contact"
import { FaqList } from "@/app/components/site/FaqList"
import { AdFixes, ProcessSteps } from "@/app/components/site/Blocks"
import { AdMakeover, RampChart } from "@/app/components/site/Visuals"
import { industries, getIndustry } from "@/app/lib/site-data"
import { JsonLd } from "@/app/components/site/JsonLd"
import { industryService, faqPage, breadcrumbs } from "@/app/lib/structured-data"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = getIndustry(params.slug)
  if (!industry) return {}
  return {
    title: `${industry.name} Marketing: Google & Meta Ads + AI Follow-up | Inferaform`,
    description: industry.intro,
    alternates: { canonical: `/industries/${industry.slug}` },
  }
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustry(params.slug)
  if (!industry) notFound()

  const { name, icon: Icon, headline, intro, pain, approach, offers, channels, faq, adExample } = industry
  const others = industries.filter((i) => i.slug !== industry.slug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          industryService(industry),
          faqPage(faq),
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: name, path: `/industries/${industry.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div className="absolute left-1/2 top-[-12rem] -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <Section className="py-14 lg:py-24">
            <a href="/#industries" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4"/> All industries
            </a>
            <Reveal className="mt-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-5 w-5"/></div>
                <Pill>{name}</Pill>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">{headline}</h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact"><Button size="lg" className="w-full gap-2 sm:w-auto">Get your free audit <ArrowRight className="h-4 w-4"/></Button></a>
                <a href="#playbook"><Button size="lg" variant="outline" className="w-full sm:w-auto">See the playbook</Button></a>
              </div>
            </Reveal>
          </Section>
        </div>

        {/* Challenge + approach */}
        <Section id="playbook" className="py-16 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">The challenge</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug">{pain}</p>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Our approach</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug">{approach}</p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold">Offers that get {name.toLowerCase()} customers to raise their hand</h2>
              <p className="mt-3 text-muted-foreground">
                The offer matters more than the ad. We test a few of these to find what works best in your market.
              </p>
              <ul className="mt-6 space-y-3">
                {offers.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" strokeWidth={3}/>
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="space-y-4">
              {channels.map((c, i) => (
                <div key={c.name} className="flex gap-4 rounded-2xl border bg-card p-5">
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  <div>
                    <p className="font-display text-lg font-semibold">{c.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <div className="border-y border-foreground/5 bg-card/40">
          <AdMakeover example={adExample} title={`A better ad for ${name.toLowerCase()}`} />
        </div>

        <AdFixes />

        <div className="border-y border-foreground/5 bg-card/40">
          <RampChart />
        </div>

        <ProcessSteps />

        <Section className="py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Pill>FAQ</Pill>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{name} questions</h2>
            </Reveal>
            <FaqList items={faq} />
          </div>
        </Section>

        <Contact defaultIndustry={name} />

        <Section className="pb-16 lg:pb-24">
          <p className="text-sm text-muted-foreground">Other industries we work with</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {others.map((o) => (
              <a key={o.slug} href={`/industries/${o.slug}`} className="rounded-full border border-foreground/15 px-3.5 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary">
                {o.name}
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
