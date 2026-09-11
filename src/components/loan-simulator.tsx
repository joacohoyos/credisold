import * as React from "react"
import { Info, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { simulator, waLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const pesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
})

/** Cuota fija por sistema francés. Con tasa 0 reparte el capital en partes iguales. */
function monthlyPayment(amount: number, months: number, rate: number) {
  if (rate <= 0) return amount / months
  return (amount * rate) / (1 - (1 + rate) ** -months)
}

export function LoanSimulator({ className }: { className?: string }) {
  const [amount, setAmount] = React.useState<number>(simulator.defaultAmount)
  const [term, setTerm] = React.useState<number>(simulator.defaultTerm)

  const payment = monthlyPayment(amount, term, simulator.monthlyRate)
  const total = payment * term

  const whatsappHref = waLink(
    `¡Hola CrediSold! Quiero consultar por un préstamo de ${pesos.format(amount)} en ${term} cuotas.`,
  )

  return (
    <div
      className={cn(
        "ring-gradient rounded-[1.6rem] p-1.5 shadow-[0_28px_70px_-38px_rgba(16,42,44,0.6)]",
        className,
      )}
    >
      <div className="rounded-[1.25rem] bg-card p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold tracking-[-0.01em]">Simulá tu préstamo</h2>
            <p className="mt-1 text-sm text-muted-foreground">Movés el monto y ves la cuota al instante.</p>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-baseline justify-between gap-3">
            <label id="label-monto" className="text-sm font-semibold text-muted-foreground">
              ¿Cuánto necesitás?
            </label>
            <output className="text-2xl font-extrabold tracking-[-0.02em] tabular-nums">
              {pesos.format(amount)}
            </output>
          </div>

          <Slider
            className="mt-2"
            aria-labelledby="label-monto"
            value={amount}
            min={simulator.minAmount}
            max={simulator.maxAmount}
            step={simulator.stepAmount}
            onValueChange={(value) => setAmount(typeof value === "number" ? value : value[0])}
          />

          <div className="flex justify-between text-xs font-medium text-muted-foreground tabular-nums">
            <span>{pesos.format(simulator.minAmount)}</span>
            <span>{pesos.format(simulator.maxAmount)}</span>
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-muted-foreground">¿En cuántas cuotas?</legend>
          <div className="mt-2.5 grid grid-cols-5 gap-1.5" role="group">
            {simulator.terms.map((option) => {
              const active = option === term
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTerm(option)}
                  className={cn(
                    "cursor-pointer rounded-xl border py-2.5 text-sm font-bold tabular-nums transition-all duration-200",
                    active
                      ? "border-transparent bg-brand text-brand-foreground shadow-[0_8px_20px_-12px_color-mix(in_oklab,var(--brand)_90%,transparent)]"
                      : "border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-foreground",
                  )}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </fieldset>

        <Separator className="my-6" />

        <div className="grid gap-4 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Cuota mensual estimada</p>
            <p className="mt-0.5 text-[2.1rem] font-extrabold leading-none tracking-[-0.03em] text-brand tabular-nums">
              {pesos.format(payment)}
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm font-semibold text-muted-foreground">Total a devolver</p>
            <p className="mt-0.5 text-lg font-bold tabular-nums">{pesos.format(total)}</p>
          </div>
        </div>

        <Button
          variant="gold"
          size="lg"
          className="mt-6 w-full"
          render={
            <a href={whatsappHref} target="_blank" rel="noreferrer noopener">
              <MessageCircle aria-hidden />
              Pedir este préstamo
            </a>
          }
        />

        <p className="mt-4 flex gap-2 text-xs leading-relaxed text-muted-foreground">
          <Info aria-hidden className="mt-px size-4 shrink-0" />
          <span>
            Valores orientativos. La tasa, el monto y el plazo finales se definen según la evaluación
            crediticia de cada caso.
          </span>
        </p>
      </div>
    </div>
  )
}
