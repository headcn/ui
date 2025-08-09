import { allDocs } from "@/.contentlayer/generated"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ListGetStartedProps {
  slug?: string[]
}

function transformDocTitle(title: string): string {
  const matches: Record<string, string> = {
    headcn: "CLI",
  }

  if (title in matches) return matches[title]
  return title
}

export default function ListGetStarted({ slug }: ListGetStartedProps) {
  return (
    <ul className="flex flex-col gap-2">
      {allDocs
        // only include top-level docs and not categorized
        .filter((doc) => doc.catetory === undefined && !doc.slug.includes("/"))
        .map((item) => {
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
