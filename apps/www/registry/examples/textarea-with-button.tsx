import { Button } from "@/registry/ui/button"
import { Textarea } from "@/registry/ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="flex w-full max-w-100 flex-col gap-2">
      <Textarea placeholder="Type your message here." className="w-full" />
      <Button>Send message</Button>
    </div>
  )
}
