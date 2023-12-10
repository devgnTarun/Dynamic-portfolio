import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ subsets: ['devanagari'] , weight : ["400", "500" , "600"]});

export const metadata: Metadata = {
  title: 'Tarun',
  description: 'Portolio of a Full Stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
