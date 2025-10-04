import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { CartProvider } from '@/contexts/CartContext';
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppButton from '@/components/WhatsAppButton';

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
        {/* O Provider deve envolver toda a estrutura da página */}
        <CartProvider>
          {/* Este div organiza o layout para o footer ficar no final */}
          <div className="min-h-screen flex flex-col">
            <Header />
            {/* O 'main' recebe o conteúdo da página e o padding para o header fixo */}
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
        
        {/* Componentes de aviso podem ficar fora da estrutura principal */}
        <AffiliateDisclaimer />
        <CookieConsent />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <WhatsAppButton />
      </body>
    </html>
  )
}


