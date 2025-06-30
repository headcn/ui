import { highlightCode } from "@/lib/highlight-code"
import fs from "fs/promises"
import path from "path"
import ComponentPreviewTabs from "./component-preview-tabs"

interface ComponentPreviewProps {
  name: string
}

export default async function ComponentPreview({
  name,
}: ComponentPreviewProps) {
  try {
    const filePath = path.join(
      process.cwd(),
      "registry/examples",
      `${name}.tsx`
    )
    let code = await fs.readFile(filePath, "utf-8")
    code = code.replaceAll("@/registry", "@/components")
    const highlightedCode = await highlightCode(code)

    const mod = await import(`@/registry/examples/${name}.tsx`)
    const Component = mod.default

    return (
      <ComponentPreviewTabs
        code={code}
        preview={<Component />}
        highlightedCode={highlightedCode}
      />
    )
  } catch (err) {
    console.error(err)
    return <div>Error loading component</div>
  }
}
