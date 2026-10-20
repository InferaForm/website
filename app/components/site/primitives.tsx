'use client'

import React from "react"
import { motion } from "framer-motion"

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const Section = ({ id, className = "", children }: React.PropsWithChildren<{ id?: string; className?: string }>) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

export const Pill = ({ children }: React.PropsWithChildren) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-foreground/70">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {children}
  </div>
)

// Funnel mark: leads narrowing down to a booked appointment. Matches app/icon.svg.
export const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-8 w-8" aria-hidden="true">
    <rect width="100" height="100" rx="24" fill="hsl(var(--primary))" />
    <g fill="hsl(var(--primary-foreground))">
      <rect x="22" y="22" width="56" height="11" rx="5.5" />
      <rect x="30" y="39" width="40" height="11" rx="5.5" />
      <rect x="38" y="56" width="24" height="11" rx="5.5" />
      <circle cx="50" cy="78" r="6.5" />
    </g>
  </svg>
)

// Fades content in when it scrolls into view
export const Reveal = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={className}>
    {children}
  </motion.div>
)
