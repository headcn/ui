import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Fieldset } from "@/registry/ui/fieldset"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import { Legend } from "@/registry/ui/legend"
import { Textarea } from "@/registry/ui/textarea"

export default function FieldsetDemo() {
  return (
    <Fieldset className="w-full max-w-100 space-y-4">
      <Legend>Shipping details</Legend>
      <Field className="flex flex-col gap-2">
        <Label>Street address</Label>
        <Input placeholder="Street address" />
      </Field>
      <Field className="flex flex-col gap-1">
        <Label>Delivery notes</Label>
        <Description>
          If you have a tiger, we&apos;d like to know about it.
        </Description>
        <Textarea placeholder="Delivery notes." className="mt-2" />
      </Field>
    </Fieldset>
  )
}
