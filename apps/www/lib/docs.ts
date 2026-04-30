import { allDocs } from "@/.contentlayer/generated"

export async function getDocFromSlug(slug?: string[]) {
  const docSlug = slug ? slug.join("/") : ""
  const doc = allDocs.find((doc) => doc.slug === docSlug)

  if (!doc) return null
  return doc
}
