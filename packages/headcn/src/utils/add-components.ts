import { fetchRegistry } from "@/src/registry/api"

export async function addComponents(components: string[]): Promise<{
  deps: string[]
}> {
  const allRegistries = await fetchRegistry(
    components.map((c) => `components/${c}.json`)
  )

  const depsToInstall = new Set<string>()
  const registryDepsToInstall = new Set<string>()

  for (const registry of allRegistries) {
    if (!registry) continue

    registry.depends?.forEach((dep) => depsToInstall.add(dep))
    registry.registryDepends?.forEach((regDep) =>
      registryDepsToInstall.add(regDep)
    )
  }

  if (registryDepsToInstall.size) {
    const { deps } = await addComponents([...registryDepsToInstall])
    deps.forEach((dep) => depsToInstall.add(dep))
  }

  return {
    deps: [...depsToInstall],
  }
}
