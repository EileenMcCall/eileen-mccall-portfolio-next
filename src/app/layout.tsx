import type { Metadata } from 'next'
import './globals.css'
import styles from "./layout.module.css";
import Header from '@/components/Header/Header';
import { firaCode, deasChlo } from "./fonts";

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
      <body className={`${firaCode.variable} ${deasChlo.variable}`}>
        {/* <Header /> */}
        <main className={styles.mainContent}>
          {children}
        </main>
      </body>
    </html>
  )
}
