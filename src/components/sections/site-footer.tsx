import { MessageCircle } from "lucide-react"

import { Logo } from "@/components/brand/logo"
import { FacebookIcon } from "@/components/brand/facebook-icon"
import { Separator } from "@/components/ui/separator"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/35">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              {site.description}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <MessageCircle aria-hidden className="size-[18px]" />
              </a>
              <a
                href={site.contact.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <FacebookIcon aria-hidden className="size-[18px]" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <nav aria-label="Secciones">
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Secciones</h2>
              <ul className="mt-4 space-y-2.5">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contacto</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href={site.contact.phoneHref} className="font-medium transition-colors hover:text-brand">
                    Línea {site.contact.phoneLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium transition-colors hover:text-brand"
                  >
                    WhatsApp {site.contact.whatsappLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium transition-colors hover:text-brand"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  {site.contact.address}
                  <br />
                  {site.contact.addressExtra}
                  <br />
                  {site.contact.city}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-9" />

        <div className="flex flex-col gap-4 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p className="max-w-xl sm:text-right">
            Los montos, plazos y cuotas que se muestran en el simulador son orientativos y están sujetos
            a evaluación crediticia. No constituyen una oferta de crédito.
          </p>
        </div>
      </div>
    </footer>
  )
}
