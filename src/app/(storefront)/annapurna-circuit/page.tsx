import React from 'react';
import { Metadata } from 'next';

import AnnapurnaCircuit from '@/modules/AnnapurnaCircuit';
import { annapurnaPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Annapurna Circuit Trek',
  description:
    'Complete guide to the Annapurna Circuit Trek in Nepal — itinerary, difficulty, best season, and booking. Trek with expert local guides from Clip Himalaya.',
  alternates: { canonical: '/annapurna-circuit' },
  openGraph: {
    title: 'Annapurna Circuit Trek | Clip Himalaya',
    description: 'Day-by-day Annapurna Circuit itinerary, Thorong La pass details, best seasons, and what to expect from 14–21 days around the Annapurna massif.',
  },
};

const AnnapurnaCircuitPage = async () => {
  const data = await client.fetch(annapurnaPageQuery);
  return <AnnapurnaCircuit data={data} />;
};

export default AnnapurnaCircuitPage;
