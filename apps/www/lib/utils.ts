import { allDocs } from "@/.contentlayer/generated"
import { clsx, type ClassValue } from "clsx"
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

export function generateId(text: string): string {
  return text
    .normalize("NFKD") // normalize unicode
    .toLowerCase()
    .replace(/\p{Diacritic}/gu, "") // remove diacritics
    .replace(/\s+/g, "-") // spaces to hyphens
    .replace(/[^\w-]/g, "") // remove non-word chars
    .replace(/-+/g, "-") // collapse hyphens
    .replace(/^-|-$/g, "") // trim hyphens
}
