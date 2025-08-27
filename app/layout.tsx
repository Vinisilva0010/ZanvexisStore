import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zanvexis Store - Tecnologia que conecta você ao futuro',
  description: 'Descubra os melhores produtos de tecnologia na Zanvexis Store. Smartphones, gadgets, acessórios e muito mais com as melhores ofertas.',
  keywords: ['tecnologia', 'smartphones', 'gadgets', 'eletrônicos', 'loja online', 'zanvexis'],
  authors: [{ name: 'Zanvexis Store' }],
  creator: 'Zanvexis Store',
  publisher: 'Zanvexis Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zanvexis-store.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zanvexis Store - Tecnologia que conecta você ao futuro',
    description: 'Descubra os melhores produtos de tecnologia na Zanvexis Store.',
    url: 'https://zanvexis-store.vercel.app',
    siteName: 'Zanvexis Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zanvexis Store',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanvexis Store - Tecnologia que conecta você ao futuro',
    description: 'Descubra os melhores produtos de tecnologia na Zanvexis Store.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <AffiliateDisclaimer />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  )
}

