import type { Metadata } from "next"

import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Build beautiful, accessible UI components",
    template: "%s - headcn/ui",
  },
  description: "Headless UI components, beautifully designed and ready to use.",
  keywords: ["React", "Tailwind CSS", "Headless UI", "Components", "headcn"],
  creator: "stabldev",
  authors: [
    {
      name: "stabldev",
      url: "https://x.com/stabldev",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    // TODO: add more icons
  },
  manifest: "/ui/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "relative bg-black antialiased")}>
        <div className="absolute inset-0 top-0 -z-20 bg-[url(/media/bg-top.jpg)] bg-position-[35%_top] bg-no-repeat sm:bg-position-[38%_top] md:bg-position-[40%_top] lg:bg-position-[44%_top] xl:bg-top forced-colors:hidden"></div>
        <div className="absolute inset-0 -z-10 bg-[url(/media/bg-noise.png)] opacity-10 forced-colors:hidden"></div>
        <div className="absolute inset-0 bottom-0 -z-30 bg-[url(/media/bg-bottom.jpg)] bg-position-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-position-[38%_bottom] md:bg-position-[40%_bottom] lg:bg-position-[44%_bottom] xl:bg-bottom forced-colors:hidden"></div>

        <main className="flex flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  )
}
