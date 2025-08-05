import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
})

export const boldonse = localFont({
  src: "../public/fonts/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
})
