import { Frameworks, FRAMEWORKS } from "@/src/configs/frameworks"
import { pathExists } from "@/src/utils/fs"
import { Config, configSchema } from "@/src/utils/get-config"
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

  // Next.js
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

  // Manual
  return projectInfo
}

export async function getProjectConfig(
  projectInfo: ProjectInfo
): Promise<Config | null> {
  return configSchema.parse({
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
      utils: `${projectInfo.aliasPrefix}/lib/utils`,
    },
  })
}

async function isTsProject(): Promise<boolean> {
  const tsconfigFiles = await fg.glob("tsconfig.*", {
    deep: 1,
    ignore: PROJECT_SHARED_IGNORE,
  })

  return tsconfigFiles.length > 0
}

async function getTwCssFile(): Promise<string | null> {
  const files = await fg.glob(["**/*.css", "**/*.scss"], {
    deep: 5,
    ignore: PROJECT_SHARED_IGNORE,
  })

  if (!files.length) {
    return null
  }

  for (const file of files) {
    const content = await fs.readFile(path.resolve(file), "utf-8")
    if (
      content.includes(`@import "tailwindcss"`) ||
      content.includes(`@import 'tailwindcss'`)
    ) {
      return file
    }
  }

  return null
}

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
