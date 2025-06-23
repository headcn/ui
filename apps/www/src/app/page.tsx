import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export default function Page() {
  return (
    <div className="h-dvh w-100 pt-20">
      <Field>
        <Label>Name</Label>
        <Description>
          <span>Use your real name so people will recognize you.</span>
        </Description>
        <Input name="full_name" placeholder="John Doe" className="mt-3" />
      </Field>
    </div>
  )
}
