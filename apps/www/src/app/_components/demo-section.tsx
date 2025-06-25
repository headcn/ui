import ButtonDemo from "./_demo/button"
import CheckboxDemo from "./_demo/checkbox"
import ComboboxDemo from "./_demo/combobox"
import FieldsetDemo from "./_demo/fieldset"
import InputDemo from "./_demo/input"
import ListboxDemo from "./_demo/listbox"
import RadioGroupDemo from "./_demo/radio-group"
import SwitchDemo from "./_demo/switch"
import TextareaDemo from "./_demo/textarea"
import DemoCard, { type FormDemoItem } from "./demo-card"

const formsDemo: FormDemoItem[] = [
  { name: "Button", Component: <ButtonDemo /> },
  { name: "Checkbox", Component: <CheckboxDemo /> },
  { name: "Combobox", Component: <ComboboxDemo /> },
  { name: "Fieldset", Component: <FieldsetDemo /> },
  { name: "Input", Component: <InputDemo /> },
  { name: "Listbox", Component: <ListboxDemo /> },
  { name: "Radio Group", Component: <RadioGroupDemo /> },
  { name: "Switch", Component: <SwitchDemo /> },
  { name: "Textarea", Component: <TextareaDemo /> },
]

export default function DemoSection() {
  return (
    <div className="rounded-[2.5rem] bg-black/80 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-325">
        <span className="text-muted-foreground px-2 font-mono text-sm">
          FORMS
        </span>
        <div className="relative mt-4 grid gap-x-8 gap-y-10 px-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute inset-0 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: formsDemo.length }).map((_, idx) => (
              <div key={idx} className="relative h-64">
                <div className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y"></div>
              </div>
            ))}
          </div>
          {formsDemo.map((demo, idx) => (
            <DemoCard key={idx} {...demo} />
          ))}
        </div>
      </div>
    </div>
  )
}
