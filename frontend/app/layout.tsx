import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-argent">{children}</body>
    </html>
  )
} 