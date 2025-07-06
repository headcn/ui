import { Input } from "@/registry/ui/input"

export default function InputDisabled() {
  return (
    <Input type="email" placeholder="Email" className="max-w-75" disabled />
  )
}
