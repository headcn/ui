import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Header from "@/components/header"

import { inter } from "./fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Build beautiful, accessible UI components - headcn/ui",
  description: "Headless UI components, beautifully designed and ready to use.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "relative bg-black antialiased")}>
        <div className="absolute inset-0 top-0 -z-20 bg-[url(/ui/media/bg-top.jpg)] bg-top bg-no-repeat"></div>
        <div className="absolute inset-0 -z-10 bg-[url(/ui/media/bg-noise.png)] opacity-10"></div>
        <div className="absolute inset-0 bottom-0 -z-30 bg-[url(/ui/media/bg-bottom.jpg)] bg-bottom bg-no-repeat"></div>

        <main className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
