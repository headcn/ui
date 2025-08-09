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
  checkbox: {
    name: "checkbox",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/checkbox.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "checkbox"
      return { default: mod.default || mod[exportName] }
    }),
  },
  combobox: {
    name: "combobox",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/combobox.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/combobox.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "combobox"
      return { default: mod.default || mod[exportName] }
    }),
  },
  description: {
    name: "description",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/description.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/description.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "description"
      return { default: mod.default || mod[exportName] }
    }),
  },
  field: {
    name: "field",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/field.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/field.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "field"
      return { default: mod.default || mod[exportName] }
    }),
  },
  fieldset: {
    name: "fieldset",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/fieldset.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/fieldset.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "fieldset"
      return { default: mod.default || mod[exportName] }
    }),
  },
  input: {
    name: "input",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/input.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/input.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "input"
      return { default: mod.default || mod[exportName] }
    }),
  },
  label: {
    name: "label",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/label.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/label.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "label"
      return { default: mod.default || mod[exportName] }
    }),
  },
  legend: {
    name: "legend",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/legend.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/legend.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "legend"
      return { default: mod.default || mod[exportName] }
    }),
  },
  listbox: {
    name: "listbox",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/listbox.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/listbox.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "listbox"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "radio-group": {
    name: "radio-group",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/radio-group.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "radio-group"
      return { default: mod.default || mod[exportName] }
    }),
  },
  select: {
    name: "select",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/select.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/select.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "select"
      return { default: mod.default || mod[exportName] }
    }),
  },
  switch: {
    name: "switch",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/switch.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/switch.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "switch"
      return { default: mod.default || mod[exportName] }
    }),
  },
  textarea: {
    name: "textarea",
    type: "registry:ui",
    registryDepends: undefined,
    files: [
      {
        path: "registry/ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/textarea.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "textarea"
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
  "button-destructive": {
    name: "button-destructive",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-destructive.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-destructive.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-destructive"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "button-ghost": {
    name: "button-ghost",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-ghost.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-ghost.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-ghost"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "button-icon": {
    name: "button-icon",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-icon.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-icon.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-icon"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "button-link": {
    name: "button-link",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-link.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-link.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-link"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "button-secondary": {
    name: "button-secondary",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-secondary.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-secondary.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-secondary"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "button-with-icon": {
    name: "button-with-icon",
    type: "registry:example",
    registryDepends: ["button"],
    files: [
      {
        path: "registry/examples/button-with-icon.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/button-with-icon.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "button-with-icon"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "checkbox-demo": {
    name: "checkbox-demo",
    type: "registry:example",
    registryDepends: ["checkbox"],
    files: [
      {
        path: "registry/examples/checkbox-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/checkbox-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "checkbox-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "combobox-demo": {
    name: "combobox-demo",
    type: "registry:example",
    registryDepends: ["combobox"],
    files: [
      {
        path: "registry/examples/combobox-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/combobox-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "combobox-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "fieldset-demo": {
    name: "fieldset-demo",
    type: "registry:example",
    registryDepends: ["fieldset"],
    files: [
      {
        path: "registry/examples/fieldset-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/fieldset-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "fieldset-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "input-demo": {
    name: "input-demo",
    type: "registry:example",
    registryDepends: ["input"],
    files: [
      {
        path: "registry/examples/input-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/input-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "input-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "input-disabled": {
    name: "input-disabled",
    type: "registry:example",
    registryDepends: ["input"],
    files: [
      {
        path: "registry/examples/input-disabled.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/input-disabled.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "input-disabled"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "input-with-button": {
    name: "input-with-button",
    type: "registry:example",
    registryDepends: ["input"],
    files: [
      {
        path: "registry/examples/input-with-button.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/input-with-button.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "input-with-button"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "input-with-label": {
    name: "input-with-label",
    type: "registry:example",
    registryDepends: ["input"],
    files: [
      {
        path: "registry/examples/input-with-label.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/input-with-label.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "input-with-label"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "listbox-demo": {
    name: "listbox-demo",
    type: "registry:example",
    registryDepends: ["listbox"],
    files: [
      {
        path: "registry/examples/listbox-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/listbox-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "listbox-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "radio-group-demo": {
    name: "radio-group-demo",
    type: "registry:example",
    registryDepends: ["radio-group"],
    files: [
      {
        path: "registry/examples/radio-group-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/radio-group-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "radio-group-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "textarea-demo": {
    name: "textarea-demo",
    type: "registry:example",
    registryDepends: ["textarea"],
    files: [
      {
        path: "registry/examples/textarea-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/textarea-demo.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "textarea-demo"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "textarea-disabled": {
    name: "textarea-disabled",
    type: "registry:example",
    registryDepends: ["textarea"],
    files: [
      {
        path: "registry/examples/textarea-disabled.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/textarea-disabled.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "textarea-disabled"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "textarea-with-button": {
    name: "textarea-with-button",
    type: "registry:example",
    registryDepends: ["textarea"],
    files: [
      {
        path: "registry/examples/textarea-with-button.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/textarea-with-button.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "textarea-with-button"
      return { default: mod.default || mod[exportName] }
    }),
  },
  "textarea-with-label": {
    name: "textarea-with-label",
    type: "registry:example",
    registryDepends: ["textarea"],
    files: [
      {
        path: "registry/examples/textarea-with-label.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/textarea-with-label.tsx")
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "textarea-with-label"
      return { default: mod.default || mod[exportName] }
    }),
  },
}
