import { fetchRegistry } from "@/src/registry/api"
import { type RegistryItemFile } from "@/src/registry/schema"
import { pathExists } from "@/src/utils/fs"
import { type Config } from "@/src/utils/get-config"
import { highlighter } from "@/src/utils/highlighter"
import { spinner } from "@/src/utils/spinner"
import fs from "fs/promises"
import { type Ora } from "ora"
import path from "path"
import prompts from "prompts"
import { updateThemeCss } from "./update-theme-css"

// avoid duplicate writes
const written = new Set<string>()

/**
 * Function that add/updates components, calls internal function: updateFilesInternal.
 *
 * @param components Name of the components to add/update.
 * @param config Config object with resolved paths.
 * @returns A promise which resolves to an object of dependencies to install.
 */
export async function updateFiles(
  components: string[],
  config: Config
): Promise<{ deps: string[] }> {
  const updatingSpinner = spinner("Updating files.").start()

  const result = await updateFilesInternal(components, config, updatingSpinner)
  if (components.includes("index")) {
    await updateThemeCss(config, updatingSpinner)
  }

  updatingSpinner.succeed()
  return result
}

/**
 * Internal function that calls recursively to add/update nested components
 * and dependencies as well.
 *
 * @param components Name of the components to add/update.
 * @param config Config object with resolved paths.
 * @param updatingSpinner Instance of the spinner from the parent function.
 * @returns A promise which resolves to an object of dependencies to install.
 */
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
        // no duplicate writes
        if (!file.content || written.has(file.path)) continue

        let filePath = resolveFilePath(file, config)
        if (!filePath) continue

        // update file extension based on the config
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

        // make sure component directory exists to prevent write errors
        await fs.mkdir(path.dirname(filePath), { recursive: true })
        await fs.writeFile(filePath, file.content)
        // mark as written
        written.add(file.path)
      }
    }

    registry.depends?.forEach((dep) => depsToInstall.add(dep))
    registry.registryDepends?.forEach((regDep) =>
      registryDepsToInstall.add(regDep)
    )
  }

  if (registryDepsToInstall.size) {
    // recursively add/update deps of nested components
    const { deps } = await updateFilesInternal(
      [...registryDepsToInstall],
      config,
      updatingSpinner
    )
    // add nested dependencies
    deps.forEach((dep) => depsToInstall.add(dep))
  }

  return {
    deps: [...depsToInstall],
  }
}

/**
 * Function that returns a joined path of a registry item file object.
 * Joins target directory and common path from file.path.
 *
 * @param file Registry item file object.
 * @param config Config object with resolved paths.
 * @returns Joined path of target directory and common path from `file.path`.
 */
function resolveFilePath(file: RegistryItemFile, config: Config): string {
  const targetDir = resolveTargetDir(file, config)
  const resolvedFilePath = resolveNestedFilePath(file.path, targetDir)

  return path.join(targetDir, resolvedFilePath)
}

/**
 * Function that returns a resolved target directory of a registry item
 * based on its type.
 *
 * @param file Registry item file object.
 * @param config Config object with resolved paths.
 * @returns Resolved path based on the `file.type`.
 */
function resolveTargetDir(file: RegistryItemFile, config: Config): string {
  if (file.type === "registry:ui") {
    return config.resolvedPaths.ui
  } else if (file.type === "registry:lib") {
    return config.resolvedPaths.lib
  } else {
    return config.resolvedPaths.components
  }
}

/**
 * Function that returns valid base of file path.
 * Gets common index by matching file path segments with last path of target dir
 * and returns everything after that common segment from the file path.
 *
 * @param filePath File path of the registry item.
 * @param targetDir Resolved target directory of registry item.
 * @returns File path that matches with the target directory.
 */
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
