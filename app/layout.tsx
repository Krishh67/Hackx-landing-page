import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Oswald, Rajdhani, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani" 
})
const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-bebas-neue" 
})

export const metadata: Metadata = {
  title: "HackX 4.0 - Race to Innovation | February 28 - March 1, 2026",
  description:
    "Rev your engines for HackX 4.0! Join the ultimate 24-hour hackathon where innovation meets speed. Win prizes worth ₹75,000+. NMIMS University, Navi Mumbai.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} ${rajdhani.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
