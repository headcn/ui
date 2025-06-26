import {
  Legend as HeadlessLegend,
  type LegendProps as HeadlessLegendProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Legend({ className, ...props }: HeadlessLegendProps) {
  return (
    <HeadlessLegend
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

export { Legend }
