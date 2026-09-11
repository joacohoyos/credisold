import { Slider as SliderPrimitive } from "@base-ui-components/react/slider"

import { cn } from "@/lib/utils"

function Slider({ className, ...props }: SliderPrimitive.Root.Props) {
  return (
    <SliderPrimitive.Root data-slot="slider" className={cn("w-full", className)} {...props}>
      <SliderPrimitive.Control className="flex w-full touch-none select-none items-center py-3">
        <SliderPrimitive.Track className="h-2 w-full rounded-full bg-secondary">
          <SliderPrimitive.Indicator className="rounded-full bg-gradient-to-r from-brand to-brand-red" />
          <SliderPrimitive.Thumb className="size-6 cursor-grab rounded-full border-[3px] border-brand bg-card shadow-[0_4px_14px_-4px_rgba(16,42,44,0.45)] transition-transform outline-none hover:scale-110 focus-visible:ring-[3px] focus-visible:ring-ring active:cursor-grabbing" />
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
