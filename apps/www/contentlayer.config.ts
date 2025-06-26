import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files"
// import rehypeSlug from 'rehype-slug'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

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
    // headings: {
    //   type: 'json',
    //   resolve: async (doc) => {
    //     const headings = require('rehype-collect-headings').collectHeadings(doc.body.raw)
    //     return headings
    //   }
    // }
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  // mdx: {
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [rehypeAutolinkHeadings, { behavior: 'wrap' }],
  //   ],
  // },
})
