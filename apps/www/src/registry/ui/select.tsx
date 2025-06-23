import {
  Select as HeadlessSelect,
  type SelectProps as HeadlessSelectProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Select({ className, ...props }: HeadlessSelectProps) {
  return (
    <HeadlessSelect
      className={cn(
        "bg-accent/50 text-accent-foreground h-9 appearance-none rounded-md border px-3 pr-8 text-sm font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Select }
