import fs from "fs/promises"
import path from "path"
import { loadConfig } from "tsconfig-paths"
import { z } from "zod"
import { pathExists } from "./fs"
import { highlighter } from "./highlighter"
import { resolveTsImport } from "./resolve-ts-import"

export const rawConfigSchema = z.object({
  $schema: z.string().optional(),
  style: z.string(),
  rsc: z.coerce.boolean().default(true),
  tsx: z.coerce.boolean().default(true),
  tailwind: z.object({
    css: z.string(),
    prefix: z.string(),
  }),
  iconLibrary: z.string().optional(),
  aliases: z.object({
    components: z.string(),
    ui: z.string(),
    lib: z.string(),
  }),
})

export const configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    tailwindCss: z.string(),
    components: z.string(),
    ui: z.string(),
    lib: z.string(),
  }),
})

export type RawConfig = z.infer<typeof rawConfigSchema>
export type Config = z.infer<typeof configSchema>

/**
 * Function to get configuration object with resolves paths.
 * Pass raw config to resolve paths.
 *
 * @returns A promise which resolves to a nullable `Config` object.
 */
export async function getConfig(): Promise<Config | null> {
  const config = await getRawConfig()
  if (!config) return null

  // merge resolved paths
  return await resolveConfigPaths(config)
}

/**
 * Function that merges resolved paths with raw configuration.
 *
 * @param config Raw config which is parsed from config file.
 * @returns A promise which resolves to `Config` object.
 */
export async function resolveConfigPaths(config: RawConfig): Promise<Config> {
  const tsconfig = loadConfig()
  if (tsconfig.resultType === "failed") {
    throw new Error(
      `Failed to load ${config.tsx ? "tsconfig" : "jsconfig"}. ${tsconfig.message}`
    )
  }

  return configSchema.parse({
    ...config,
    resolvedPaths: {
      tailwindCss: path.resolve(config.tailwind.css),
      components: await resolveTsImport(config.aliases["components"], tsconfig),
      ui: await resolveTsImport(config.aliases["ui"], tsconfig),
      lib: await resolveTsImport(config.aliases["lib"], tsconfig),
    },
  })
}

/**
 * Function that returns raw configuration.
 * Tries to read configuration file (components.json) for raw config.
 *
 * @returns A promise which resolves to a nullable `RawConfig` object.
 */
export async function getRawConfig(): Promise<RawConfig | null> {
  try {
    const filePath = path.resolve("components.json")
    if (!(await pathExists(filePath))) {
      return null
    }

    const content = await fs.readFile(filePath, "utf8")
    const parsedContent = JSON.parse(content)
    return rawConfigSchema.parse(parsedContent)
  } catch (err) {
    throw new Error(
      `Invalid configuration found in ${highlighter.info("components.json")}.`
    )
  }
}
