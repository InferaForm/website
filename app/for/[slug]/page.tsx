import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, Clock, Moon, Star } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Section, Pill } from "@/app/components/site/primitives"
import { Navbar } from "@/app/components/site/Navbar"
import { Footer } from "@/app/components/site/Footer"
import { DemoText } from "@/app/components/site/DemoText"
import { prospects, getProspect, BOOKING_URL } from "@/app/lib/prospects"

// Next 15+: route params are a Promise.
type Props = { params: Promise<{ slug: string }> }

// Only the pages in prospects.json exist; any other /for/ address is a 404.
export const dynamicParams = false
export function generateStaticParams() {
  return prospects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProspect((await params).slug)
  if (!p) return {}
  return {
    title: `For ${p.business}: every new enquiry answered in under a minute | Inferaform`,
    description: `What a new ${p.trade.toLowerCase()} customer in ${p.city} would get from ${p.business}, a minute after they ask.`,
    robots: { index: false, follow: false },
  }
}

function Bubble({ from, children, time }: { from: "customer" | "business"; children: React.ReactNode; time: string }) {
  const mine = from === "business"
  return (
    <div className={`flex flex-col ${mine ? "items-end" : "items-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${mine ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm bg-foreground/[0.06]"}`}>
        {children}
      </div>
      <span className="mt-1 px-1 text-xs text-muted-foreground">{time}</span>
    </div>
  )
}

export default async function ProspectPage({ params }: Props) {
  const p = getProspect((await params).slug)
  if (!p) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div className="absolute left-1/2 top-[-12rem] -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <Section className="py-12 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="max-w-xl">
                <Pill>Made for {p.business}</Pill>
                <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl">
                  A new {p.trade.toLowerCase()} customer in {p.city} asks at 9:14pm. {p.business} answers at 9:15.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Most people who fill in a form ask two or three companies and go with whoever gets back to them first.
                  This is what your replies could look like, day or night, written in your name and booking straight into your calendar.
                </p>
                {p.rating && p.reviews > 0 ? (
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-amber-500" /> {p.rating} from {p.reviews} Google reviews. The work is already there; this makes sure no enquiry goes cold.
                  </p>
                ) : null}
                {p.replyPromise ? (
                  <p className="mt-3 text-sm text-muted-foreground">Your site tells customers: &ldquo;{p.replyPromise}&rdquo;. With this, they hear back in under a minute.</p>
                ) : null}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#demo"><Button size="lg" className="w-full gap-2 sm:w-auto">Get the text on your phone <ArrowRight className="h-4 w-4" /></Button></a>
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer"><Button size="lg" variant="outline" className="w-full sm:w-auto">Book 15 minutes</Button></a>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border border-foreground/10 p-4"><Clock className="mb-2 h-4 w-4 text-primary" />Text and call within 60 seconds of every form, call or ad lead</div>
                  <div className="rounded-xl border border-foreground/10 p-4"><Moon className="mb-2 h-4 w-4 text-primary" />Nights, weekends and while you&rsquo;re on a job</div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-md rounded-[2rem] border border-foreground/10 bg-background p-5 shadow-xl">
                <div className="mb-4 border-b border-foreground/10 pb-3 text-center">
                  <div className="text-sm font-semibold">{p.business}</div>
                  <div className="text-xs text-muted-foreground">Text message · example</div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-dashed border-foreground/15 p-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Website form, 9:14pm</span><br />{p.customerAsk}
                  </div>
                  <Bubble from="business" time="9:15pm · 41 seconds later">{p.reply1}</Bubble>
                  <Bubble from="customer" time="9:17pm">{p.customerFollow}</Bubble>
                  <Bubble from="business" time="9:17pm">{p.reply2}</Bubble>
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground">An example written for {p.business}. Real replies use your prices, hours and calendar.</p>
              </div>
            </div>
          </Section>
        </div>

        <div id="demo">
          <DemoText />
        </div>

        <Section className="py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">One {p.trade.toLowerCase()} business per area</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I take on one {p.trade.toLowerCase()} company in {p.city} as a founding client: reduced pricing for the first three months, month to month, and the ad accounts stay in your name.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="mt-8 inline-block"><Button size="lg" className="gap-2">Book 15 minutes with Huzaifa <ArrowRight className="h-4 w-4" /></Button></a>
          <p className="mt-4 text-sm text-muted-foreground">Or reply to hello@inferaform.com</p>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
