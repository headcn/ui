import { Field } from "@/registry/ui/field"
import { Fieldset } from "@/registry/ui/fieldset"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import { Legend } from "@/registry/ui/legend"

export default function Page() {
  return (
    <div className="h-dvh w-100 pt-20">
      <Fieldset className="bg-muted/50 space-y-3 rounded-xl p-5">
        <Legend>Shipping details</Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Street address
          </Label>
          <Input placeholder="Address" />
        </Field>
      </Fieldset>
    </div>
  )
}
