import React from 'react';
import { Metadata } from 'next';

import OurTeam from '@/modules/OurTeam';
import { client } from '@/sanity/client';
import { ourTeamPageQuery } from '@/query';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the expert local guides and adventure specialists behind Clip Himalaya. Experienced Nepali trekking professionals ready to lead your Himalayan adventure.',
  alternates: { canonical: '/our-team' },
  openGraph: {
    title: 'Our Team | Clip Himalaya',
    description: 'Experienced Nepali guides and adventure specialists. Meet the people who will lead your trek.',
  },
};

const OurTeamPage = async () => {
  const data = await client.fetch(ourTeamPageQuery);
  return <OurTeam data={data} />;
};

export default OurTeamPage;
