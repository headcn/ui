import type { NextConfig } from "next"
import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()
const nextConfig: NextConfig = {
  // production-only settings
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    distDir: "../../dist/apps/www",
  }),
  // shared
  devIndicators: false,
  basePath: "/ui",
}

export default withMDX(nextConfig)
