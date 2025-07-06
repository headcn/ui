import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Textarea } from "@/registry/ui/textarea"

export default function TextareaDemo() {
  return (
    <Field className="flex w-full max-w-75 flex-col gap-2">
      <Label>Your message</Label>
      <Textarea placeholder="Type your message here." className="w-full" />
    </Field>
  )
}
