import { Registry } from "headcn/registry"

import { examples } from "./registry-examples"
import { ui } from "./registry-ui"

export const registry: Registry = {
  name: "headcn/ui",
  homepage: "https://ui.headcn.site",
  items: [...ui, ...examples],
}
