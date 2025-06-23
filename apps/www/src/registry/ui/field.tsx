import { Field as HField, FieldProps as HFieldProps } from "@headlessui/react"

function Field({ children, ...props }: HFieldProps) {
  return <HField {...props}>{children}</HField>
}

export { Field }
