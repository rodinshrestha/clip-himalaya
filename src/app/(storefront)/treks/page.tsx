import React from 'react';

import Treks from '@/modules/Treks';
import { trekPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

const TreksPage = async () => {
  const data = await client.fetch(trekPageQuery);

  return <Treks data={data} />;
};

export default TreksPage;
