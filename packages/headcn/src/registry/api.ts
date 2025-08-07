import { REGISTRY_URL } from "./constants"
import { type RegistryItem, registryItemSchema } from "./schema"

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

function getRegistryUrl(path: string): string {
  return `${REGISTRY_URL}/${path}`
}
