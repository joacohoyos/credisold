import * as React from "react"
import { MessageCircle } from "lucide-react"

import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Botón flotante de WhatsApp: aparece una vez que el usuario pasó el hero. */
export function WhatsappFab() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Escribinos por WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.75)] transition-all duration-300 hover:scale-110 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle aria-hidden className="size-7" />
    </a>
  )
}
