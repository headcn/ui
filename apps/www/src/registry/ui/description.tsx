import {
  Description as HeadlessDescription,
  type DescriptionProps as HeadlessDescriptionProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Description({ className, ...props }: HeadlessDescriptionProps) {
  return (
    <HeadlessDescription
      className={cn(
        "text-muted-foreground text-sm",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Description }
