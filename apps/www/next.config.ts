import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/button",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/button",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
