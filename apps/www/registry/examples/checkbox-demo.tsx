import { Checkbox } from "@/registry/ui/checkbox"
import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="grid gap-4">
      <Field className="flex items-center gap-3">
        <Checkbox />
        <Label>Accept terms and conditions</Label>
      </Field>
      <Field className="flex items-center gap-3">
        <Checkbox defaultChecked />
        <div>
          <Label>Accept terms and conditions</Label>
          <Description>
            This will give you early access to new features we&apos;re
            developing.
          </Description>
        </div>
      </Field>
      <Field disabled className="flex items-center gap-3">
        <Checkbox />
        <Label>Enable notifications</Label>
      </Field>
      <Field>
        <Label className="bg-accent/25 has-[[data-checked]]:border-primary/25 has-[[data-checked]]:bg-primary/25 flex items-start gap-3 rounded-md border p-3 transition-colors">
          <Checkbox defaultChecked />
          <div>
            <Label>Enable notifications</Label>
            <Description className="font-normal">
              You can enable or disable notifications at any time.
            </Description>
          </div>
        </Label>
      </Field>
    </div>
  )
}
