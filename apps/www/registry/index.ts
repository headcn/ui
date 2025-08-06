import { Registry } from "headcn/registry"

import { examples } from "./registry-examples"
import { lib } from "./registry-lib"
import { ui } from "./registry-ui"

export const registry: Registry = {
  name: "headcn/ui",
  homepage: "https://ui.headcn.site",
  items: [
    {
      name: "index",
      type: "registry:style",
      depends: ["class-variance-authority", "@heroicons/react"],
      registryDepends: ["utils"],
      files: [],
    },
    ...ui,
    ...lib,
    ...examples,
  ],
}
