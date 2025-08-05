import { prepareInit } from "@/src/prepare/prepare-init"
import {
  getProjectConfig,
  getProjectInfo,
  ProjectInfo,
} from "@/src/utils/get-project-info"
import { highlighter } from "@/src/utils/highlighter"
import { spinner } from "@/src/utils/spinner"
import { Command } from "commander"
import fs from "fs/promises"
import path from "path"
import prompts from "prompts"

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .action(async () => {
    let projectInfo: ProjectInfo

    const prepare = await prepareInit()
    if (prepare.projectInfo) {
      projectInfo = prepare.projectInfo
    } else {
      projectInfo = await getProjectInfo()
    }

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
    await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf-8")
    componentSpinner.succeed()
  })
