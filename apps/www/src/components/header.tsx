import Image from "next/image"
import Link from "next/link"
import { TagIcon } from "@heroicons/react/16/solid"

import GitHubIcon from "@/components/icons/github"

export default function Header() {
  return (
    <header className="relative border-b px-6">
      <div className="mx-auto flex max-w-325 items-center justify-between gap-4 px-2 py-6">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/ui/media/logo.png"}
              alt="logo"
              width={30}
              height={30}
            />
            <h2 className="hidden text-2xl font-semibold sm:block">
              Headcn<span className="font-light">UI</span>
            </h2>
          </Link>
          <span className="bg-accent-foreground/10 text-accent-foreground inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-xs font-medium">
            v0.1
            <TagIcon className="text-muted-foreground size-3.5" />
          </span>
        </div>
        <a href="https://github.com/headcn/ui" target="_blank" rel="noreferrer">
          <GitHubIcon className="fill-foreground size-6" />
        </a>
      </div>
    </header>
  )
}
