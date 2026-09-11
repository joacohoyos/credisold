import { useRender } from "@base-ui-components/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.01em] [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand text-brand-foreground",
        soft: "border-brand/15 bg-brand-soft text-brand-deep",
        red: "border-transparent bg-brand-red/12 text-brand-red",
        outline: "border-border bg-card/60 text-muted-foreground backdrop-blur",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

type BadgeProps = useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>

function Badge({ className, variant, render, ...props }: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    render,
    props: { "data-slot": "badge", className: cn(badgeVariants({ variant, className })), ...props },
  })
}

export { Badge, badgeVariants }
