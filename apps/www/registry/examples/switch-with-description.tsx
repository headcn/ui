"use client"

import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Switch } from "@/registry/ui/switch"
import { useState } from "react"

export default function SwitchWithDescription() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center gap-3">
      <Switch checked={enabled} onChange={setEnabled} />
      <div>
        <Label>Airplane mode</Label>
        <Description>
          Disable all network connections on this device.
        </Description>
      </div>
    </Field>
  )
}
