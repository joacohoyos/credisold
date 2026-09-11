import { MessageCircle } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="absolute inset-0 bg-secondary/45" />

      <div className="shell relative">
        <Reveal className="max-w-2xl">
          <Badge variant="red">En 3 pasos</Badge>
          <h2 className="mt-5 text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance">
            Del mensaje al efectivo, el mismo día.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {site.steps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 110} className="relative md:pr-6">
                {/* Línea que conecta los pasos en desktop */}
                {index < site.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-14 right-0 top-7 hidden h-px bg-gradient-to-r from-brand/40 to-transparent md:block"
                  />
                )}
                <span className="relative grid size-14 place-items-center rounded-2xl bg-card text-xl font-extrabold text-brand shadow-[0_10px_26px_-16px_rgba(16,42,44,0.55)] ring-1 ring-border">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.015em]">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground text-pretty">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={340} className="mt-14">
          <Button
            size="lg"
            render={
              <a href={site.contact.whatsapp} target="_blank" rel="noreferrer noopener">
                <MessageCircle aria-hidden />
                Empezar por WhatsApp
              </a>
            }
          />
        </Reveal>
      </div>
    </section>
  )
}
