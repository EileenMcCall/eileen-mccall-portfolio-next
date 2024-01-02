import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from "./layout.module.css";
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Da Code Zone 💀',
  description: 'ABANDON HOPE ALL YE WHO ENTER HERE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
      </body>
    </html>
  )
}
