import Mdx from "@/components/mdx-components"
import { Toc } from "@/components/toc"
import { getDocFromSlug } from "@/lib/utils"
import { Button } from "@/registry/ui/button"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import ListForms from "./_components/list-forms"

interface DocPageProps {
  params: Promise<{ slug?: string[] }>
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

  return (
    <div className="rounded-[2.5rem] bg-black/80 px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-325 grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="sticky top-4 flex flex-col gap-4 p-4">
            <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              forms
            </span>
            <ListForms slug={slug} />
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{doc.title}</h1>
            <p className="text-muted-foreground">{doc.description}</p>
            <div className="flex items-center gap-2">
              {doc.links && doc.links.doc && (
                <a href={doc.links.doc} target="_blank" rel="noreferrer">
                  <Button
                    size={"xs"}
                    variant={"secondary"}
                    className="cursor-pointer"
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
                    className="cursor-pointer"
                  >
                    API Reference
                    <ArrowUpRightIcon className="text-muted-foreground size-3.5" />
                  </Button>
                </a>
              )}
            </div>
          </div>
          <Mdx code={doc.body.code} />
        </div>
        <div className="col-span-3">
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
