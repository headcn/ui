import { getProjectInfo, ProjectInfo } from "@/src/utils/get-project-info"
import path from "path"
import { pathExists } from "../utils/fs"
import { highlighter } from "../utils/highlighter"
import { logger } from "../utils/logger"
import { spinner } from "../utils/spinner"

export async function prepareInit(): Promise<{
  projectInfo: ProjectInfo | null
}> {
  // check if project directory exists and not empty
  if (
    !(await pathExists(process.cwd())) ||
    !(await pathExists(path.resolve("package.json")))
  ) {
    logger.error(
      `Invalid project directory: either the current directory does not exist or ${highlighter.info("package.json")} is missing.\n` +
        `Please run this command inside a valid project root.`
    )
    return {
      projectInfo: null,
    }
  }

  const preparingSpinner = spinner("Preparing init.").start()
  if (await pathExists(path.resolve("components.json"))) {
    preparingSpinner.fail()
    logger.break()
    logger.error(
      `A ${highlighter.info(
        "components.json"
      )} file already exists.\nTo start over, remove the ${highlighter.info(
        "components.json"
      )} file and run ${highlighter.info("init")} again.`
    )
    logger.break()
    process.exit(1)
  }
  preparingSpinner.succeed()

  const frameworkSpinner = spinner("Validating framework.").start()
  const projectInfo = await getProjectInfo()
  if (!projectInfo || projectInfo.framework.name === "manual") {
    frameworkSpinner.fail()
    logger.break()
    if (projectInfo.framework.links.installation) {
      logger.error(
        `We could not detect a supported framework.\n` +
          `Visit ${highlighter.info(
            projectInfo?.framework.links.installation
          )} to manually configure your project.\nOnce configured, you can use the cli to add components.`
      )
    }
    logger.break()
    process.exit(1)
  }
  frameworkSpinner.succeed(
    `Validating framework. Found ${highlighter.info(
      projectInfo.framework.label
    )}.`
  )

  return {
    projectInfo,
  }
}
