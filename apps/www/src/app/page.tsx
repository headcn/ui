import { Input } from "@/registry/ui/input"

export default function Page() {
  return (
    <div className="max-w-50">
      <Input placeholder="your@email.com" disabled />
    </div>
  )
}
