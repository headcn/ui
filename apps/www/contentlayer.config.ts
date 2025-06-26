import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
// import rehypeSlug from 'rehype-slug'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath },
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
  contentDirPath: 'content',
  documentTypes: [Doc],
  // mdx: {
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [rehypeAutolinkHeadings, { behavior: 'wrap' }],
  //   ],
  // },
})
