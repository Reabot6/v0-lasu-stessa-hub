import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LASU STESA Resource Hub',
  description: 'Access courses, resources, and announcements for STESSA department',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'https://lasu.edu.ng/home/img/logo1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://lasu.edu.ng/home/img/logo1.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://lasu.edu.ng/home/img/logo1.png',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://lasu.edu.ng/home/img/logo1.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
