import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-9", className)}>
      <defs>
        <linearGradient id="credisold-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9.5" fill="url(#credisold-mark)" />
      <g
        fill="none"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* La "C" de CrediSold */}
        <path d="M20.4 11.6a6.4 6.4 0 1 0 0 8.8" />
        {/* Flecha de crecimiento saliendo de la C */}
        <path d="M18.6 17.4 24 12" />
        <path d="M20.6 12h3.4v3.4" />
      </g>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[1.35rem] font-extrabold leading-none tracking-[-0.025em]">
        Credi<span className="text-brand">Sold</span>
      </span>
    </span>
  )
}
