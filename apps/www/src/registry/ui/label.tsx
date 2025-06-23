import {
  Label as HeadlessLabel,
  type LabelProps as HeadlessLabelProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: HeadlessLabelProps) {
  return (
    <HeadlessLabel
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
