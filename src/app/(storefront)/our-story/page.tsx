import React from 'react';
import { Metadata } from 'next';

import OurStory from '@/modules/OurStory';
import { ourStoryQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn about Clip Himalaya — our journey, passion for the Himalayas, and commitment to safe, authentic trekking experiences in Nepal.',
  alternates: { canonical: '/our-story' },
  openGraph: {
    title: 'Our Story | Clip Himalaya',
    description: 'A Nepal-born trekking company built by guides who grew up on these trails. Our story, values, and commitment to fair-wage portering.',
  },
};

const OurStoryPage = async () => {
  const data = await client.fetch(ourStoryQuery);
  return <OurStory data={data} />;
};

export default OurStoryPage;
