import Navbar from '@/public/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Wordle2.0',
  description: 'Khookx-Created Wordle',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
