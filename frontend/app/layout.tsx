import React from "react"
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GlobalDialog from "@/components/global/modal"
import { MeApi } from "@/utils/api"
import AuthContextProvider from "@/context/AuthContext"
import { getUserMeLoader } from "@/lib/ssr/get-user"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans" });

export const metadata: Metadata = {
  title: 'CouponMN - Монголын шилдэг хямдралын купонууд',
  description: '200+ компанийн хямдралын купонуудыг нэг дороос олоорой. Сар бүр 50%-100% хүртэл хэмнээрэй.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const user = await getUserMeLoader()

  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable} font-sans antialiased`}>
        <GlobalDialog />
        <AuthContextProvider user={user?.data ?? {}}>
          {children}
        </AuthContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
