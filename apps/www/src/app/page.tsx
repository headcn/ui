"use client"

import { useState } from "react"

import { Field } from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Radio, RadioGroup } from "@/registry/ui/radio-group"

const plans = ["Startup", "Business", "Enterprise"]

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
    >
      {plans.map((plan) => (
        <Field key={plan} className="flex items-center gap-2">
          <Radio value={plan}>
            <span className="bg-accent-foreground invisible size-2 rounded-full group-data-checked:visible" />
          </Radio>
          <Label>{plan}</Label>
        </Field>
      ))}
    </RadioGroup>
  )
}
