import * as React from "react"
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const channels: {
  icon: typeof Phone
  label: string
  value: React.ReactNode
  href?: string
}[] = [
  {
    icon: Phone,
    label: "Teléfono (línea)",
    value: site.contact.phoneLabel,
    href: site.contact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.contact.whatsappLabel,
    href: site.contact.whatsapp,
  },
  {
    icon: MapPin,
    label: "Dónde estamos",
    value: (
      <>
        {site.contact.address}
        <br />
        {site.contact.addressExtra}
        <br />
        {site.contact.city}
      </>
    ),
    href: `https://www.google.com/maps/search/${encodeURIComponent(
      `${site.contact.address}, ${site.contact.city}`,
    )}`,
  },
  {
    icon: Clock,
    label: "Horarios",
    value: site.contact.hours,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="shell scroll-mt-24 py-20 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-panel-dark px-7 py-14 text-center sm:px-12 lg:py-20">
          <div aria-hidden className="aurora pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-[clamp(2rem,4.4vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white text-balance">
              ¿Listo para tu préstamo?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75 text-pretty">
              Escribinos por WhatsApp y en minutos sabés cuánto podés pedir y en cuántas cuotas.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                variant="red"
                size="lg"
                render={
                  <a href={site.contact.whatsapp} target="_blank" rel="noreferrer noopener">
                    <MessageCircle aria-hidden />
                    Escribinos por WhatsApp
                  </a>
                }
              />
              <Button
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/18 hover:text-white"
                render={
                  <a href={site.contact.phoneHref}>
                    <Phone aria-hidden />
                    {site.contact.phoneLabel}
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel, index) => {
          const Icon = channel.icon
          const content = (
            <>
              <span className="mb-3.5 grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon aria-hidden className="size-5" />
              </span>
              <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {channel.label}
              </span>
              <span className="mt-1 block break-words text-sm font-semibold leading-snug text-pretty">
                {channel.value}
              </span>
            </>
          )

          return (
            <Reveal key={channel.label} delay={index * 70}>
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="block h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_16px_36px_-26px_rgba(16,42,44,0.5)]"
                >
                  {content}
                </a>
              ) : (
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  {content}
                </div>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
