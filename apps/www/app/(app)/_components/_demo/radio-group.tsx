export default function RadioGroupDemo() {
  return (
    <div className="flex w-50 flex-col gap-2">
      <div className="bg-accent flex h-9 items-center gap-2 rounded-md px-3">
        <div className="bg-muted-foreground size-4 rounded-full border p-0.5">
          <div className="bg-accent size-full rounded-full"></div>
        </div>
        <div className="bg-accent-foreground/25 h-2 w-10 rounded"></div>
      </div>
      <div className="bg-accent/50 flex h-9 items-center gap-2 rounded-md px-3">
        <div className="size-4 rounded-full border p-0.5"></div>
        <div className="bg-accent-foreground/25 h-2 w-10 rounded"></div>
      </div>
      <div className="bg-accent/50 flex h-9 items-center gap-2 rounded-md px-3">
        <div className="size-4 rounded-full border p-0.5"></div>
        <div className="bg-accent-foreground/25 h-2 w-10 rounded"></div>
      </div>
    </div>
  )
}
