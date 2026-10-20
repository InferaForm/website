'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-foreground/10">
      {items.map((x, i) => (
        <AccordionItem value={`item-${i}`} key={x.q} className="border-foreground/10">
          <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">{x.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{x.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
