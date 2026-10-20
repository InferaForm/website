import './globals.css'
import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Inferaform — Google & Meta Ads + AI Lead Follow-up',
  description: 'We run your Google and Meta ads and follow up with every lead in under 60 seconds, so more leads turn into booked appointments.',
  metadataBase: new URL('https://inferaform.com'),
  openGraph: {
    title: 'Inferaform',
    description: 'Ads that bring you leads. Automation that books them.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen">
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}