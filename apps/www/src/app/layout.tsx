import type { Metadata } from "next"

import "./globals.css"

import { inter } from "./fonts"

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
      <body
        className={`${inter.className} grid h-dvh place-items-center antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
