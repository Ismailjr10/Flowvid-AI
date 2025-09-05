import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flowvid AI",
  description: "AI-powered video creation platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar at the top */}
        <Navbar />

        {/* Page content with padding for fixed navbar */}
        <main className="pt-20">{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  )
}
