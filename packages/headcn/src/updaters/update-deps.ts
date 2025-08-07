import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import { detect, getCommand } from "@antfu/ni"
import { execa } from "execa"

export async function updateDeps(deps: string[]): Promise<void> {
  if (deps.length === 0) return

  const agent = await detect({ programmatic: true })
  if (!agent) {
    logger.error("Could not found a package manager.")
    process.exit(1)
  }

  const depsSpinner = spinner("Installing dependencies.").start()

  try {
    const command = getCommand(agent, "add", [...deps])
    await execa(command.command, [...command.args])
    depsSpinner.succeed()
  } catch (err) {
    depsSpinner.fail()
    logger.error(`Failed to install dependencies:\n${err}`)
    process.exit(1)
  }
}
