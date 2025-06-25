import Link from "next/link"

import ButtonDemo from "./_demos/button"
import CheckboxDemo from "./_demos/checkbox"
import ComboboxDemo from "./_demos/combobox"
import FieldsetDemo from "./_demos/fieldset"
import InputDemo from "./_demos/input"
import ListboxDemo from "./_demos/listbox"
import RadioGroupDemo from "./_demos/radio-group"
import SwitchDemo from "./_demos/switch"
import TextareaDemo from "./_demos/textarea"

const formsDemo: {
  name: string
  slug: string
  Component: React.JSX.Element
}[] = [
  {
    name: "Button",
    slug: "button",
    Component: <ButtonDemo />,
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    Component: <CheckboxDemo />,
  },
  {
    name: "Combobox",
    slug: "combobox",
    Component: <ComboboxDemo />,
  },
  {
    name: "Fieldset",
    slug: "fieldset",
    Component: <FieldsetDemo />,
  },
  {
    name: "Input",
    slug: "input",
    Component: <InputDemo />,
  },
  {
    name: "Listbox",
    slug: "listbox",
    Component: <ListboxDemo />,
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    Component: <RadioGroupDemo />,
  },
  {
    name: "Switch",
    slug: "switch",
    Component: <SwitchDemo />,
  },
  {
    name: "Textarea",
    slug: "textarea",
    Component: <TextareaDemo />,
  },
]

export default function DemoSection() {
  return (
    <div className="mb-20">
      <div className="rounded-[2.5rem] bg-black/80 px-6 py-12">
        <div className="mx-auto max-w-325">
          <span className="text-muted-foreground px-2 font-mono text-sm">
            FORMS
          </span>
          <div className="relative mt-4 grid grid-cols-3 gap-x-8 gap-y-10 px-2">
            <div className="pointer-events-none absolute inset-0 grid grid-cols-3 gap-y-10">
              {Array.from({ length: formsDemo.length }).map((_, idx) => (
                <div key={idx} className="relative h-64">
                  <div className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y"></div>
                </div>
              ))}
            </div>
            {formsDemo.map((demo, idx) => (
              <div key={idx} className="group relative flex flex-col gap-4">
                <Link
                  href={`/docs/components/${demo.slug}`}
                  className="absolute inset-0 z-10"
                />
                <div className="bg-secondary/25 group-hover:bg-secondary/35 relative grid h-64 place-items-center transition-colors">
                  <div className="absolute inset-0 -z-10 bg-[url(/ui/media/bg-noise.png)] opacity-10"></div>
                  {demo.Component}
                </div>
                <span className="text-sm font-semibold">{demo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
