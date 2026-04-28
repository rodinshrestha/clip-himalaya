import React from 'react';
import { Metadata } from 'next';

import TermsAndCondition from '@/modules/TermsAndCondition';
import { client } from '@/sanity/client';
import { termConditionPageQuery } from '@/query';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Review the terms and conditions for booking treks and adventures with Clip Himalaya.',
  alternates: { canonical: '/terms-and-conditions' },
  openGraph: {
    title: 'Terms & Conditions | Clip Himalaya',
    description: 'Booking terms, cancellation policy, and conditions for Clip Himalaya treks and adventures.',
  },
};

const TermsAndConditionsPage = async () => {
  const data = await client.fetch(termConditionPageQuery);
  return <TermsAndCondition data={data} />;
};

export default TermsAndConditionsPage;
