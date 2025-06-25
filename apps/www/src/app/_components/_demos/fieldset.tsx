import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function FieldsetDemo() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="bg-accent-foreground/25 h-3 w-20 rounded"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-accent-foreground/25 h-2 w-15 rounded"></div>
        <div className="bg-accent/50 h-9 w-50 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-accent-foreground/25 h-2 w-10 rounded"></div>
        <div className="bg-accent/50 flex h-9 w-50 items-center justify-between rounded-md px-3">
          <div className="bg-accent-foreground/25 h-2 w-15 rounded"></div>
          <ChevronDownIcon className="text-muted-foreground size-4" />
        </div>
      </div>
    </div>
  )
}
