import { ArrowRight, Check, MessageCircle } from "lucide-react"

import { LoanSimulator } from "@/components/loan-simulator"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Resplandor de marca */}
      <div aria-hidden className="aurora pointer-events-none absolute inset-x-0 -top-40 h-[42rem]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_35%,var(--background)_78%)]"
      />

      <div className="shell relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-12 lg:py-24">
        <div>
          <Reveal>
            <Badge variant="soft" className="px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {site.hero.eyebrow}
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-balance">
              {site.hero.title}{" "}
              <span className="relative inline-block text-brand">
                {site.hero.titleAccent}
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute left-0 top-[calc(100%-0.12em)] h-[0.16em] w-full text-brand-red"
                >
                  <path
                    d="M3 8.6C64 3.6 152 2.4 297 5.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {site.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                render={
                  <a href={site.contact.whatsapp} target="_blank" rel="noreferrer noopener">
                    <MessageCircle aria-hidden />
                    Pedir mi préstamo
                  </a>
                }
              />
              <Button
                variant="outline"
                size="lg"
                render={
                  <a href="#como-funciona">
                    Ver cómo funciona
                    <ArrowRight aria-hidden />
                  </a>
                }
              />
            </div>
          </Reveal>

          <Reveal delay={290}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {site.hero.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <span className="grid size-5 place-items-center rounded-full bg-brand/12 text-brand">
                    <Check aria-hidden className="size-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180} id="simulador" className="scroll-mt-28 lg:pl-4">
          <LoanSimulator />
        </Reveal>
      </div>
    </section>
  )
}
