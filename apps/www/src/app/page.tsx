import { ChevronDownIcon } from "@heroicons/react/16/solid"

import { Select } from "@/registry/ui/select"

export default function Example() {
  return (
    <div className="relative">
      <Select>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
      <ChevronDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
        aria-hidden="true"
      />
    </div>
  )
}
