import type React from "react"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { GoogleTagManager } from "@/components/GoogleTagManager"

const fontSans = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Top Pro Painting | Expert Painters in Cape Coral - Residential & Commercial Services",
  keywords:
    "Top Pro Painting, painting services Cape Coral, professional painters, residential painting, commercial painting, interior painting, exterior painting, Cape Coral painters, high-quality painting, Cape Coral FL painting company",
  description:
    "Top Pro Painting offers premium residential and commercial painting services in the Cape Coral area. Our team of professional painters specializes in interior and exterior projects, delivering top-quality results that enhance the beauty and value of your property. Contact us today for a free quote and experience the best painting services in Cape Coral, FL!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans", fontSans.variable)}>
        <GoogleTagManager />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

