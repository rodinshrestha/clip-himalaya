import React from 'react';
import { magra, poppins } from '@/theme/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Clip Himalaya | Trekking & Adventure in Nepal',
    template: '%s | Clip Himalaya',
  },
  description:
    'Nepal-based trekking company offering guided Himalayan adventures. Expert local guides, custom itineraries, and unforgettable treks to Everest, Annapurna, Langtang & more.',
  keywords: [
    'Nepal trekking',
    'Himalaya adventure',
    'Everest Base Camp trek',
    'Annapurna Circuit',
    'guided treks Nepal',
    'Clip Himalaya',
  ],
  openGraph: {
    title: 'Clip Himalaya | Trekking & Adventure in Nepal',
    description:
      'Expert local guides, custom itineraries, and unforgettable Himalayan treks.',
    url: 'https://clip-himalaya.vercel.app',
    siteName: 'Clip Himalaya',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clip Himalaya | Trekking & Adventure in Nepal',
    description:
      'Expert local guides, custom itineraries, and unforgettable Himalayan treks.',
  },
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${magra.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
