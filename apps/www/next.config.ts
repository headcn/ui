import type { NextConfig } from "next"

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages"

const nextConfig: NextConfig = {
  // Always export for static deployment
  output: "export",
  distDir: "../../dist/apps/www",
  
  // GitHub Pages specific settings
  ...(isGitHubPages && {
    basePath: "/ui",
    assetPrefix: "/ui/",
  }),
  
  // shared
  devIndicators: false,
}

export default nextConfig
