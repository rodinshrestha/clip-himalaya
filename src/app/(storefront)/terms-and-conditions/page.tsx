import React from 'react';

import TermsAndCondition from '@/modules/TermsAndCondition';
import { client } from '@/sanity/client';
import { termConditionPageQuery } from '@/query';

const TermsAndConditionsPage = async () => {
  const data = await client.fetch(termConditionPageQuery);
  return <TermsAndCondition data={data} />;
};

export default TermsAndConditionsPage;
