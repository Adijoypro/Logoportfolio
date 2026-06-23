import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nama Anda — Logo Designer & Brand Identity',
  description: 'Logo Designer berbasis di Kalimantan. Merancang identitas visual yang hidup dan diingat — bukan sekadar simbol.',
  keywords: ['logo designer', 'brand identity', 'kalimantan', 'desain logo', 'identitas visual'],
  authors: [{ name: 'Nama Anda' }],
  openGraph: {
    title: 'Nama Anda — Logo Designer',
    description: 'Merancang identitas yang hidup dan diingat.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nama Anda — Logo Designer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
