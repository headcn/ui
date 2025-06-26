import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // production-only settings
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    distDir: "../../dist/apps/www",
  }),
  // shared
  devIndicators: false,
  basePath: "/ui",
  assetPrefix: '/ui/',
}

export default nextConfig
