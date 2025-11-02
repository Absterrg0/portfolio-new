import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Parv Jain - Portfolio",
    template: "%s | Parv Jain"
  },
  description: "Portfolio of Parv Jain - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Parv Jain", "Portfolio", "Full Stack Developer", "React", "Next.js", "Node.js", "Web Developer"],
  authors: [{ name: "Parv Jain" }],
  creator: "Parv Jain",
  metadataBase: new URL("https://portfolio.example.com"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Parv Jain - Portfolio",
    description: "Portfolio of Parv Jain - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://portfolio.example.com",
    siteName: "Switchfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png",
        width: 1200,
        height: 630,
        alt: "Parv Jain - Portfolio"
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parv Jain - Portfolio",
    description: "Portfolio of Parv Jain - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png"],
    creator: "@notabbytwt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
