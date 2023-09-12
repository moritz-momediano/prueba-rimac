"use client";

import Footer from '@/components/footer/footer'
import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import AppContextProvider from '@/components/context/context';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  )
}
