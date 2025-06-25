import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid"

export default function ComboboxDemo() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-accent/50 text-accent-foreground flex h-9 w-50 items-center justify-between rounded-md px-3 text-sm font-medium">
        <div className="flex items-center gap-1">
          <div className="bg-accent-foreground/25 h-2 w-5 rounded"></div>
          <span className="text-muted-foreground">|</span>
        </div>
        <ChevronDownIcon className="text-muted-foreground size-4" />
      </div>
      <div className="bg-accent/50 rounded-lg border p-1">
        <div className="bg-accent flex h-9 items-center justify-between rounded-md px-3 text-sm">
          <div className="bg-accent-foreground/25 h-2 w-10 rounded"></div>
          <CheckIcon className="text-muted-foreground size-4" />
        </div>
        <div className="flex h-9 items-center px-3 text-sm">
          <div className="bg-accent-foreground/25 h-2 w-12.5 rounded"></div>
        </div>
        <div className="flex h-9 items-center px-3 text-sm">
          <div className="bg-accent-foreground/25 h-2 w-7.5 rounded"></div>
        </div>
      </div>
    </div>
  )
}
