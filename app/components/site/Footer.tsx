import { Section, LogoMark } from "./primitives"
import { industries, CLIENT_LOGIN_URL } from "@/app/lib/site-data"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-foreground/5">
      <Section className="py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-semibold tracking-tight">Inferaform</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Google and Meta ads, AI lead follow-up and local SEO for businesses in the US and Canada.
            </p>
            <p className="mt-4 text-sm">
              <span className="font-display font-semibold">Infer + form.</span>{" "}
              <span className="text-muted-foreground">We use AI to turn form fills into booked appointments.</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3 lg:gap-16">
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li><Link href="/#services" className="hover:text-foreground">Services</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-foreground">How it works</Link></li>
                <li><a href="/seo-geo" className="hover:text-foreground">SEO &amp; GEO</a></li>
                <li><Link href="/#pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="/#faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Industries</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {industries.map((i) => (
                  <li key={i.slug}><a href={`/industries/${i.slug}`} className="hover:text-foreground">{i.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium">Get in touch</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li><Link href="/#contact" className="hover:text-foreground">Free ad audit</Link></li>
                <li><a href="mailto:inferaform@gmail.com" className="hover:text-foreground">inferaform@gmail.com</a></li>
                <li><a href={CLIENT_LOGIN_URL} className="hover:text-foreground">Client login</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-foreground/5 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Inferaform. All rights reserved.
        </div>
      </Section>
    </footer>
  )
}
