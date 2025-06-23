import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptions as HeadlessListboxOptions,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Listbox(props: React.ComponentProps<typeof HeadlessListbox>) {
  return <HeadlessListbox {...props} />
}

function ListboxButton({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessListboxButton>) {
  return (
    <HeadlessListboxButton
      className={cn(
        "bg-accent/50 text-accent-foreground relative flex h-9 w-full items-center rounded-md border px-3 text-left text-sm font-medium data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ListboxOption({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessListboxOption>) {
  return (
    <HeadlessListboxOption
      className={cn(
        "group data-focus:bg-accent-foreground/10 text-accent-foreground flex h-9 items-center justify-between gap-2 rounded-md px-3 text-sm select-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ListboxOptions({
  className,
  ...props
}: React.ComponentProps<typeof HeadlessListboxOptions>) {
  return (
    <HeadlessListboxOptions
      className={cn(
        "bg-accent/50 w-(--button-width) rounded-lg border p-1 transition [--anchor-gap:--spacing(2)] empty:invisible focus:outline-none! data-leave:data-closed:opacity-0",
        className
      )}
      {...props}
    />
  )
}

export { Listbox, ListboxButton, ListboxOption, ListboxOptions }
