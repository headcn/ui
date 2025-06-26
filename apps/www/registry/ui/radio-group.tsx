import {
  Radio as HeadlessRadio,
  RadioGroup as HeadlessRadioGroup,
  type RadioGroupProps as HeadlessRadioGroupProps,
  type RadioProps as HeadlessRadioProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Radio({ className, ...props }: HeadlessRadioProps) {
  return (
    <HeadlessRadio
      className={cn(
        "group bg-accent/50 grid place-items-center rounded-full border p-1",
        "data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function RadioGroup({ className, ...props }: HeadlessRadioGroupProps) {
  return (
    <HeadlessRadioGroup className={cn("grid gap-3", className)} {...props} />
  )
}

export { Radio, RadioGroup }
