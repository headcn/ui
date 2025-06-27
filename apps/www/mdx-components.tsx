import { cn } from "@/lib/utils"
import { useMDXComponent } from "next-contentlayer2/hooks"
import Command from "./components/command"
import ComponentPreview from "./components/component-preview"
import CopyButton from "./components/copy-button"

interface MdxProps {
  code: string
}

const components = {
  ComponentPreview,
  Command,
  pre: ({
    raw,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & { raw?: string }) => {
    return (
      <div className="relative">
        <CopyButton value={raw ?? ""} />
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
        "prose-p:text-muted-foreground"
      )}
    >
      <Component components={components} />
    </article>
  )
}
