import React from 'react';
import { Metadata } from 'next';

import OtherActivities from '@/modules/OtherActivities';
import { otherActivitiesPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Custom Treks & Other Adventures',
  description:
    'Beyond our flagship regions — Langtang, Upper Mustang, Dolpo, Kanchenjunga, peak climbing, cultural tours. Tell us what you want, we will tailor the journey.',
  alternates: { canonical: '/other-activities' },
  openGraph: {
    title: 'Custom Treks & Other Adventures | Clip Himalaya',
    description: 'Langtang, Upper Mustang, Dolpo, Kanchenjunga, peak climbing, and cultural tours — tailored to your group.',
  },
};

const OtherActivitiesPage = async () => {
  const data = await client.fetch(otherActivitiesPageQuery);
  return <OtherActivities data={data} />;
};

export default OtherActivitiesPage;
