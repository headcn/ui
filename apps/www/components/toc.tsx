import { Heading } from "@/types/markdown"

interface TocProps {
  headings: Heading[]
}

export function Toc({ headings }: TocProps) {
  return (
    <ul className="flex flex-col gap-2">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className="text-muted-foreground hover:text-foreground w-max text-sm transition-colors"
            style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  )
}
