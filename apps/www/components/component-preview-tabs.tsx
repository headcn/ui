"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/ui/button"
import { CheckIcon } from "@heroicons/react/16/solid"
import { ClipboardIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

interface ComponentPreviewTabsProps {
  code: string
  preview: React.ReactNode
  highlightedCode: string
}

export default function ComponentPreviewTabs({
  code,
  preview,
  highlightedCode,
}: ComponentPreviewTabsProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [hasCopied, setHasCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="ml-auto flex items-center gap-2">
        <button
          className={cn(
            "font-mono text-xs font-semibold uppercase",
            activeTab === "preview"
              ? "text-foreground"
              : "text-muted-foreground"
          )}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={cn(
            "font-mono text-xs font-semibold uppercase",
            activeTab === "code" ? "text-foreground" : "text-muted-foreground"
          )}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>
      <div className="bg-secondary/25 relative grid aspect-video place-items-center gap-4">
        {activeTab === "preview" ? (
          preview
        ) : (
          <>
            <Button
              variant={"ghost"}
              size={"icon-xs"}
              className="absolute top-2 right-2"
              onClick={handleCopy}
            >
              {hasCopied ? (
                <CheckIcon className="text-muted-foreground size-4" />
              ) : (
                <ClipboardIcon className="text-muted-foreground size-4" />
              )}
            </Button>
            <div
              className="size-full"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </>
        )}
      </div>
    </div>
  )
}
