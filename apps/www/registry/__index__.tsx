/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import * as React from "react"

export const Index: Record<string, any> = {
  button: {
    name: "button",
    type: "registry:ui",
    files: [
      {
        path: "ui/button.tsx",
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
}
