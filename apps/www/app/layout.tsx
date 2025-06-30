import type { Metadata } from "next"

import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import { boldonse, inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { siteConfig } from "@/config/site"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Build beautiful, accessible UI components - headcn/ui",
    template: "%s - headcn/ui",
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Headless UI",
  ],
  creator: "stabldev",
  authors: [
    {
      name: "stabldev",
      url: "https://x.com/stabldev",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@stabldev",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          boldonse.variable,
          "relative bg-black antialiased"
        )}
      >
        <div className="absolute inset-0 top-0 -z-20 bg-[url(/media/imgs/bg-top.jpg)] bg-position-[35%_top] bg-no-repeat sm:bg-position-[38%_top] md:bg-position-[40%_top] lg:bg-position-[44%_top] xl:bg-top forced-colors:hidden"></div>
        <div className="absolute inset-0 -z-10 bg-[url(/media/imgs/bg-noise.png)] opacity-10 forced-colors:hidden"></div>
        <div className="absolute inset-0 bottom-0 -z-30 bg-[url(/media/imgs/bg-bottom.jpg)] bg-position-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-position-[38%_bottom] md:bg-position-[40%_bottom] lg:bg-position-[44%_bottom] xl:bg-bottom forced-colors:hidden"></div>

        <main className="flex flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  )
}
