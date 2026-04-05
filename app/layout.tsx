import { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils/cn'
import { Header } from '../components/Header'
import { ThemeProvider } from '../components/theme-provider'
import { Footer } from '../components/Footer'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  description: 'Senior Software Engineer at Adidas, working on Payment Experience. Neovim user, hacker, and occasional streamer based in Amsterdam.',
  metadataBase: new URL('https://www.koenverburg.nl'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.koenverburg.nl',
    siteName: 'Koen Verburg',
  },
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}  className={cn(
        "px-4 flex flex-col min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}