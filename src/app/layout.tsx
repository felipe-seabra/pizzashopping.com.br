/* eslint-disable @next/next/no-page-custom-font */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { ScrollUpButton } from '@/app/_components/scroll-up-button'
import { CookieConsentComponent } from '@/app/_components/cookie-consent'

import Provider from '@/utils/providers'
import { TooltipProvider } from '@/components/ui/tooltip'

import Header from './_components/header'
import Footer from './_components/footer'
import Analytics from './_components/analytics'

import {
  COMPANY_NAME,
  SITE_URL,
  COMPANY_DESCRIPTION,
  OG_IMAGE,
} from '@/database/constants'

const inter = Inter({ subsets: ['latin'] })

const PAGE_TITLE = 'Home'

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${PAGE_TITLE}`,
  description: `${COMPANY_DESCRIPTION}`,
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: `${SITE_URL}`,
    title: `${COMPANY_NAME} | ${PAGE_TITLE}`,
    description: `${COMPANY_DESCRIPTION}`,
    siteName: `${COMPANY_NAME} | ${PAGE_TITLE}`,
    images: [
      {
        url: `${OG_IMAGE}`,
        alt: `${COMPANY_NAME} | ${PAGE_TITLE}`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coldsmith+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Provider>
          <Header />
          <TooltipProvider>{children}</TooltipProvider>
          <Footer />
          <ScrollUpButton />
          <CookieConsentComponent />
          <Toaster />
          <Analytics />
        </Provider>
      </body>
    </html>
  )
}
