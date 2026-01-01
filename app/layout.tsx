import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mashchenko.dev'),

  title: 'Nikita Mashchenko',
  authors: {
    name: 'Nikita Mashchenko',
  },

  description:
    "Software engineer focused on building modern, reliable products end to end, from infrastructure to user experience.",
  openGraph: {
    title: 'Nikita Mashchenko',
  description:
    "Software engineer focused on building modern, reliable products end to end, from infrastructure to user experience.",
    url: 'https://mashchenko.dev',
    siteName: 'Nikita Mashchenko',
    images: '/og.png',
    type: 'website',
  },
  keywords: ['web coding', 'nmashchenko', 'react', 'developer', 'ts', 'nextjs', 'tailwind'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
