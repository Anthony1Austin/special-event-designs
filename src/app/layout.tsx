import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LiveChat from '@/components/LiveChat'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Special Event Designs | Premier Event Planning & Floral Design',
  description: 'Crafting unforgettable events since 2005. Specializing in weddings, corporate events, and floral design. Official florist for the WM Phoenix Open.',
  keywords: 'event planning, wedding planning, corporate events, floral design, Phoenix Open',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  )
}


