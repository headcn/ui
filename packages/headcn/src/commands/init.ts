import { getProjectInfo } from "@/src/utils/get-project-info"
import { Command } from "commander"
import prompts from "prompts"

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .action(async () => {
    const projectInfo = await getProjectInfo()
    console.log(projectInfo)
    // const options = promptForConfig()
  })

async function promptForConfig() {
  const options = await prompts([
    {
      type: "toggle",
      name: "typescript",
      message: "Would you like to use TypeScript (recommended)?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
  ])
}
