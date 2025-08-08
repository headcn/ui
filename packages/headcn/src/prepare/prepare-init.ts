import { pathExists } from "@/src/utils/fs"
import { getProjectInfo, ProjectInfo } from "@/src/utils/get-project-info"
import { highlighter } from "@/src/utils/highlighter"
import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import path from "path"

/**
 * Function that should run before `init` command.
 * Run checks like:
 * * If the current working directory is valid and not empty.
 * * A valid `components.json` file exists.
 * * Framework is supported.
 * * Tailwind CSS is installed and valid.
 * * TypeScript alias exists or not.
 *
 * @returns A promise which resolves to object of project information.
 */
export async function prepareInit(): Promise<{
  projectInfo: ProjectInfo
}> {
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

  if (await pathExists(path.resolve("components.json"))) {
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

  const frameworkSpinner = spinner("Validating framework.").start()
  const projectInfo = await getProjectInfo()
  if (!projectInfo || projectInfo.framework.name === "manual") {
    frameworkSpinner.fail()
    logger.break()
    logger.error(
      `We could not detect a supported framework.\n` +
        `Visit ${highlighter.info(
          projectInfo?.framework.links.installation
        )} to manually configure your project.\nOnce configured, you can use the cli to add components.`
    )
    logger.break()
    process.exit(1)
  }
  frameworkSpinner.succeed(
    `Validating framework. Found ${highlighter.info(
      projectInfo.framework.label
    )}.`
  )

  const tailwindSpinner = spinner("Validating Tailwind CSS.")
  if (!projectInfo.twCssFile) {
    tailwindSpinner.fail()
    logger.break()
    logger.error("No Tailwind CSS configuration found.")
    logger.error(
      "It is likely you do not have Tailwind CSS installed or have an invalid configuration."
    )
    logger.error("Install Tailwind CSS then try again.")
    logger.error(
      `Visit ${highlighter.info(
        projectInfo.framework.links.tailwind
      )} to get started.`
    )
    logger.break()
    process.exit(1)
  } else {
    tailwindSpinner.succeed()
  }

  const tsAliasSpinner = spinner("Validating TypeScript Alias.")
  if (!projectInfo.aliasPrefix) {
    tsAliasSpinner.fail()
    logger.break()
    logger.error("No import alias found in your tsconfig.json file.")
    logger.error(
      `Visit ${highlighter.info(
        projectInfo?.framework.links.installation
      )} to learn how to set an import alias.`
    )
    logger.break()
    process.exit(1)
  } else {
    tsAliasSpinner.succeed()
  }

  return {
    projectInfo,
  }
}
