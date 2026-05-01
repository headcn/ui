"use client"

import { Description } from "@/registry/ui/description"
import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Switch } from "@/registry/ui/switch"
import { useState } from "react"

export default function SwitchChoiceCard() {
  const [enabled, setEnabled] = useState(true)

  return (
    <Field>
      <Label className="bg-muted/50 has-[[data-checked]]:bg-muted flex cursor-pointer items-center justify-between gap-4 rounded-lg border p-4 shadow-sm transition-colors">
        <div className="space-y-0.5">
          <div className="text-base font-medium">Security emails</div>
          <Description>Receive emails about your account security.</Description>
        </div>
        <Switch checked={enabled} onChange={setEnabled} />
      </Label>
    </Field>
  )
}
