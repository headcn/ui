import { TagIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { Icons } from "./icons"

export default function SiteHeader() {
  return (
    <header className="relative px-6">
      <div className="mx-auto flex max-w-325 items-center justify-between gap-4 px-2 py-6">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-center gap-3">
            <Icons.logo className="size-6" />
            <h2 className="font-brand hidden text-base sm:block">headcn/ui</h2>
          </Link>
          <span className="bg-accent-foreground/10 text-accent-foreground inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-xs font-medium">
            v0.1
            <TagIcon className="text-muted-foreground size-3.5" />
          </span>
        </div>
        <a href="https://github.com/headcn/ui" target="_blank" rel="noreferrer">
          <Icons.github className="fill-foreground size-6" />
        </a>
      </div>
    </header>
  )
}
