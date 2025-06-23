"use client"

import { useState } from "react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid"

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@/registry/ui/combobox"

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
]

export default function Example() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(people[1])

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="h-screen pt-20">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton>
            <ChevronDownIcon className="fill-muted-foreground group-data-hover:fill-foreground size-4 transition-colors" />
          </ComboboxButton>
        </div>
        <ComboboxOptions anchor="bottom" transition>
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              disabled={person.id === 1}
            >
              <span>{person.name}</span>
              <CheckIcon className="fill-muted-foreground invisible size-4 group-data-selected:visible" />
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}
