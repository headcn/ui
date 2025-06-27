"use client"

import { cn } from "@/lib/utils"
import { useMemo, useState } from "react"
import CopyButton from "./copy-button"

interface CommandProps {
  _command: string
}

const packageManagers = ["npm", "pnpm", "yarn", "bun"] as const
type PackageManager = (typeof packageManagers)[number]

export default function Command({ _command }: CommandProps) {
  const [selectedManager, setSelectedManager] = useState<PackageManager>("npm")

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
      </div>
      <pre className="bg-secondary/25 text-muted-foreground relative">
        <CopyButton value={newCommand} />
        <code>{newCommand}</code>
      </pre>
    </div>
  )
}
