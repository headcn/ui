"use client"

import { cn } from "@/lib/utils"
import { useCallback, useMemo, useState } from "react"

interface CommandProps {
  _command: string
}

const packageManagers = ["npm", "pnpm", "yarn", "bun"] as const
type PackageManager = (typeof packageManagers)[number]

export default function Command({ _command }: CommandProps) {
  const [selectedManager, setSelectedManager] = useState<PackageManager>("npm")
  const [hasCopied, setHasCopied] = useState(false)

  const newCommand = useMemo(() => {
    switch (selectedManager) {
      case "npm":
        return `npx ${_command}`
      case "pnpm":
        return `pnpm dlx ${_command}`
      case "yarn":
        return `yarn dlx ${_command}`
      case "bun":
        return `bunx ${_command}`
    }
  }, [selectedManager, _command])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(newCommand)
    setHasCopied(true)
  }, [newCommand])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {packageManagers.map((manager) => (
          <button
            key={manager}
            className={cn(
              "font-mono text-xs font-semibold uppercase",
              manager === selectedManager
                ? "text-foreground"
                : "text-muted-foreground"
            )}
            onClick={() => setSelectedManager(manager)}
          >
            {manager}
          </button>
        ))}
        <button
          className="text-muted-foreground ml-auto font-mono text-xs font-semibold uppercase"
          onClick={handleCopy}
        >
          {hasCopied ? "copied" : "copy"}
        </button>
      </div>
      <div className="bg-secondary/25 text-muted-foreground p-4 font-mono text-sm font-medium">
        {newCommand}
      </div>
    </div>
  )
}
