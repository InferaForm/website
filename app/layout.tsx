import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inferaform — Intelligence, Shaped for You',
  description: 'We craft intelligent, end-to-end AI systems that scale with your business.',
  metadataBase: new URL('https://inferaform.example'),
  openGraph: {
    title: 'Inferaform',
    description: 'Intelligence, Shaped for You.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient-bg min-h-screen`}>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}