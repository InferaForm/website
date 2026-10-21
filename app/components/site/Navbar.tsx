'use client'

import React, { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Section, LogoMark } from "./primitives"

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#industries", label: "Industries" },
  { href: "/seo-geo", label: "SEO & GEO" },
  { href: "/#pricing", label: "Pricing" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/5 bg-background/70 backdrop-blur-xl">
      <Section className="flex items-center justify-between py-3.5">
        <a href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">Inferaform</span>
            <span className="mt-1 text-[11px] text-muted-foreground">Ads &amp; AI Lead Follow-up</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-foreground/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/#contact" className="hidden sm:block">
            <Button className="gap-2">Free audit <ArrowRight className="h-4 w-4"/></Button>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-foreground/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </Section>
      {open && (
        <div className="border-t border-foreground/5 lg:hidden">
          <Section className="flex flex-col py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-lg text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="mt-3">
              <Button size="lg" className="w-full gap-2">Get your free audit <ArrowRight className="h-4 w-4"/></Button>
            </a>
          </Section>
        </div>
      )}
    </header>
  )
}
