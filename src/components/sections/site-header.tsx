import * as React from "react"
import { MessageCircle, Menu, X } from "lucide-react"

import { Logo } from "@/components/brand/logo"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Evita que el fondo scrollee con el menú mobile abierto.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_var(--border),0_8px_28px_-22px_rgba(16,42,44,0.45)]",
      )}
    >
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled || open ? "bg-background/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="shell flex h-18 items-center justify-between gap-4">
          <a href="#inicio" className="rounded-lg" aria-label={`${site.name} — inicio`}>
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              render={
                <a href={site.contact.whatsapp} target="_blank" rel="noreferrer noopener">
                  <MessageCircle aria-hidden />
                  Pedir préstamo
                </a>
              }
            />
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Principal (mobile)" className="shell flex flex-col py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 text-[0.95rem] font-semibold transition-colors hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="mt-3 w-full"
              size="lg"
              render={
                <a href={site.contact.whatsapp} target="_blank" rel="noreferrer noopener">
                  <MessageCircle aria-hidden />
                  Pedir préstamo por WhatsApp
                </a>
              }
            />
          </nav>
        </div>
      )}
    </header>
  )
}
