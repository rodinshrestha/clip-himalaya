import React from 'react';

import PrivacyPolicy from '@/modules/PrivacyPolicy';
import { client } from '@/sanity/client';
import { privacyPolicyPageQuery } from '@/query';

export const revalidate = 30;

const PrivacyPolicyPage = async () => {
  const data = await client.fetch(privacyPolicyPageQuery);
  return <PrivacyPolicy data={data} />;
};

export default PrivacyPolicyPage;
