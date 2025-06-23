"use client"

import { useState } from "react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid"

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@/registry/ui/listbox"

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
]

export default function Page() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className="h-dvh w-50 pt-20">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <ListboxButton>
          {selectedPerson.name}
          <ChevronDownIcon className="fill-muted-foreground absolute right-3 size-4" />
        </ListboxButton>
        <ListboxOptions anchor="bottom" transition>
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              disabled={person.id === 1}
            >
              {person.name}
              <CheckIcon className="fill-muted-foreground invisible size-4 group-data-selected:visible" />
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}
