import React from 'react';
import { Metadata } from 'next';

import PrivacyPolicy from '@/modules/PrivacyPolicy';
import { client } from '@/sanity/client';
import { privacyPolicyPageQuery } from '@/query';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Clip Himalaya privacy policy. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Clip Himalaya',
    description: 'How Clip Himalaya collects, uses, and protects your personal information.',
  },
};

const PrivacyPolicyPage = async () => {
  const data = await client.fetch(privacyPolicyPageQuery);
  return <PrivacyPolicy data={data} />;
};

export default PrivacyPolicyPage;
