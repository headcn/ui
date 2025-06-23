import {
  Fieldset as HeadlessFieldset,
  type FieldsetProps as HeadlessFieldsetProps,
} from "@headlessui/react"

function Fieldset(props: HeadlessFieldsetProps) {
  return <HeadlessFieldset {...props} />
}

export { Fieldset }
