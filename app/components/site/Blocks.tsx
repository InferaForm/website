import { Check, X } from "lucide-react"
import { adImprovements, processSteps } from "@/app/lib/site-data"
import { Section, Pill, Reveal } from "./primitives"

// Typical vs. our approach, as a compact comparison instead of a card grid
export function AdFixes() {
  return (
    <Section id="results" className="py-16 lg:py-24">
      <Reveal className="max-w-2xl">
        <Pill>How we get better results</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">What we change in your ads</h2>
        <p className="mt-3 text-muted-foreground">
          Most underperforming ad accounts have the same handful of problems. Here&apos;s what we fix first.
        </p>
      </Reveal>

      <div className="mt-10 overflow-hidden rounded-2xl border">
        <div className="hidden grid-cols-[1fr_1.2fr_1.5fr] gap-6 border-b bg-foreground/[0.02] px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:grid">
          <span>Area</span><span>Typical</span><span className="text-primary">With us</span>
        </div>
        {adImprovements.map(({ icon: Icon, title, before, after }) => (
          <div key={title} className="grid gap-3 border-b px-5 py-5 last:border-b-0 md:grid-cols-[1fr_1.2fr_1.5fr] md:gap-6 md:px-6">
            <div className="flex items-center gap-3 font-medium">
              <Icon className="h-5 w-5 flex-shrink-0 text-primary"/> {title}
            </div>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/30"/> {before}
            </p>
            <p className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/> {after}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function ProcessSteps() {
  return (
    <Section id="process" className="py-16 lg:py-24">
      <Reveal className="text-center">
        <Pill>Our process</Pill>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Live in about two weeks</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          No long onboarding. You spend about an hour with us up front, then we handle the rest.
        </p>
      </Reveal>

      <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent lg:block" />
        {processSteps.map(({ icon: Icon, when, title, desc }) => (
          <div key={title} className="relative">
            <div className="relative grid h-12 w-12 place-items-center rounded-full border border-foreground/10 bg-background text-primary">
              <Icon className="h-5 w-5"/>
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-primary">{when}</p>
            <h3 className="mt-1 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
