"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import CopyButton from "./copy-button"

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
            <CopyButton value={code} />
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
