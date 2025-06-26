import { clsx, type ClassValue } from "clsx"
import { allDocs } from "contentlayer/generated"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getDocFromSlug(slug?: string[]) {
  const docSlug = slug ? slug.join("/") : ""
  const doc = allDocs.find((doc) => doc.slug === docSlug)

  if (!doc) return null
  return doc
}
