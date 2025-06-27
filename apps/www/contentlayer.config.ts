import { getHeadings } from "@/lib/markdown"
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { visit } from "unist-util-visit"

const LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: { type: "string" },
    api: { type: "string" },
  },
}))

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    links: { type: "nested", of: LinksProperties },
    catetory: { type: "enum", options: ["component", "form"] },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^docs\/?/, ""),
    },
    headings: {
      type: "json",
      resolve: async (doc) => getHeadings(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        // store raw code before rehypePrettyCode transforms dom
        visit(tree, "element", (node) => {
          if (node?.tagName === "pre") {
            const [codeEl] = node.children
            if (codeEl.tagName !== "code") return

            node.__rawString__ = codeEl.children?.[0]?.value ?? ""
          }
        })
      },
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
      () => (tree) => {
        // attach metada to pre element
        visit(tree, "element", (node) => {
          if (
            node?.tagName === "figure" &&
            "data-rehype-pretty-code-figure" in node.properties
          ) {
            const preElement = node.children.at(-1)
            if (preElement.tagName !== "pre") {
              return
            }

            preElement.properties["__rawString__"] = node.__rawString__
          }
        })
      },
    ],
  },
})
