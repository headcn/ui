import { prepareInit } from "@/src/prepare/prepare-init"
import { addComponents } from "@/src/utils/add-components"
import { resolveConfigPaths } from "@/src/utils/get-config"
import { getProjectConfig } from "@/src/utils/get-project-info"
import { handleError } from "@/src/utils/handle-error"
import { highlighter } from "@/src/utils/highlighter"
import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import { Command } from "commander"
import fs from "fs/promises"
import path from "path"
import prompts from "prompts"

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .action(async () => {
    try {
      const { projectInfo } = await prepareInit()
      const config = await getProjectConfig(projectInfo)

      const { proceed } = await prompts({
        type: "confirm",
        name: "proceed",
        message: `Write configuration to ${highlighter.info(
          "components.json"
        )}. Proceed?`,
        initial: true,
      })

      if (!proceed) {
        process.exit(0)
      }

      const componentSpinner = spinner(`Writing components.json.`).start()
      const targetPath = path.resolve("components.json")
      await fs.writeFile(targetPath, JSON.stringify(config, null, 2))
      componentSpinner.succeed()

      const resolvedConfig = await resolveConfigPaths(config)
      await addComponents(["index"], resolvedConfig)

      logger.break()
      logger.log(
        `${highlighter.success(
          "Success!"
        )} Project initialization completed.\nYou may now add components.`
      )
      logger.break()
    } catch (err) {
      handleError(err)
    }
  })
