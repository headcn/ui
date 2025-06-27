import { cn } from "@/lib/utils"
import { useMDXComponent } from "next-contentlayer2/hooks"
import CodeBlockCommand from "./components/code-block-command"
import ComponentPreview from "./components/component-preview"
import CopyButton from "./components/copy-button"

interface MdxProps {
  code: string
}

const components = {
  ComponentPreview,
  CodeBlockCommand,
  pre: ({
    __rawString__,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & { __rawString__?: string }) => {
    return (
      <div className="relative">
        <CopyButton value={__rawString__ ?? ""} />
        <pre {...props}>{children}</pre>
      </div>
    )
  },
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article
      className={cn(
        "prose dark:prose-invert",
        "prose-pre:bg-secondary/25 prose-pre:rounded-none prose-pre:m-0",
        "prose-headings:text-foreground prose-h2:text-xl",
        "prose-headings:text-base prose-headings:font-semibold",
        "prose-p:text-muted-foreground prose-p:text-sm"
      )}
    >
      <Component components={components} />
    </article>
  )
}
