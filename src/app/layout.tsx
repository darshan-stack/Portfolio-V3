import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import ChatBubble from '@/components/common/ChatBubble';
import FloatingStickers from '@/components/common/FloatingStickers';
import Footer from '@/components/common/Footer';
import MagicPortal from '@/components/common/MagicPortal';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import VisitorCounter from '@/components/common/VisitorCounter';
import WisdomQuote from '@/components/common/WisdomQuote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import { Geist_Mono, Newsreader, Caveat } from 'next/font/google';

import './globals.css';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-geist-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
        <body className={`${geistMono.variable} ${newsreader.variable} ${caveat.variable} font-mono antialiased text-sm overflow-x-hidden w-full`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <div className="overflow-x-hidden w-full">
                <FloatingStickers />
                <MagicPortal />
                <div className="max-w-4xl mx-auto">
                  <Navbar />
                  {children}
                  <OnekoCat />
                  <Quote />
                  <Footer />
                  <ChatBubble />
                  <VisitorCounter />
                  <WisdomQuote />
                  <UmamiAnalytics />
                </div>
              </div>
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
