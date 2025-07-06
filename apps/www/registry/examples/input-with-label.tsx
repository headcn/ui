import { Field } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export default function InputWithLabel() {
  return (
    <Field className="flex w-full max-w-75 flex-col gap-2">
      <Label>Email</Label>
      <Input type="email" placeholder="Email" />
    </Field>
  )
}
