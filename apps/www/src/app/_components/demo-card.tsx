import Link from "next/link"

export interface FormDemoItem {
  name: string
  Component: React.JSX.Element
}

export default function DemoCard({ name, Component }: FormDemoItem) {
  function sluggify(str: string): string {
    return str.replace(" ", "-").toLowerCase()
  }

  return (
    <div className="group relative flex flex-col gap-4">
      <Link
        href={`/docs/components/${sluggify(name)}`}
        className="absolute inset-0 z-10"
      />
      <div className="bg-secondary/25 group-hover:bg-secondary/35 relative grid h-64 place-items-center transition-colors">
        <div className="absolute inset-0 -z-10 bg-[url(/ui/media/bg-noise.png)] opacity-10"></div>
        {Component}
      </div>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  )
}
