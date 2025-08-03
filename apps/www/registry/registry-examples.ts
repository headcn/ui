import type { RegistryItem } from "headcn/registry"

export const examples: RegistryItem[] = [
  {
    name: "button-demo",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
