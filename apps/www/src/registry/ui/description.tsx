import {
  Description as HDescription,
  DescriptionProps as HDescriptionProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Description({ className, ...props }: HDescriptionProps) {
  return (
    <HDescription
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
