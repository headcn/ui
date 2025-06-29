import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
})

export const boldonse = localFont({
  src: "../assets/fonts/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
})
