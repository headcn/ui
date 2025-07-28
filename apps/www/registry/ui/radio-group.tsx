import {
  Radio as HeadlessRadio,
  RadioGroup as HeadlessRadioGroup,
  type RadioGroupProps as HeadlessRadioGroupProps,
  type RadioProps as HeadlessRadioProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Radio<TType = string>({
  className,
  ...props
}: HeadlessRadioProps<typeof HeadlessRadio, TType>) {
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

function RadioGroup<TType = string>({
  className,
  ...props
}: HeadlessRadioGroupProps<typeof HeadlessRadioGroup, TType>) {
  return (
    <HeadlessRadioGroup className={cn("grid gap-3", className)} {...props} />
  )
}

export { Radio, RadioGroup }
