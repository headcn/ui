import type { RegistryItem } from "headcn/registry"

export const lib: RegistryItem[] = [
  {
    name: "utils",
    type: "registry:lib",
    depends: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
]
