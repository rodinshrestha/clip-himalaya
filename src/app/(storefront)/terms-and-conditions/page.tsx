import React from 'react';

import TermsAndCondition from '@/modules/TermsAndCondition';
import { client } from '@/sanity/client';
import { termConditionPageQuery } from '@/query';
import { REVALIDATE } from '@/constants/revalidate.constant';

export const revalidate = REVALIDATE;

const TermsAndConditionsPage = async () => {
  const data = await client.fetch(termConditionPageQuery);
  return <TermsAndCondition data={data} />;
};

export default TermsAndConditionsPage;
