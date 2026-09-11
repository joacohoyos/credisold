import { Check, FileText } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { site } from "@/lib/site"

export function Requirements() {
  return (
    <section id="requisitos" className="shell scroll-mt-24 py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Badge variant="soft">Requisitos</Badge>
          <h2 className="mt-5 text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance">
            Lo que necesitás traer. Nada más.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Sin garantes imposibles ni carpetas interminables. Si te falta algún papel, escribinos igual
            y vemos cómo resolverlo.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="ring-gradient rounded-[1.5rem] p-7 shadow-[0_22px_56px_-38px_rgba(16,42,44,0.55)] sm:p-8">
            {site.requirements.map((requirement) => (
              <li
                key={requirement}
                className="flex items-start gap-3.5 border-b border-border py-4 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium leading-relaxed text-pretty">{requirement}</span>
              </li>
            ))}

            <li className="mt-5 flex items-start gap-3 rounded-2xl bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
              <FileText aria-hidden className="mt-px size-4 shrink-0" />
              <span>
                Según el monto solicitado podemos pedirte alguna documentación adicional. Te lo avisamos
                antes de que vengas.
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
