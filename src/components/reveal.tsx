import * as React from "react"

import { cn } from "@/lib/utils"

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  /** Retraso en ms, para escalonar elementos de una misma grilla. */
  delay?: number
  /** Etiqueta a renderizar. Útil para no romper listas (`ol > li`). */
  as?: "div" | "li" | "section"
}

/**
 * Muestra su contenido con un fade-up cuando entra en pantalla.
 * Respeta `prefers-reduced-motion` vía la regla global de index.css.
 */
export function Reveal({ delay = 0, as: Tag = "div", className, style, children, ...props }: RevealProps) {
  const ref = React.useRef<HTMLElement>(null)
  // Sin IntersectionObserver mostramos el contenido directamente.
  const [shown, setShown] = React.useState(() => typeof IntersectionObserver === "undefined")

  React.useEffect(() => {
    const el = ref.current
    if (!el || shown) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-shown={shown || undefined}
      className={cn("opacity-0 data-[shown]:animate-reveal", className)}
      style={{ animationDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
