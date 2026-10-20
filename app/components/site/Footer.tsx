import { Section, LogoMark } from "./primitives"
import { industries } from "@/app/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-foreground/5">
      <Section className="py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-semibold tracking-tight">Inferaform</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Google and Meta ads, AI lead follow-up and local SEO for businesses in the US and Canada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3 lg:gap-16">
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li><a href="/#services" className="hover:text-foreground">Services</a></li>
                <li><a href="/#how-it-works" className="hover:text-foreground">How it works</a></li>
                <li><a href="/seo-geo" className="hover:text-foreground">SEO &amp; GEO</a></li>
                <li><a href="/#pricing" className="hover:text-foreground">Pricing</a></li>
                <li><a href="/#faq" className="hover:text-foreground">FAQ</a></li>
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
                <li><a href="/#contact" className="hover:text-foreground">Free ad audit</a></li>
                <li><a href="mailto:inferaform@gmail.com" className="hover:text-foreground">inferaform@gmail.com</a></li>
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
