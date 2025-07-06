import { Textarea } from "@/registry/ui/textarea"

export default function TextareaDisabled() {
  return (
    <Textarea
      placeholder="Type your message here."
      className="w-full max-w-75"
      disabled
    />
  )
}
