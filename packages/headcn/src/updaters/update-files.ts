import { fetchRegistry } from "@/src/registry/api"
import { RegistryItemFile } from "@/src/registry/schema"
import { pathExists } from "@/src/utils/fs"
import { Config } from "@/src/utils/get-config"
import { highlighter } from "@/src/utils/highlighter"
import { spinner } from "@/src/utils/spinner"
import fs from "fs/promises"
import { Ora } from "ora"
import path from "path"
import prompts from "prompts"

// avoid duplicate writes
const written = new Set<string>()

export async function updateFiles(
  components: string[],
  config: Config
): Promise<{ deps: string[] }> {
  const updatingSpinner = spinner("Updating files.").start()

  const result = await updateFilesInternal(components, config, updatingSpinner)
  updatingSpinner.succeed()
  return result
}

async function updateFilesInternal(
  components: string[],
  config: Config,
  updatingSpinner: Ora
): Promise<{ deps: string[] }> {
  const allRegistries = await fetchRegistry(
    components.map((c) => `components/${c}.json`)
  )

  const depsToInstall = new Set<string>()
  const registryDepsToInstall = new Set<string>()

  for (const registry of allRegistries) {
    if (!registry) continue

    if (registry.files && registry.files.length) {
      for (const file of registry.files) {
        if (!file.content || written.has(file.path)) continue

        let filePath = resolveFilePath(file, config)
        if (!filePath) continue

        if (!config.tsx) {
          filePath = filePath.replace(/\.tsx?$/, (match) =>
            match === ".tsx" ? ".jsx" : ".js"
          )
        }

        const fileName = path.basename(file.path)
        const filePathExists = await pathExists(filePath)

        if (filePathExists) {
          updatingSpinner.stop()

          const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            message: `The file ${highlighter.info(
              fileName
            )} already exists. Would you like to overwrite?`,
            initial: false,
          })

          if (!overwrite) continue
          updatingSpinner.start()
        }

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
    const { deps } = await updateFilesInternal(
      [...registryDepsToInstall],
      config,
      updatingSpinner
    )
    // recursively update and add deps
    deps.forEach((dep) => depsToInstall.add(dep))
  }

  return {
    deps: [...depsToInstall],
  }
}

function resolveFilePath(file: RegistryItemFile, config: Config) {
  const targetDir = resolveTargetDir(file, config)
  const resolvedFilePath = resolveNestedFilePath(file.path, targetDir)

  return path.join(targetDir, resolvedFilePath)
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
