import {
  Combobox as HeadlessCombobox,
  ComboboxButton as HeadlessComboboxButton,
  ComboboxInput as HeadlessComboboxInput,
  ComboboxOption as HeadlessComboboxOption,
  ComboboxOptions as HeadlessComboboxOptions,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Combobox(props: React.ComponentProps<typeof HeadlessCombobox>) {
  return <HeadlessCombobox {...props} />
}

function ComboboxButton({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessComboboxButton>) {
  return (
    <HeadlessComboboxButton
      className={cn("group absolute inset-y-0 right-0 px-3", className)}
      {...props}
    />
  )
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessComboboxInput>) {
  return (
    <HeadlessComboboxInput
      className={cn(
        "bg-accent/50 text-accent-foreground h-9 w-full rounded-md border px-3 text-sm font-medium data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ComboboxOptions({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessComboboxOptions>) {
  return (
    <HeadlessComboboxOptions
      className={cn(
        "bg-accent/50 w-(--input-width) rounded-lg border p-1 transition [--anchor-gap:--spacing(2)] empty:invisible data-leave:data-closed:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxOption({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessComboboxOption>) {
  return (
    <HeadlessComboboxOption
      className={cn(
        "group data-focus:bg-accent-foreground/10 text-accent-foreground flex h-9 items-center justify-between gap-2 rounded-md px-3 text-sm select-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
}
