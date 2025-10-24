export const metadata = {
  title: 'Talk Small Business | Delegate with Voice',
  description: 'Save time by delegating with voice. Join the waitlist.'
}

import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}


