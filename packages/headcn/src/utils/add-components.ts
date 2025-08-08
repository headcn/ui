import { updateDeps } from "@/src/updaters/update-deps"
import { updateFiles } from "@/src/updaters/update-files"
import { type Config } from "./get-config"

/**
 * Function that runs updaters for adding/updating components and dependencies.
 *
 * @param components A list of component names to update/install.
 * @param config Config object with resolved paths.
 */
export async function addComponents(
  components: string[],
  config: Config
): Promise<void> {
  if (!components.length) {
    return
  }

  const { deps } = await updateFiles(components, config)
  await updateDeps(deps)
}
