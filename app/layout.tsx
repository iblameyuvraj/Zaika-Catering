import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

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
  openGraph: {
    title: 'Zaika Catering | Best Catering Service in Odisha',
    description: 'Premium catering for weddings, parties, and events in Odisha. Book now!',
    url: 'https://zaikacaterin.in',
    siteName: 'Zaika Catering',
    images: [
      {
        url: '/public/placeholder-logo.png',
        width: 800,
        height: 600,
        alt: 'Zaika Catering Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaika Catering | Best Catering Service in Odisha',
    description: 'Premium catering for weddings, parties, and events in Odisha. Book now!',
    images: ['/public/placeholder-logo.png'],
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
        </ThemeProvider>
      </body>
    </html>
  )
}
