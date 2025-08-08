import { type Frameworks, FRAMEWORKS } from "@/src/utils/frameworks"
import { pathExists } from "@/src/utils/fs"
import { type RawConfig, rawConfigSchema } from "@/src/utils/get-config"
import fg from "fast-glob"
import fs from "fs/promises"
import path from "path"
import { loadConfig } from "tsconfig-paths"

export interface ProjectInfo {
  framework: Frameworks[string]
  isSrcDir: boolean
  isRSC: boolean
  isTsx: boolean
  twCssFile: string | null
  aliasPrefix: string | null
}

const PROJECT_SHARED_IGNORE = [
  "**/node_modules/**",
  ".next",
  "public",
  "dist",
  "build",
]

/**
 * Function that returns informations about current working project directory.
 * Includes infos such as- is src directory, is typescript project, tailwind file location
 * and typescript alias prefix.
 *
 * @returns A promise which resolves to an object that contains project information.
 */
export async function getProjectInfo(): Promise<ProjectInfo> {
  const [isSrcDir, isTsx, twCssFile, aliasPrefix] = await Promise.all([
    pathExists(path.resolve("src")),
    isTsProject(),
    getTwCssFile(),
    getAliasPrefix(),
  ])

  const projectInfo: ProjectInfo = {
    framework: FRAMEWORKS["manual"],
    isSrcDir,
    isRSC: false,
    isTsx,
    twCssFile,
    aliasPrefix,
  }

  // next.js
  if ((await fg.glob("next.config.*")).length) {
    const isUsingAppDir = await pathExists(
      path.resolve(`${isSrcDir ? "src/" : ""}app`)
    )

    projectInfo.framework = isUsingAppDir
      ? FRAMEWORKS["next-app"]
      : FRAMEWORKS["next-pages"]
    projectInfo.isRSC = isUsingAppDir
    return projectInfo
  }

  // manual
  return projectInfo
}

/**
 * Function that takes information about current project
 * and returns a resolved raw configuration.
 *
 * @param projectInfo A `ProjectInfo` object.
 * @returns A promise which resolves to raw configuration.
 */
export async function getProjectConfig(
  projectInfo: ProjectInfo
): Promise<RawConfig> {
  return rawConfigSchema.parse({
    $schema: "https://ui.headcn.site/schema.json",
    rsc: projectInfo.isRSC,
    tsx: projectInfo.isTsx,
    style: "default",
    tailwind: {
      css: projectInfo.twCssFile,
      prefix: "",
    },
    iconLibrary: "@heroicons/react",
    aliases: {
      components: `${projectInfo.aliasPrefix}/components`,
      ui: `${projectInfo.aliasPrefix}/components/ui`,
      lib: `${projectInfo.aliasPrefix}/lib`,
    },
  })
}

/**
 * Function that checks if the current working directory has typescript
 * installed and configured properly.
 *
 * @returns A promise which resolves to a boolean value.
 */
async function isTsProject(): Promise<boolean> {
  const tsconfigFiles = await fg.glob("tsconfig.*", {
    deep: 1,
    ignore: PROJECT_SHARED_IGNORE,
  })

  return tsconfigFiles.length > 0
}

/**
 * Function that returns the path of tailwind css file.
 * Iterates through project files and search for css or scss files containing
 * tailwind import references.
 *
 * @returns A promise which resolves to a nullable path of tailwind css file.
 */
async function getTwCssFile(): Promise<string | null> {
  const files = await fg.glob(["**/*.css", "**/*.scss"], {
    deep: 5,
    ignore: PROJECT_SHARED_IGNORE,
  })

  if (!files.length) {
    return null
  }

  for (const file of files) {
    const content = await fs.readFile(path.resolve(file), "utf8")
    if (
      content.includes(`@import "tailwindcss"`) ||
      content.includes(`@import 'tailwindcss'`)
    ) {
      return file
    }
  }

  return null
}

/**
 * Function that returns a top-level typescript alias.
 * Iterates through tsconfig file paths and returns top configured alias.
 *
 * @returns A promise which resolves to a nullable typescript alias.
 */
async function getAliasPrefix(): Promise<string | null> {
  const tsconfig = loadConfig()

  if (tsconfig.resultType === "failed" || !Object.keys(tsconfig.paths).length) {
    return null
  }

  for (const [alias, paths] of Object.entries(tsconfig.paths)) {
    if (
      paths.includes("./*") ||
      paths.includes("./src/*") ||
      paths.includes("./app/*")
    ) {
      return alias.replace(/\/\*$/, "") ?? null
    }
  }

  return null
}
