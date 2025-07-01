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
      <div className="flex items-center gap-2">
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
      <div className="bg-secondary/25 not-prose">
        {activeTab === "preview" ? (
          <div className="not-prose grid aspect-video place-items-center">
            {preview}
          </div>
        ) : (
          <div className="relative">
            <CopyButton value={code} />
            <div
              className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary scrollbar-thumb-rounded-md overflow-x-auto overflow-y-visible py-4 pb-3"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
