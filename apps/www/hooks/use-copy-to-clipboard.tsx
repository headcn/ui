"use client"

import { useState } from "react"

interface UseCopyToClipboardProps {
  timeout?: number
  onCopy?: () => void
}

export default function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: UseCopyToClipboardProps = {}) {
  const [isCopied, setIsCopied] = useState(false)

  function copyToClipboard(value: string) {
    if (typeof window === "undefined" || !window.navigator.clipboard) {
      return
    }

    if (!value) return

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true)

      onCopy?.()
      setTimeout(() => {
        setIsCopied(false)
      }, timeout)
    }, console.error)
  }

  return { isCopied, copyToClipboard }
}
