import { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { profile } from '@/data/profile'

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${profile.name}`,
    default: `${profile.name} - ${profile.title}`,
  },
  description: profile.bio,
  keywords: [
    'AI Engineer',
    'Agentic AI',
    'Voice Agents',
    'Machine Learning',
    'Cloud Architecture',
    'Google Cloud',
    'Next.js',
    'Full Stack Developer',
    'Telugu LLM',
    'Atlanta',
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gillella.github.io',
    title: `${profile.name} - ${profile.title}`,
    description: profile.bio,
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - ${profile.title}`,
    description: profile.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} flex min-h-screen flex-col bg-midnight`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(127,90,255,0.14),_rgba(8,5,26,0)_55%)]" />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

