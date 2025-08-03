import packageJson from "@/package.json"
import { build } from "@/src/commands/build"
import { init } from "@/src/commands/init"
import { Command } from "commander"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
  const program = new Command()
    .name("headcn")
    .description("add components and dependencies to your project")
    .version(packageJson.version || "dev", "-v", "--version")

  program.addCommand(build)
  program.addCommand(init)
  program.parse()
}

main()
