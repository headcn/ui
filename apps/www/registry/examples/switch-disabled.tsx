import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Switch } from "@/registry/ui/switch"

export default function SwitchDisabled() {
  return (
    <Field disabled className="flex items-center gap-3">
      <Switch />
      <Label>Airplane mode</Label>
    </Field>
  )
}
