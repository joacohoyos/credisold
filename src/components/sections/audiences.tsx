import { HeartHandshake, Landmark, UserRound, Users, type LucideIcon } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { site } from "@/lib/site"

const icons: Record<string, LucideIcon> = { Landmark, UserRound, Users, HeartHandshake }

export function Audiences() {
  return (
    <section id="para-quien" className="shell scroll-mt-24 py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <Badge variant="red">Fácil y rápido</Badge>
        <h2 className="mt-5 text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance">
          Le prestamos a casi todos.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          No hace falta que trabajes en relación de dependencia. Si cobrás todos los meses, hay un
          préstamo para vos.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.audiences.map((audience, index) => {
          const Icon = icons[audience.icon] ?? Users
          return (
            <Reveal key={audience.title} as="li" delay={index * 80}>
              <div className="group flex h-full flex-col items-start rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_20px_48px_-28px_rgba(20,32,80,0.5)]">
                <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground transition-colors duration-300 group-hover:bg-brand-red group-hover:text-brand-red-foreground">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="text-base font-bold leading-snug text-pretty">{audience.title}</h3>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
