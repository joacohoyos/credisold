import { useRender } from "@base-ui-components/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[background-color,box-shadow,transform,color] duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_color-mix(in_oklab,var(--brand)_85%,transparent)] hover:bg-[color-mix(in_oklab,var(--brand)_88%,black)]",
        red: "bg-brand-red text-brand-red-foreground shadow-[0_10px_24px_-12px_color-mix(in_oklab,var(--brand-red)_80%,transparent)] hover:bg-[color-mix(in_oklab,var(--brand-red)_90%,black)]",
        outline:
          "border border-border bg-card/70 text-foreground backdrop-blur hover:border-brand/40 hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklab,var(--secondary)_88%,black)]",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-brand underline-offset-4 hover:underline rounded-md",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-13 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

type ButtonProps = useRender.ComponentProps<"button"> & VariantProps<typeof buttonVariants>

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  return useRender({
    defaultTagName: "button",
    render,
    props: {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props,
    },
  })
}

export { Button, buttonVariants }
