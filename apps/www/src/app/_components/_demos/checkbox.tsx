import { CheckIcon } from "@heroicons/react/16/solid"

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-accent grid size-5 place-items-center rounded">
        <CheckIcon className="text-muted-foreground size-4" />
      </div>
      <div className="bg-accent-foreground/25 h-2 w-20 rounded"></div>
    </div>
  )
}
