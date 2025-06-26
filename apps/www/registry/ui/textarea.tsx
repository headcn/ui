import {
  Textarea as HeadlessTextarea,
  type TextareaProps as HeadlessTextareaProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: HeadlessTextareaProps) {
  return (
    <HeadlessTextarea
      className={cn(
        "bg-accent/50 flex field-sizing-content rounded-md border px-3 py-2 text-sm",
        "data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
