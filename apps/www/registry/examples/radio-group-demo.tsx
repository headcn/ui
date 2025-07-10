"use client"

import { Radio, RadioGroup } from "@/registry/ui/radio-group"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

interface Plan {
  name: string
  ram: string
  cpus: string
}

const plans: Plan[] = [
  { name: "Startup", ram: "12GB", cpus: "6 CPUs" },
  { name: "Business", ram: "16GB", cpus: "8 CPUs" },
  { name: "Enterprise", ram: "32GB", cpus: "12 CPUs" },
]

export default function RadioGroupDemo() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup<Plan>
      by="name"
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
      className="w-full max-w-75"
    >
      {plans.map((plan) => (
        <Radio
          key={plan.name}
          value={plan}
          className="data-checked:bg-accent flex cursor-pointer rounded-md p-3 transition"
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-foreground text-sm font-semibold">
                {plan.name}
              </p>
              <div className="flex gap-1.5 text-xs">
                <div>{plan.ram}</div>
                <div aria-hidden="true">&middot;</div>
                <div>{plan.cpus}</div>
              </div>
            </div>
            <CheckCircleIcon className="size-5 opacity-0 transition group-data-checked:opacity-100" />
          </div>
        </Radio>
      ))}
    </RadioGroup>
  )
}
