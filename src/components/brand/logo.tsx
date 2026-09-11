import { cn } from "@/lib/utils"

/**
 * Isotipo de CrediSold: la "C" azul con el punto rojo, tal como aparece
 * en el material gráfico de la marca.
 *
 * La misma geometría se reutiliza en `public/favicon.svg`, en el
 * apple-touch-icon y en la imagen para compartir.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-9", className)}>
      <path
        d="M22.9 22.8A9 9 0 1 1 22.9 11.2"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="5.4"
        strokeLinecap="round"
      />
      <circle cx="26.1" cy="7.2" r="3.6" fill="var(--brand-red)" />
    </svg>
  )
}

/** Isotipo + logotipo. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span className="text-[1.4rem] font-extrabold lowercase leading-none tracking-[-0.03em] text-brand">
        credi$old
      </span>
    </span>
  )
}
