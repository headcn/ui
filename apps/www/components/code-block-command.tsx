"use client"

import { cn } from "@/lib/utils"
import { useMemo, useState } from "react"
import CopyButton from "./copy-button"

interface CommandProps {
  command: string
}

const packageManagers = ["npm", "pnpm", "yarn", "bun"] as const
const packageManagersPrefix = {
  npm: "npx",
  pnpm: "pnpm dlx",
  yarn: "yarn dlx",
  bun: "bunx",
}

type PackageManager = (typeof packageManagers)[number]

export default function CodeBlockCommand({ command }: CommandProps) {
  const [selectedManager, setSelectedManager] = useState<PackageManager>("npm")

  const prefixedCommand = useMemo(() => {
    return `${packageManagersPrefix[selectedManager]} ${command}`
  }, [selectedManager, command])

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
      <pre className="text-muted-foreground relative">
        <CopyButton value={prefixedCommand} />
        <code>{prefixedCommand}</code>
      </pre>
    </div>
  )
}
