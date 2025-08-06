import { detect, getCommand } from "@antfu/ni"
import { execa } from "execa"

export async function installDeps(deps: string[]) {
  if (deps.length === 0) return

  const agent = await detect({ programmatic: true })
  if (!agent) {
    throw new Error("Could not found a package manager.")
  }

  try {
    const command = getCommand(agent, "add", [...deps])
    await execa(command.command, [...command.args])
  } catch (err) {
    throw new Error(`Failed to install dependencies:\n${err}`)
  }
}
