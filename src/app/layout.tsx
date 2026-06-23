import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adi Saputra — Logo Designer & Brand Identity',
  description: 'Logo Designer berbasis di Tenggarong Kota Raja, Kutai Kartanegara, Kalimantan Timur. Merancang identitas visual yang hidup dan diingat — bukan sekadar simbol.',
  keywords: ['logo designer', 'brand identity', 'kalimantan','Tenggarong', 'kutai kartanegara', 'kalimantan timur', 'desain logo', 'identitas visual'],
  authors: [{ name: 'Adi Saputra' }],
  openGraph: {
    title: 'Adi Saputra — Logo Designer',
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
