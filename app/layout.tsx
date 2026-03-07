import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Sans-serif font for body text - clean and readable
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

// Serif font for headings - warm and trustworthy
const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-geist-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Love Leads Organization',
  description: 'Showing God\'s love through action - supporting children, youth, women, and disaster victims in Malawi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}