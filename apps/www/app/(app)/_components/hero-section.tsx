import { BeakerIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

import { Button } from "@/registry/ui/button"

export default function HeroSection() {
  return (
    <div className="relative z-10 px-4 sm:px-6">
      <div className="mx-auto max-w-325 px-2 py-15 sm:py-20">
        <span className="bg-accent-foreground/10 text-accent-foreground inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-xs font-medium uppercase">
          <BeakerIcon className="fill-muted-foreground size-4" /> In Development
        </span>
        <h1 className="my-6 text-2xl leading-tight font-bold md:text-[clamp(2rem,3.75vw,3rem)]">
          Beautifully styled, fully accessible UI components, designed to
          integrate with{" "}
          <a
            href="https://headlessui.com"
            target="_blank"
            rel="noreferrer"
            className="bg-foreground/10 hover:bg-foreground/15 rounded-full px-2 py-0.5 transition-colors"
          >
            @headlessui/react
          </a>
        </h1>
        <div className="flex items-center gap-2">
          <Link href={"/docs/installation"}>
            <Button className="cursor-pointer font-mono font-bold uppercase">
              Get Started
            </Button>
          </Link>
          <Link href={"/docs/components"}>
            <Button
              variant={"ghost"}
              className="cursor-pointer font-mono font-bold uppercase"
            >
              Components
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
