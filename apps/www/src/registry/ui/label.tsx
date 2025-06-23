import { Label as HLabel, LabelProps as HLabelProps } from "@headlessui/react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: HLabelProps) {
  return (
    <HLabel
      className={cn(
        "text-foreground text-sm font-medium",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
