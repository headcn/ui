"use client"

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@/registry/ui/combobox"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

interface Person {
  id: number
  name: string
}

const people: Person[] = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
]

export default function ComboboxDemo() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<number>(people[0].id)

  const selectedPerson = people.find((p) => p.id === selected)
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox<Person>
      value={selectedPerson}
      onChange={(value) => value && setSelected(value.id)}
      onClose={() => setQuery("")}
      __demoMode
    >
      <div className="relative">
        <ComboboxInput<Person>
          displayValue={(person) => person.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton>
          <ChevronDownIcon className="fill-muted-foreground group-data-hover:fill-foreground size-4" />
        </ComboboxButton>
      </div>

      <ComboboxOptions anchor="bottom" transition>
        {filteredPeople.map((person) => (
          <ComboboxOption<Person> key={person.id} value={person}>
            <div className="text-foreground text-sm/6">{person.name}</div>
            <CheckIcon className="fill-foreground invisible size-4 group-data-selected:visible" />
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}
