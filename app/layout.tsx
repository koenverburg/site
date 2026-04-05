import {Metadata} from 'next'
import {Inter as FontSans} from 'next/font/google'

import {cn} from '@/components/cn.utils'
import {Header} from '@/components/header.component'
import {Footer} from '@/components/footer.component'
import {ThemeProvider} from '@/components/theme.provider'

import './globals.css'

const fontSans = FontSans({
  display:  'swap',
  subsets:  ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  description:  'Senior Software Engineer at Adidas, working on Payment Experience. Neovim user, hacker, and occasional streamer based in Amsterdam.',
  metadataBase: new URL('https://www.koenverburg.nl'),
  openGraph:    {
    locale:   'en_US',
    siteName: 'Koen Verburg',
    type:     'website',
    url:      'https://www.koenverburg.nl',
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
      <body suppressHydrationWarning={true}  className={cn('px-4 flex flex-col min-h-screen bg-background font-sans antialiased',
        fontSans.variable)}>
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
