import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import SeoSchema from "@/components/SeoSchema";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://REPLACE_LATER_DOMAIN'),
  title: 'Thornleigh Mechanic & Auto Electrician | Expert Car Service & Repairs',
  description: 'Professional auto repairs, servicing & electrical work in Thornleigh. Fast, reliable service with guaranteed workmanship. Call REPLACE_WITH_PHONE for a quote.',
  keywords: 'REPLACE_WITH_PRIMARY_SERVICE_KEYWORDS',
  authors: [{ name: 'Sydney SEO Speed' }],
  openGraph: {
    title: 'Thornleigh Mechanic & Auto Electrician',
    description: 'Expert car service & repairs in Thornleigh. Fast, reliable, guaranteed.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Thornleigh Mechanic'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thornleigh Mechanic & Auto Electrician',
    description: 'Expert car service & repairs in Thornleigh'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1
  },
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
      </head>{/*
  <SeoSchema />
*/}

      <body className="font-sans antialiased">
        <SeoSchema />
        {children}
      </body>
    </html>
  )
}
