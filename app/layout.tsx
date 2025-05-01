import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Histoires de Vie | Blog Personnel avec  christianesphermood ",
  description: "Un blog dédié aux histoires de vie, où chaque récit compte et inspire.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

const jsonLd = {
  "@context": "https://christianespheremood.vercel.app/",
  "@type": "WebPage",
  "name": "Partager son histoire personnelle avec christianespheremood",
  "description": "Plateforme pour partager vos témoignages de vie inspirants"
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
