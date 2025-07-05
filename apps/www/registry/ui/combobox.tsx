import {
  Combobox as HeadlessCombobox,
  ComboboxButton as HeadlessComboboxButton,
  ComboboxInput as HeadlessComboboxInput,
  ComboboxOption as HeadlessComboboxOption,
  ComboboxOptions as HeadlessComboboxOptions,
  type ComboboxButtonProps as HeadlessComboboxButtonProps,
  type ComboboxInputProps as HeadlessComboboxInputProps,
  type ComboboxOptionProps as HeadlessComboboxOptionProps,
  type ComboboxOptionsProps as HeadlessComboboxOptionsProps,
  type ComboboxProps as HeadlessComboboxProps,
} from "@headlessui/react"

import { cn } from "@/lib/utils"

function Combobox<
  TValue = Array<unknown>,
  TMultiple extends boolean | undefined = false,
>(props: HeadlessComboboxProps<TValue, TMultiple>) {
  return <HeadlessCombobox {...props} />
}

function ComboboxButton({ className, ...props }: HeadlessComboboxButtonProps) {
  return (
    <HeadlessComboboxButton
      className={cn("group absolute inset-y-0 right-0 px-3", className)}
      {...props}
    />
  )
}

function ComboboxInput<TType = string>({
  className,
  ...props
}: HeadlessComboboxInputProps<typeof HeadlessComboboxInput, TType>) {
  return (
    <HeadlessComboboxInput
      className={cn(
        "bg-accent/50 text-accent-foreground h-9 w-full rounded-md border px-3 text-sm font-medium",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ComboboxOptions({
  className,
  ...props
}: HeadlessComboboxOptionsProps) {
  return (
    <HeadlessComboboxOptions
      className={cn(
        "bg-accent/50 w-(--input-width) rounded-lg border p-1 transition [--anchor-gap:--spacing(2)]",
        "empty:invisible data-leave:data-closed:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxOption<TType = string>({
  className,
  ...props
}: HeadlessComboboxOptionProps<typeof HeadlessComboboxOption, TType>) {
  return (
    <HeadlessComboboxOption
      className={cn(
        "group text-accent-foreground flex h-9 items-center justify-between gap-2 rounded-md px-3 text-sm select-none",
        "data-focus:bg-accent-foreground/10 data-disabled:opacity-50",
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
  ComboboxOption,
  ComboboxOptions,
}
