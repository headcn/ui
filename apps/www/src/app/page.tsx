import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Textarea } from "@/registry/ui/textarea"

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Description>
        Add any extra information about your event here.
      </Description>
      <Textarea
        name="description"
        placeholder="Type your content here..."
        className="mt-3"
        disabled
      ></Textarea>
    </Field>
  )
}
