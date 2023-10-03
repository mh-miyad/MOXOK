import NavbarComp from '@/Components/Navbar/NavbarComp'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FooterComp from '@/Components/Footer/FooterComp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOXOK-Your PDF Builder',
  description: 'MOXOK IS a pdf builder Ai Chat library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white max-h-screen `}>
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  )
}
