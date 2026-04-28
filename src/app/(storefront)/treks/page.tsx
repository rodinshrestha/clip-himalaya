import React from 'react';
import { Metadata } from 'next';

import Treks from '@/modules/Treks';
import { trekPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Treks in Nepal',
  description:
    'Explore guided treks across Nepal — Everest Base Camp, Annapurna Circuit, Langtang Valley, Manaslu and more. Find your perfect Himalayan adventure.',
  alternates: { canonical: '/treks' },
  openGraph: {
    title: 'Treks in Nepal | Clip Himalaya',
    description: 'Guided treks across Everest, Annapurna, and Manaslu regions. Day-by-day itineraries, permits, and honest difficulty ratings.',
  },
};

const TreksPage = async () => {
  const data = await client.fetch(trekPageQuery);
  return <Treks data={data} />;
};

export default TreksPage;
