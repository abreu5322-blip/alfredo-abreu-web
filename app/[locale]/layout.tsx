import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/app/globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alfredoabreu.com'),
  title: {
    template: '%s | Alfredo Abreu — B2B SEO Consultant',
    default: 'Alfredo Abreu — B2B SEO Consultant',
  },
  description:
    'Bilingual B2B SEO Consultant specializing in Nearshoring, BPO, and SaaS companies in the US market. $14.85M+ in client revenue attributed to organic search.',
  openGraph: {
    siteName: 'Alfredo Abreu',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={dmSans.variable}>
      <body className="font-sans bg-white text-midnight-navy antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId="G-2LYSDH7G3X" />
        )}
        <Analytics />
      </body>
    </html>
  )
}
