import {
  Checkbox as HeadlessCheckbox,
  type CheckboxProps as HeadlessCheckboxProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Checkbox({ className, ...props }: HeadlessCheckboxProps) {
  return (
    <HeadlessCheckbox
      className={cn(
        "group bg-accent/50 grid size-4 shrink-0 place-items-center rounded border",
        "data-checked:bg-primary data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <svg
        className={cn(
          "stroke-primary-foreground size-[90%] translate-y-0.5 opacity-0 transition",
          "group-data-checked:translate-y-0 group-data-checked:opacity-100"
        )}
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </HeadlessCheckbox>
  )
}

export { Checkbox }
