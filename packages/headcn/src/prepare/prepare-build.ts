import { buildOptionsSchema } from "@/src/commands/build"
import fs from "fs/promises"
import path from "path"
import { z } from "zod"

export async function prepareBuild(
  options: z.infer<typeof buildOptionsSchema>
) {
  const resolvedPaths: typeof options = {
    registryFile: path.resolve(process.cwd(), options.registryFile),
    outputDir: path.resolve(process.cwd(), options.outputDir),
  }

  try {
    await fs.access(resolvedPaths.registryFile)
  } catch {
    console.error(`${resolvedPaths.registryFile} does not exist`)
    process.exit(1)
  }

  // create output dir recursively
  await fs.mkdir(resolvedPaths.outputDir, { recursive: true })

  return {
    resolvedPaths,
  }
}
