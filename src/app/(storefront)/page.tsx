import React from 'react';
import { Metadata } from 'next';

import Home from '@/modules/Home';
import { client } from '@/sanity/client';
import { homePageQuery } from '@/query';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Clip Himalaya | Trekking & Adventure in Nepal',
  description:
    'Nepal-based trekking company offering guided Himalayan adventures. Expert local guides, custom itineraries, and unforgettable treks to Everest, Annapurna, Langtang & more.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Clip Himalaya | Trekking & Adventure in Nepal',
    description: 'Expert local guides, custom itineraries, and guided Himalayan treks across Everest, Annapurna, and Manaslu.',
  },
};

const HomePage = async () => {
  const data = await client.fetch(homePageQuery);
  return <Home data={data} />;
};

export default HomePage;
