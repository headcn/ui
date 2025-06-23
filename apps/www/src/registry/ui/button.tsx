import {
  Button as HeadlessButton,
  type ButtonProps as HeadlessButtonProps,
} from "@headlessui/react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 transform items-center justify-center gap-1.5 rounded-md text-sm font-semibold whitespace-nowrap transition data-active:translate-y-0.5 data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground data-hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground data-hover:bg-secondary/90",
        destructive:
          "bg-destructive text-foreground data-hover:bg-destructive/90",
        outline:
          "bg-accent/50 text-accent-foreground data-hover:bg-accent border",
        ghost: "data-hover:bg-accent text-accent-foreground",
        link: "text-primary underline-offset-4 data-hover:underline",
      },
      size: {
        xs: "h-7 px-2.5 text-xs has-[>svg]:px-2",
        sm: "h-8 px-3 has-[>svg]:px-2.5",
        md: "h-9 px-4 has-[>svg]:px-3",
        lg: "h-10 px-5 has-[>svg]:px-4",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-md": "size-9",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  children,
  className,
  variant,
  size,
  ...props
}: HeadlessButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <HeadlessButton
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </HeadlessButton>
  )
}

export { Button, buttonVariants }
