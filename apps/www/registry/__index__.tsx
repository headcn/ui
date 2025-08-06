/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import * as React from "react"

export const Index: Record<string, any> = {
  index: {
    name: "index",
    type: "registry:style",
    registryDepends: ["utils"],
    files: [],
    component: null,
  },
  button: {
    name: "button",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/button.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/button.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button"
      return { default: mod.default || mod[exportName] }
    }),
  },
  utils: {
    name: "utils",
    type: "registry:lib",
    registryDepends: undefined,
    files: [
      {
        path: "registry/lib/utils.ts",
        type: "registry:lib",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/lib/utils.ts")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "utils"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "button-demo": {
    name: "button-demo",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
}
