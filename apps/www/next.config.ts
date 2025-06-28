import type { NextConfig } from "next"

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages"

const nextConfig: NextConfig = {
  // Always export for static deployment
  output: "export",
  
  // Use a relative path that doesn't leave filesystem root
  distDir: process.env.NODE_ENV === "production" ? "dist" : ".next",
  
  // GitHub Pages specific settings
  ...(isGitHubPages && {
    basePath: "/ui",
    assetPrefix: "/ui/",
  }),
  
  // shared
  devIndicators: false,
}

export default nextConfig
