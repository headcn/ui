import { getRegistryUrl } from "@/src/registry/api"
import { type Config } from "@/src/utils/get-config"
import fs from "fs/promises"

export async function updateThemeCss(config: Config) {
  const url = getRegistryUrl("theme.css")

  const res = await fetch(url)
  const css = await res.text()
  await fs.writeFile(config.resolvedPaths.tailwindCss, css)
}
