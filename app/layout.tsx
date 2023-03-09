import './globals.css'
import {League_Spartan} from '@next/font/google'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Script from "next/script"

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LJQ8WRK604"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LJQ8WRK604');
        `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
