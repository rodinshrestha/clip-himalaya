import React from 'react';
import { magra, poppins } from '@/theme/fonts';
import { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/constants/site.constant';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Clip Himalaya | Trekking & Adventure in Nepal',
    template: `%s | ${SITE_NAME}`,
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clip Himalaya | Trekking & Adventure in Nepal',
    description:
      'Expert local guides, custom itineraries, and unforgettable Himalayan treks.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clip Himalaya - Trekking & Adventure in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clip Himalaya | Trekking & Adventure in Nepal',
    description:
      'Expert local guides, custom itineraries, and unforgettable Himalayan treks.',
    images: ['/images/og-image.jpg'],
  },
};

type Props = {
  children: React.ReactNode;
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'Nepal-based trekking company offering guided Himalayan adventures with expert local guides.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NP',
  },
  sameAs: [],
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${magra.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
