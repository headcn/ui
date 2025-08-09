import { allDocs } from "@/.contentlayer/generated"
import { Toc } from "@/components/toc"
import { getDocFromSlug } from "@/lib/utils"
import Mdx from "@/mdx-components"
import { Button } from "@/registry/ui/button"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/16/solid"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ListForms from "./_components/list-forms"
import ListGetStarted from "./_components/list-get-started"

interface DocPageProps {
  params: Promise<{ slug?: string[] }>
}

export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slug.split("/"),
  }))
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = await getDocFromSlug(slug)

  return {
    title: doc?.title,
    description: doc?.description,
  }
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  const doc = await getDocFromSlug(slug)

  if (!doc) notFound()

  const currentDocIndex = allDocs.findIndex((d) => d.slug === doc.slug)
  const prevDoc = currentDocIndex > 0 ? allDocs[currentDocIndex - 1] : null
  const nextDoc =
    currentDocIndex < allDocs.length - 1 ? allDocs[currentDocIndex + 1] : null

  return (
    <div className="rounded-[2.5rem] bg-black/80 px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-325 grid-cols-12 gap-4">
        <div className="col-span-3 hidden md:block">
          <div className="sticky top-4 flex flex-col gap-4 p-4">
            <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              get started
            </span>
            <ListGetStarted slug={slug} />
            <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              forms
            </span>
            <ListForms slug={slug} />
          </div>
        </div>
        <div className="col-span-full p-4 md:col-span-9 xl:col-span-6">
          <div className="mx-auto flex max-w-155 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{doc.title}</h1>
              <p className="text-muted-foreground">{doc.description}</p>
              <div className="flex items-center gap-2">
                {doc.links && doc.links.doc && (
                  <a href={doc.links.doc} target="_blank" rel="noreferrer">
                    <Button
                      size={"xs"}
                      variant={"secondary"}
                      className="cursor-pointer font-mono uppercase"
                    >
                      Docs
                      <ArrowUpRightIcon className="text-muted-foreground size-3.5" />
                    </Button>
                  </a>
                )}
                {doc.links && doc.links.api && (
                  <a href={doc.links.api} target="_blank" rel="noreferrer">
                    <Button
                      size={"xs"}
                      variant={"secondary"}
                      className="cursor-pointer font-mono uppercase"
                    >
                      API Reference
                      <ArrowUpRightIcon className="text-muted-foreground size-3.5" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
            <Mdx code={doc.body.code} />
            {(prevDoc || nextDoc) && (
              <div className="flex items-center gap-2">
                {prevDoc && (
                  <Link href={`/docs/${prevDoc.slug}`}>
                    <Button
                      variant={"ghost"}
                      className="cursor-pointer font-mono uppercase"
                    >
                      <ArrowLeftIcon className="text-muted-foreground size-4" />
                      {prevDoc.title}
                    </Button>
                  </Link>
                )}
                {nextDoc && (
                  <Link href={`/docs/${nextDoc.slug}`} className="ml-auto">
                    <Button
                      variant={"ghost"}
                      className="cursor-pointer font-mono uppercase"
                    >
                      {nextDoc.title}
                      <ArrowRightIcon className="text-muted-foreground size-4" />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3 hidden xl:block">
          <div className="sticky top-4 flex flex-col gap-4 p-4">
            <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              on this page
            </span>
            <Toc headings={doc.headings} />
          </div>
        </div>
      </div>
    </div>
  )
}
