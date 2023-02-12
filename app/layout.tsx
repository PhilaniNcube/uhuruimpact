import './globals.css'
import {League_Spartan} from '@next/font/google'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'

const spartan = League_Spartan({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400','500','600','700','800','900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spartan.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
