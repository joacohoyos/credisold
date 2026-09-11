import {
  Banknote,
  CalendarRange,
  ClipboardCheck,
  Handshake,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { site } from "@/lib/site"

const icons: Record<string, LucideIcon> = {
  Banknote,
  CalendarRange,
  ClipboardCheck,
  Handshake,
  MapPin,
  ShieldCheck,
}

export function Benefits() {
  return (
    <section id="beneficios" className="shell scroll-mt-24 py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <Badge variant="soft">Por qué CrediSold</Badge>
        <h2 className="mt-5 text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance">
          Un préstamo simple, de gente que te conoce.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Nada de esperar semanas por una respuesta automática. Acá hablás con una persona y resolvés.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.benefits.map((benefit, index) => {
          const Icon = icons[benefit.icon] ?? ShieldCheck
          return (
            <Reveal key={benefit.title} delay={index * 70}>
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_20px_48px_-28px_rgba(16,42,44,0.5)]">
                <CardHeader>
                  <span className="mb-4 grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.body}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
