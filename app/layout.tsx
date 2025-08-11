import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Anojan Yogenthiran | AI/ML Software Engineer",
  description:
    "Personal portfolio of Anojan Yogenthiran, an AI & Machine Learning Engineer specializing in building intelligent systems.",
  keywords: [
    "AI",
    "Machine Learning",
    "Software Engineer",
    "Portfolio",
    "MLOps",
    "Deep Learning",
    "Natural Language Processing",
  ],
  authors: [{ name: "Anojan Yogenthiran" }],
  openGraph: {
    title: "Anojan Yogenthiran | AI/ML Software Engineer",
    description:
      "Personal portfolio of Anojan Yogenthiran, an AI & Machine Learning Engineer specializing in building intelligent systems.",
    url: "https://ayogenthiran.github.io", // Replace with your actual domain
    siteName: "Anojan Yogenthiran Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anojan Yogenthiran | AI/ML Software Engineer",
    description:
      "Personal portfolio of Anojan Yogenthiran, an AI & Machine Learning Engineer specializing in building intelligent systems.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
