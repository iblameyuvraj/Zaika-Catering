import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Zaika Catering | Best Catering Service in Odisha',
    template: '%s | Zaika Catering'
  },
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
    'Indian wedding catering',
    'traditional catering Odisha',
    'corporate event catering',
    'birthday party catering',
    'family function catering',
  ],
  authors: [{ name: 'Zaika Catering', url: 'https://zaikacaterin.in' }],
  metadataBase: new URL('https://zaikacaterin.in'),
  icons: {
    icon: [
      { url: '/FaviconImages/favicon.ico', sizes: 'any' },
      { url: '/FaviconImages/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/FaviconImages/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/FaviconImages/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/FaviconImages/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Zaika Catering | Best Catering Service in Odisha',
    description: 'Premium catering for weddings, parties, and events in Odisha. Book now!',
    url: 'https://zaikacaterin.in',
    siteName: 'Zaika Catering',
    images: [
      {
        url: '/logo/logo.jpeg',
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
        url: '/logo/logo.jpeg',
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
    google: 'your-google-verification-code', // Replace with actual code
    yandex: 'your-yandex-verification-code', // Optional
    yahoo: 'your-yahoo-verification-code', // Optional
  },
  alternates: {
    canonical: 'https://zaikacaterin.in',
    languages: {
      'en-IN': '/en-IN',
      'or-IN': '/or-IN', // Odia language support
    },
  },
  category: 'catering services',
  classification: 'business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Zaika Catering',
    'application-name': 'Zaika Catering',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zaika Catering",
              "description": "Premium catering services in Odisha for weddings, parties, and corporate events",
              "url": "https://zaikacaterin.in",
              "logo": "https://zaikacaterin.in/logo/logo.jpeg",
              "image": "https://zaikacaterin.in/logo/logo.jpeg",
              "telephone": "+91-7853862989", // TODO: Replace with actual phone number
              "email": "mdwadud7777@gmail.com", // TODO: Replace with actual email
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Odisha", // TODO: Replace with actual city
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "20.2961", // TODO: Replace with actual coordinates
                "longitude": "85.8245"  // TODO: Replace with actual coordinates
              },
              "openingHours": "Mo-Su 09:00-18:00", // TODO: Update with actual hours
              "priceRange": "₹₹",
              "servesCuisine": ["Indian", "Odia", "Traditional"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Catering Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Catering"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Birthday Party Catering"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Event Catering"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/zaikacatering", // TODO: Replace with actual social links
                "https://www.instagram.com/zaikacatering", // TODO: Replace with actual social links
                "https://www.linkedin.com/company/zaikacatering" // TODO: Replace with actual social links
              ]
            })
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
        
        {/* Google Analytics Script - Add your GA4 ID */}
        {/* 
        STEP 1: Get your Google Analytics ID from https://analytics.google.com/
        STEP 2: Replace GA_MEASUREMENT_ID with your actual ID (e.g., G-XXXXXXXXXX)
        STEP 3: Uncomment the lines below
        */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        /> */}
      </body>
    </html>
  )
}
