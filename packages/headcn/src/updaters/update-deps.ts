import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import { detect, getCommand } from "@antfu/ni"
import { execa } from "execa"

/**
 * Function that detects the package manager and install.
 * Get agent (package manager) by lock-file and create command to run, and run using execa.
 *
 * @param deps A list of dependency names to update/install.
 */
export async function updateDeps(deps: string[]): Promise<void> {
  if (deps.length === 0) return

  // get package manager
  const agent = await detect({ programmatic: true })
  if (!agent) {
    logger.error("Could not found a package manager.")
    process.exit(1)
  }

  const depsSpinner = spinner("Installing dependencies.").start()

  try {
    // create command structure to run
    const command = getCommand(agent, "add", [...deps])
    // run command without streaming
    await execa(command.command, [...command.args])
    depsSpinner.succeed()
  } catch (err) {
    depsSpinner.fail()
    logger.error(`Failed to install dependencies:\n${err}`)
    process.exit(1)
  }
}
