import React from 'react';

import Treks from '@/modules/Treks';
import { trekPageQuery } from '@/query';
import { client } from '@/sanity/client';

const TreksPage = async () => {
  const data = await client.fetch(trekPageQuery);
  console.log(data, '@@@@');

  return <Treks data={data} />;
};

export default TreksPage;
