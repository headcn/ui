import { useMDXComponent } from "next-contentlayer2/hooks"
import ComponentPreview from "./component-preview"

interface MdxProps {
  code: string
}

const components = {
  ComponentPreview,
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose dark:prose-invert prose-headings:text-foreground prose-h2:text-xl prose-headings:text-base prose-headings:font-semibold prose-p:text-muted-foreground">
      <Component components={components} />
    </article>
  )
}
