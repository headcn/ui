import { Heading } from "@/types/markdown"
import { fromMarkdown } from "mdast-util-from-markdown"
import { toString } from "mdast-util-to-string"
import { visit } from "unist-util-visit"
import { generateId } from "./utils"

export function getHeadings(md: string) {
  const headings: Heading[] = []
  const tree = fromMarkdown(md)

  visit(tree, "heading", (node) => {
    const text = toString(node)
    const id = generateId(text)

    headings.push({
      level: node.depth,
      text,
      id: String(id),
    })
  })

  return headings
}
