import { registry } from "@/registry/index"
import fs from "fs/promises"
import { Registry } from "headcn/registry"
import path from "path"
import { rimraf } from "rimraf"

async function buildRegistryIndex() {
  let index = `/* eslint-disable @typescript-eslint/ban-ts-comment */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  // @ts-nocheck
  import * as React from "react"

  export const Index: Record<string, any> = {`
  for (const item of registry.items) {
    // resolve path
    const resolvedFiles = item.files.map((f) => `registry/${f.path}`)
    if (!resolvedFiles) continue

    // main component import path
    const componentImportPath = item.files[0].path
      ? `@/registry/${item.files[0].path}`
      : ""

    index += `
    "${item.name}": {
      name: "${item.name}",
      type: "${item.type}",
      files: [${item.files.map(
        (f) => `{
        path: "registry/${f.path}",
        type: "${f.type}",
        }`
      )}],
      component: ${
        componentImportPath
          ? `React.lazy(async () => {
        const mod = await import("${componentImportPath}")
        const exportName = Object.keys(mod).find((key) => typeof mod[key] === "function" || typeof mod[key] === "object") || "${item.name}"
        return { default: mod.default || mod[exportName] }
      })`
          : "null"
      }
    }`
  }
  // ending brackett
  index += `
  }`

  console.log(`${Object.keys(registry.items).length} components found`)

  const registryIndexPath = path.join(process.cwd(), "registry/__index__.tsx")
  // clean directory
  rimraf.sync(registryIndexPath)
  await fs.writeFile(registryIndexPath, index)
}

async function buildRegistryJson() {
  const resolvedRegistry: Registry = {
    ...registry,
    items: registry.items.map((item) => {
      const files = item.files.map((f) => ({
        ...f,
        path: `registry/${f.path}`,
      }))

      return {
        ...item,
        files,
      }
    }),
  }

  const registryJsonPath = path.join(process.cwd(), "registry.json")
  // clean directory
  rimraf.sync(registryJsonPath)
  await fs.writeFile(
    registryJsonPath,
    JSON.stringify(resolvedRegistry, null, 2)
  )
}

try {
  console.log("Building registry/__index__.tsx...")
  await buildRegistryIndex()

  console.log("Building registry.json...")
  await buildRegistryJson()
} catch (err) {
  console.error(err)
  process.exit(1)
}
