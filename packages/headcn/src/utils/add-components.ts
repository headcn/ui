import { updateDeps } from "@/src/updaters/update-deps"
import { updateFiles } from "@/src/updaters/update-files"
import { type Config } from "./get-config"

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
