"use client"

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@/registry/ui/listbox"
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

export default function ListboxDemo() {
  const [selected, setSelected] = useState<number>(people[0].id)
  const selectedPerson = people.find((p) => p.id === selected)

  return (
    <Listbox<Person>
      value={selectedPerson}
      onChange={(value) => value && setSelected(value.id)}
      __demoMode
    >
      <ListboxButton className="max-w-75">
        {selectedPerson?.name}
        <ChevronDownIcon className="fill-muted-foreground group-data-hover:fill-foreground size-4" />
      </ListboxButton>

      <ListboxOptions anchor="bottom" transition>
        {people.map((person) => (
          <ListboxOption<Person> key={person.id} value={person}>
            <div className="text-foreground text-sm/6">{person.name}</div>
            <CheckIcon className="fill-foreground invisible size-4 group-data-selected:visible" />
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
