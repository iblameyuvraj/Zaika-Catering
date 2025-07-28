import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: 'Zaika Catering | Best Catering Service in Odisha',
  description: 'Zaika Catering offers premium catering services in Odisha for weddings, parties, and corporate events. Book the best catering service in Odisha today!',
  keywords: [
    'catering service',
    'Odisha catering',
    'wedding catering Odisha',
    'event catering',
    'catering services',
    'catering at cheap price',
    'catering at affordable price',
    'catering at affordable price in Odisha',
    'catering at affordable price in Bhubaneswar',
    'catering at affordable price in Cuttack',
    'catering at affordable price in Puri',
    'catering at affordable price in Rourkela',
    'best catering service',
    'Zaika Catering',
    'Zaika Catering in Odisha',
    'Zaika Catering in Bhubaneswar',
    'Zaika Catering in Cuttack',
    'Zaika Catering in Puri',
    'Zaika Catering in Rourkela',
    'Zaika Catering in Sambalpur',
    'Zaika Catering in Jharsuguda',
    'Zaika Catering in Koraput',
  ],
  authors: [{ name: 'Zaika Catering', url: 'https://zaikacaterin.in' }],
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://zaikacaterin.in'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Zaika Catering | Best Catering Service in Odisha',
    description: 'Premium catering for weddings, parties, and events in Odisha. Book now!',
    url: 'https://zaikacaterin.in',
    siteName: 'Zaika Catering',
    images: [
      {
        url: '/Untitled.jpeg',
        width: 1200,
        height: 630,
        alt: 'Zaika Catering - Premium Catering Services in Odisha',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaika Catering | Best Catering Service in Odisha',
    description: 'Premium catering for weddings, parties, and events in Odisha. Book now!',
    images: [
      {
        url: '/Untitled.jpeg',
        alt: 'Zaika Catering - Premium Catering Services in Odisha',
        width: 1200,
        height: 630,
      }
    ],
    creator: '@zaikacatering',
    site: '@zaikacatering',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://zaikacaterin.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
