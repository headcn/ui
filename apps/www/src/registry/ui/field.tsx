import {
  Field as HeadlessField,
  type FieldProps as HeadlessFieldProps,
} from "@headlessui/react"

function Field(props: HeadlessFieldProps) {
  return <HeadlessField {...props} />
}

export { Field }
