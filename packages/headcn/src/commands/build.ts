import { prepareBuild } from "@/src/prepare/prepare-build"
import { registryItemSchema, registrySchema } from "@/src/registry/schema"
import { handleError } from "@/src/utils/handle-error"
import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import { Command } from "commander"
import fs from "fs/promises"
import path from "path"
import { z } from "zod"

export const buildOptionsSchema = z.object({
  registryFile: z.string(),
  outputDir: z.string(),
})

export const build = new Command()
  .name("build")
  .description("build components for headcn registry.")
  .argument("[registry]", "path to registry.json file", "./registry.json")
  .option(
    "-o, --output <path>",
    "output directory for build files",
    "./public/r/components"
  )
  .action(async (registry: string, opts: unknown) => {
    try {
      await runBuild(registry, opts)
    } catch (err) {
      handleError(err)
    }
  })

async function runBuild(registry: string, opts: any) {
  const options = buildOptionsSchema.parse({
    registryFile: registry,
    outputDir: opts.output,
  })

  const { resolvedPaths } = await prepareBuild(options)
  const registryContent = await fs.readFile(resolvedPaths.registryFile, "utf-8")

  const result = registrySchema.safeParse(JSON.parse(registryContent))

  if (!result.success) {
    logger.error(`Invalid registry file at: ${resolvedPaths.registryFile}`)
    process.exit(1)
  }

  const buildSpinner = spinner("Building registry.")
  for (const registryItem of result.data.items) {
    if (!registryItem.files) continue

    buildSpinner.start(`Building ${registryItem.name}.`)

    for (const file of registryItem.files) {
      file["content"] = await fs.readFile(
        path.join(process.cwd(), file.path),
        "utf-8"
      )
    }

    const result = registryItemSchema.safeParse(registryItem)
    if (!result.success) {
      logger.error(`Invalid registry item: ${registryItem.name}`)
      continue
    }

    await fs.writeFile(
      path.join(resolvedPaths.outputDir, `${result.data.name}.json`),
      JSON.stringify(result.data, null, 2)
    )
  }

  // copy registry file to public (output dir)
  await fs.copyFile(
    resolvedPaths.registryFile,
    path.resolve(resolvedPaths.outputDir, "registry.json")
  )

  // bring back spinerrr
  buildSpinner.succeed("Building registry.")
}
