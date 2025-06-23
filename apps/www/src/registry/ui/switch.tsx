import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Switch({ className, ...props }: HeadlessSwitchProps) {
  return (
    <HeadlessSwitch
      className={cn(
        "group bg-accent/50 relative inline-flex h-7 w-14 shrink-0 items-center rounded-full border p-1 transition",
        "data-checked:bg-primary data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "bg-foreground pointer-events-none inline-block aspect-square h-full translate-x-0 rounded-full transition",
          "group-data-checked:translate-x-7"
        )}
      />
    </HeadlessSwitch>
  )
}

export { Switch }
