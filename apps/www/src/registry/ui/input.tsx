import {
  Input as HeadlessInput,
  InputProps as HInputProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Input({ className, ...props }: HInputProps) {
  return (
    <HeadlessInput
      className={cn(
        "bg-accent/50 text-accent-foreground h-9 w-full rounded-md border px-3 text-sm",
        "data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
