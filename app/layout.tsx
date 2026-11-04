import type { Metadata, Viewport } from 'next';
import { DM_Sans, Hanken_Grotesk } from 'next/font/google';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kingly · Faith-Based Music, Podcasts & Listening Parties',
    template: '%s · Kingly',
  },
  description:
    'The next-generation faith-based audio platform. Discover high-fidelity music, sermons, interactive listening parties, custom discovery sliders, and creator tools.',
  keywords: [
    'Kingly',
    'Christian music',
    'Gospel streaming',
    'Faith podcasts',
    'Sermons',
    'Listening parties',
    'Worship audio',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#06060b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${dmSans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
