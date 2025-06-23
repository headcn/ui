import { Label as HLabel } from "@headlessui/react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<typeof HLabel>) {
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
