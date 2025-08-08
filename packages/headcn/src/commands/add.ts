import { prepareAdd } from "@/src/prepare/prepare-add"
import { addComponents } from "@/src/utils/add-components"
import { handleError } from "@/src/utils/handle-error"
import { logger } from "@/src/utils/logger"
import { Command } from "commander"

export const add = new Command()
  .name("add")
  .description("add a component to your project")
  .argument("[components...]", "names of the components")
  .action(async (components: string[]) => {
    if (!components.length) {
      logger.break()
      logger.error(
        "No components specified.\nUsage: headcn@latest add <component-name> [more-components...]"
      )
      logger.break()
      process.exit(1)
    }

    try {
      const { config } = await prepareAdd()
      // if there is no components.json
      if (!config) {
        logger.break()
        logger.error(
          "Cannot add components, no configuration detected.\n" +
            "Run headcn@latest init in your project first."
        )
        logger.break()
        process.exit(1)
      }

      await addComponents(components, config)
    } catch (err) {
      handleError(err)
    }
  })
