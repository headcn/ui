import { Button } from "@/registry/ui/button"
import { Checkbox } from "@/registry/ui/checkbox"
import { useMDXComponent } from "next-contentlayer2/hooks"

interface MdxProps {
  code: string
}

const components = {
  Button,
  Checkbox,
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose dark:prose-invert prose-headings:text-foreground prose-h2:text-xl prose-headings:text-base prose-headings:font-semibold prose-p:text-muted-foreground">
      <Component components={components} />
    </article>
  )
}
