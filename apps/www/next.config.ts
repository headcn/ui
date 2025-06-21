import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // enable static export
  output: "export",
  distDir: "../../dist/apps/www",
  basePath: "/ui",
};

export default nextConfig;
