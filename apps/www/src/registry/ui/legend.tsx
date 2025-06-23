import {
  Legend as HLegend,
  LegendProps as HLegendProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Legend({ className, ...props }: HLegendProps) {
  return (
    <HLegend
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

export { Legend }
