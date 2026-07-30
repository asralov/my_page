import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // 1. Fixes the metadataBase warning
  metadataBase: new URL('https://asralov.dev'),
  
  title: {
    default: 'Abrorjon Asralov | Software Engineer & AI Specialist',
    template: '%s | Abrorjon Asralov',
  },
  description:
    'Software Engineer & AI Specialist. University of Arizona CS graduate specializing in high-throughput full-stack platforms, distributed systems, and machine learning applications.',
  keywords: [
    'Abrorjon Asralov',
    'Abror Asralov',
    'Software Engineer',
    'AI Specialist',
    'Full Stack Engineer',
    'Distributed Systems',
    'Machine Learning',
    'University of Arizona CS',
    'React',
    'Next.js',
    'TypeScript',
    'Java',
    'Python',
  ],
  authors: [{ name: 'Abrorjon Asralov', url: 'https://asralov.dev' }],
  creator: 'Abrorjon Asralov',
  publisher: 'Abrorjon Asralov',
  
  // 2. Open Graph Optimization
  openGraph: {
    title: 'Abrorjon Asralov | Software Engineer & AI Specialist',
    description:
      'Building scalable full-stack applications, distributed platforms, and machine learning solutions.',
    url: 'https://asralov.dev',
    siteName: 'Abrorjon Asralov Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abrorjon Asralov - Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 3. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Abrorjon Asralov | Software Engineer & AI Specialist',
    description:
      'Building scalable full-stack applications, distributed platforms, and machine learning solutions.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}