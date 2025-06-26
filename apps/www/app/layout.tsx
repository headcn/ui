import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Header from "@/components/header"

import { inter } from "./fonts"

import "./globals.css"

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "relative bg-black antialiased")}>
        <div className="absolute inset-0 top-0 -z-20 bg-[url(/ui/media/bg-top.jpg)] bg-position-[35%_top] bg-no-repeat sm:bg-position-[38%_top] md:bg-position-[40%_top] lg:bg-position-[44%_top] xl:bg-top forced-colors:hidden"></div>
        <div className="absolute inset-0 -z-10 bg-[url(/ui/media/bg-noise.png)] opacity-10 forced-colors:hidden"></div>
        <div className="absolute inset-0 bottom-0 -z-30 bg-[url(/ui/media/bg-bottom.jpg)] bg-position-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-position-[38%_bottom] md:bg-position-[40%_bottom] lg:bg-position-[44%_bottom] xl:bg-bottom forced-colors:hidden"></div>

        <main className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
