import {
  Radio as HRadio,
  RadioGroup as HRadioGroup,
  RadioGroupProps as HRadioGroupProps,
  RadioProps as HRadioProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Radio({ className, ...props }: HRadioProps) {
  return (
    <HRadio
      className={cn(
        "group bg-accent/50 grid place-items-center rounded-full border p-1",
        "data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function RadioGroup({ className, ...props }: HRadioGroupProps) {
  return <HRadioGroup className={cn("grid gap-3", className)} {...props} />
}

export { Radio, RadioGroup }
