import { fetchRegistry } from "@/src/registry/api"
import fs from "fs/promises"
import path from "path"
import { RegistryItemFile } from "../registry"
import { Config } from "./get-config"

// avoid duplicate writes
const written = new Set<string>()

export async function addComponents(
  components: string[],
  config: Config
): Promise<{
  deps: string[]
}> {
  const allRegistries = await fetchRegistry(
    components.map((c) => `components/${c}.json`)
  )

  const depsToInstall = new Set<string>()
  const registryDepsToInstall = new Set<string>()

  for (const registry of allRegistries) {
    if (!registry) continue

    if (registry.files) {
      for (const file of registry.files) {
        if (!file.content || written.has(file.path)) continue

        const targetDir = resolveTargetDir(file, config)
        const resolvedFilePath = resolveNestedFilePath(file.path, targetDir)
        const filePath = path.join(targetDir, resolvedFilePath)

        await fs.mkdir(path.dirname(filePath), { recursive: true })
        await fs.writeFile(filePath, file.content)

        written.add(file.path)
      }
    }

    registry.depends?.forEach((dep) => depsToInstall.add(dep))
    registry.registryDepends?.forEach((regDep) =>
      registryDepsToInstall.add(regDep)
    )
  }

  if (registryDepsToInstall.size) {
    const { deps } = await addComponents([...registryDepsToInstall], config)
    deps.forEach((dep) => depsToInstall.add(dep))
  }

  return {
    deps: [...depsToInstall],
  }
}

function resolveTargetDir(file: RegistryItemFile, config: Config): string {
  if (file.type === "registry:ui") {
    return config.resolvedPaths.ui
  } else if (file.type === "registry:lib") {
    return config.resolvedPaths.lib
  } else {
    return config.resolvedPaths.components
  }
}

function resolveNestedFilePath(filePath: string, targetDir: string): string {
  const filePathSegments = filePath.split("/")

  const lastTargetDirSegment = path.basename(targetDir)
  const commonSegmentIndex = filePathSegments.findIndex(
    (segment) => segment === lastTargetDirSegment
  )

  // if common dir is not found, return the filename
  if (commonSegmentIndex === -1) {
    return filePathSegments.at(-1) as string
  }

  // return everything after the common dir
  return filePathSegments.slice(commonSegmentIndex + 1).join("/")
}
