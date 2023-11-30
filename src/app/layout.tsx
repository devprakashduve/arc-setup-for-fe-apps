import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import Footer from '@/components/molecules/Footer'
import Header from '@/components/molecules/Header/Header'

const inter = Inter({ subsets: ['latin'] })
const themeName = 'themeOne'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const MenuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'about' },
    { name: 'Contact', link: 'contact' },
  ]
  const nonce = btoa(Math.random().toString())
  const content = "script-src 'self' 'nonce-'" + nonce
  return (
    <html lang="en">
      <meta http-equiv="Content-Security-Policy" content={content} />
      <body className={themeName + ' ' + inter.className}>
        <div className="main">
          <Header
            logoSrc={'https://placekitten.com/300/200'}
            navItems={MenuItems}
          />
          {children}
          <Footer companyName={'w2study'} year={2023} />
        </div>
      </body>
    </html>
  )
}
