import { allDocs, Doc } from "@/.contentlayer/generated"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ListDocsProps {
  slug?: string[]
  filterFn: (doc: Doc) => boolean
}

function transformDocTitle(title: string): string {
  const matches: Record<string, string> = {
    headcn: "CLI",
  }

  if (title in matches) return matches[title]
  return title
}

export default function ListDocs({ slug, filterFn }: ListDocsProps) {
  return (
    <ul className="flex flex-col gap-2">
      {allDocs.filter(filterFn).map((item) => {
        const isActive = (slug ? slug.join("/") : "") === item.slug
        return (
          <li key={item._id}>
            <Link
              href={`/docs/${item.slug}`}
              className={cn(
                "w-max text-sm transition-colors",
                isActive
                  ? "font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {transformDocTitle(item.title)}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
