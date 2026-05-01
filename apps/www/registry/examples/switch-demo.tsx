import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Switch } from "@/registry/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="grid gap-4">
      <Field className="flex items-center gap-3">
        <Switch />
        <Label>Airplane mode</Label>
      </Field>
      <Field className="flex items-center gap-3">
        <Switch defaultChecked />
        <div>
          <Label>Airplane mode</Label>
          <Description>Disable all network connections.</Description>
        </div>
      </Field>
      <Field disabled className="flex items-center gap-3">
        <Switch />
        <Label>Airplane mode</Label>
      </Field>
    </div>
  )
}
