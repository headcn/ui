import { Field as HField } from "@headlessui/react"

function Field({
  children,
  ...props
}: React.ComponentType<typeof HField> & {
  children: React.ReactNode
}) {
  return <HField {...props}>{children}</HField>
}

export { Field }
