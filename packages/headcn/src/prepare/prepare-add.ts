import { pathExists } from "@/src/utils/fs"
import { Config, getConfig } from "@/src/utils/get-config"
import { highlighter } from "@/src/utils/highlighter"
import { logger } from "@/src/utils/logger"
import path from "path"

export async function prepareAdd(): Promise<{ config: Config | null }> {
  if (
    !(await pathExists(process.cwd())) ||
    !(await pathExists(path.resolve("package.json")))
  ) {
    logger.break()
    logger.error(
      `Invalid project directory: either the current directory does not exist or ${highlighter.info("package.json")} is missing.\n` +
        `Please run this command inside a valid project root.`
    )
    logger.break()
    process.exit(1)
  }

  try {
    const config = await getConfig()
    return {
      config,
    }
  } catch (err) {
    logger.break()
    logger.error(
      `An invalid ${highlighter.info(
        "components.json"
      )} file was found.\nBefore you can add components, you must create a valid ${highlighter.info(
        "components.json"
      )} file by running the ${highlighter.info("init")} command.`
    )
    logger.break()
    process.exit(1)
  }
}
