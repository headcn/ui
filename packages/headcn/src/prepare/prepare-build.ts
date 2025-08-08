import { buildOptionsSchema } from "@/src/commands/build"
import { pathExists } from "@/src/utils/fs"
import { logger } from "@/src/utils/logger"
import fs from "fs/promises"
import path from "path"
import { z } from "zod"

interface ResolvedPaths {
  registryFile: string
  outputDir: string
}

/**
 * Function that should run before `build` command.
 * Run checks like:
 * * try to access registry file (registry.json).
 * * And creates outputDir in case it doesnt exist.
 *
 * @param options Type of `build` command parsed options.
 * @returns A promise which resolves to an object of resolved paths.
 */
export async function prepareBuild(
  options: z.infer<typeof buildOptionsSchema>
): Promise<{
  resolvedPaths: ResolvedPaths
}> {
  const resolvedPaths: ResolvedPaths = {
    registryFile: path.resolve(process.cwd(), options.registryFile),
    outputDir: path.resolve(process.cwd(), options.outputDir),
  }

  // make sure registry file exists (registry.json)
  if (!(await pathExists(resolvedPaths.registryFile))) {
    logger.error(`${resolvedPaths.registryFile} does not exist`)
    process.exit(1)
  }

  // create output dir recursively
  await fs.mkdir(resolvedPaths.outputDir, { recursive: true })

  return {
    resolvedPaths,
  }
}
