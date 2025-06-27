"use client"

import useCopyToClipboard from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/registry/ui/button"
import { CheckIcon } from "@heroicons/react/16/solid"
import { ClipboardIcon } from "@heroicons/react/24/outline"

interface CopyButtonProps {
  value: string
}

export default function CopyButton({ value }: CopyButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const Icon = isCopied ? CheckIcon : ClipboardIcon

  return (
    <Button
      variant={"ghost"}
      size={"icon-xs"}
      className="absolute top-2.5 right-2"
      onClick={() => copyToClipboard(value)}
    >
      <Icon className="text-muted-foreground size-4" />
    </Button>
  )
}
