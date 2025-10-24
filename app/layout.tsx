import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Talk Small Business App | Voice-First AI for Small Business Operations',
  description: 'Reclaim 40% of your time with Talk Small Business App. Voice-first AI agents handle dispatching, collections, and marketing so you can focus on growth. No passwords shared, no complex software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.86/build/spline-viewer.js"></script>
      </head>
      <body className={`${inter.className} font-display bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark`}>
        {children}
      </body>
    </html>
  )
}
