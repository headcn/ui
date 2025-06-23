import * as React from "react"
import { Description as HDescription } from "@headlessui/react"

import { cn } from "@/lib/utils"

function Description({
  className,
  ...props
}: React.ComponentType<typeof HDescription> & {
  className?: string
  children: React.ReactNode
}): React.JSX.Element {
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
