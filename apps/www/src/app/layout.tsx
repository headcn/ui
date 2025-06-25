import type { Metadata } from "next"

import { cn } from "@/lib/utils"
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
        <div className="absolute inset-0 -z-20 bg-[url(/ui/media/bg-top.jpg)] bg-top bg-no-repeat"></div>
        <div className="absolute inset-0 -z-10 bg-[url(/ui/media/bg-noise.png)] opacity-10"></div>

        <main className="flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
