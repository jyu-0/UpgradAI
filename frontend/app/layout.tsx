import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UpgradAI - AI Solutions for Your Business',
  description: 'Transform your business with cutting-edge AI solutions from UpgradAI. We provide innovative AI services to help your company grow and succeed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  )
} 