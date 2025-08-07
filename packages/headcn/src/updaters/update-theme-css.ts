import { getRegistryUrl } from "@/src/registry/api"
import { pathExists } from "@/src/utils/fs"
import { Config } from "@/src/utils/get-config"
import { highlighter } from "@/src/utils/highlighter"
import fs from "fs/promises"
import { Ora } from "ora"
import path from "path"
import prompts from "prompts"

export async function updateThemeCss(
  config: Config,
  updatingSpinner: Ora
): Promise<void> {
  const themeCssUrl = getRegistryUrl("theme.css")
  const themeCssPath = config.resolvedPaths.tailwindCss

  if (await pathExists(themeCssPath)) {
    updatingSpinner.stop()

    const { overwrite } = await prompts({
      type: "confirm",
      name: "overwrite",
      message: `The file ${highlighter.info(
        path.basename(themeCssPath)
      )} already exists. Would you like to overwrite?`,
      initial: false,
    })

    if (!overwrite) return
    updatingSpinner.start()
  }

  const res = await fetch(themeCssUrl)
  const themeCssContent = await res.text()

  await fs.mkdir(path.dirname(themeCssPath), { recursive: true })
  await fs.writeFile(themeCssPath, themeCssContent)
}
