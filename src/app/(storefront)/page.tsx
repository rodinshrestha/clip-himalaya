import React from 'react';

import Home from '@/modules/Home';
import { client } from '@/sanity/client';
import { homePageQuery } from '@/query';

const HomePage = async () => {
  const data = await client.fetch(homePageQuery);
  return <Home data={data} />;
};

export default HomePage;
