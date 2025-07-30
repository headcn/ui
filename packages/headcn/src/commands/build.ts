import { Command } from "commander"
import fs from "fs/promises"
import path from "path"

export const build = new Command()
  .name("build")
  .description("build components for headcn registry.")
  .action(async () => {
    const registryPath = path.join(process.cwd(), "registry.json")
    console.log(await fs.readFile(registryPath))
  })
