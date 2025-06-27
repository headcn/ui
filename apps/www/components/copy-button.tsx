"use client"

import { Button } from "@/registry/ui/button"
import { CheckIcon } from "@heroicons/react/16/solid"
import { ClipboardIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

interface CopyButtonProps {
  value: string
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const Icon = hasCopied ? CheckIcon : ClipboardIcon

  function handleCopy() {
    navigator.clipboard.writeText(value)
    setHasCopied(true)
  }

  return (
    <Button
      variant={"ghost"}
      size={"icon-xs"}
      className="absolute top-2.5 right-2"
      onClick={handleCopy}
    >
      <Icon className="text-muted-foreground size-4" />
    </Button>
  )
}
