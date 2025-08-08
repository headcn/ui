import { REGISTRY_URL } from "./constants"
import { type RegistryItem, registryItemSchema } from "./schema"

/**
 * Function that fetches multiple registry items from the cloud registry (`ui.headcn.site/r/`).
 *
 * @param paths An array of paths of the registry item to fetch.
 * @returns A promise which resolves to a list of fetched registry item or null.
 */
export async function fetchRegistry(
  paths: string[]
): Promise<(RegistryItem | null)[]> {
  return await Promise.all(
    paths.map(async (path) => {
      try {
        const registryUrl = getRegistryUrl(path)
        const resp = await fetch(registryUrl)
        return registryItemSchema.parse(await resp.json())
      } catch {
        return null
      }
    })
  )
}

/**
 * Function that returns concated version of the www url and given path.
 *
 * @param path Path of the registry item.
 * @returns Absolute url.
 */
export function getRegistryUrl(path: string): string {
  return `${REGISTRY_URL}/${path}`
}
