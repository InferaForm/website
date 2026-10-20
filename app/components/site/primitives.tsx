'use client'

import React from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"

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

export const LogoMark = () => (
  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
    <Zap className="h-4 w-4" strokeWidth={2.5} />
  </span>
)

// Fades content in when it scrolls into view
export const Reveal = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={className}>
    {children}
  </motion.div>
)
