import { Reveal } from "@/components/reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { site } from "@/lib/site"

export function Faq() {
  return (
    <section id="preguntas" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="absolute inset-0 bg-secondary/45" />

      <div className="shell relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <Badge variant="soft">Preguntas frecuentes</Badge>
          <h2 className="mt-5 text-[clamp(2rem,4vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance">
            ¿Te quedó alguna duda?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Si no encontrás lo que buscabas, mandanos un mensaje y te respondemos a la brevedad.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion className="rounded-[1.5rem] border border-border bg-card px-6 shadow-[0_18px_48px_-36px_rgba(16,42,44,0.5)] sm:px-8">
            {site.faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
