import type React from "react"
import type { Metadata } from "next"
import { Raleway, Raleway_Dots, Montserrat } from "next/font/google"
import { PT_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import "./animations.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"

// Montserrat for hero text
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// PT Sans for navbar
const ptSans = PT_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
})

// Raleway for main text
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// Raleway Dots for accents and special elements
const ralewayDots = Raleway_Dots({
  subsets: ["latin"],
  variable: "--font-raleway-dots",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Studio Seven Pilates | Reformer Pilates Studio in Amherstburg, ON",
    template: "%s | Studio Seven Pilates"
  },
  description: "Experience transformative reformer Pilates classes at Studio Seven in Amherstburg, Ontario. Expert instruction, small class sizes, and ceremonial-grade matcha bar. Book your session today.",
  keywords: [
    "pilates",
    "reformer pilates", 
    "amherstburg pilates",
    "ontario pilates studio",
    "fitness classes",
    "strength training",
    "flexibility",
    "wellness",
    "matcha bar",
    "mind body connection",
    "studio seven"
  ],
  authors: [{ name: "Studio Seven Pilates" }],
  creator: "Studio Seven Pilates",
  publisher: "Studio Seven Pilates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.studiosevenboutique.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    title: 'Studio Seven Pilates | Reformer Pilates Studio in Amherstburg, ON',
    description: 'Experience transformative reformer Pilates classes at Studio Seven in Amherstburg, Ontario. Expert instruction, small class sizes, and ceremonial-grade matcha bar.',
    siteName: 'Studio Seven Pilates',
    images: [
      {
        url: '/images/studio-seven-logo.png',
        width: 1200,
        height: 630,
        alt: 'Studio Seven Pilates Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Seven Pilates | Reformer Pilates Studio in Amherstburg, ON',
    description: 'Experience transformative reformer Pilates classes at Studio Seven in Amherstburg, Ontario.',
    images: ['/images/studio-seven-logo.png'],
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
    google: '', // Add Google Search Console verification code here
    // yandex: '', // Add other verification codes as needed
    // yahoo: '',
    // other: {},
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <StructuredData type="organization" />
        <StructuredData type="local-business" />
        <StructuredData type="website" />
      </head>
      <body className={`${raleway.variable} ${ralewayDots.variable} ${ptSans.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
