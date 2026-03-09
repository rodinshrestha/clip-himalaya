import React from 'react';

import Home from '@/modules/Home';
import { client } from '@/sanity/client';
import { homePageQuery } from '@/query';
import { REVALIDATE } from '@/constants/revalidate.constant';

export const revalidate = 30;

const HomePage = async () => {
  const data = await client.fetch(homePageQuery);
  return <Home data={data} />;
};

export default HomePage;
