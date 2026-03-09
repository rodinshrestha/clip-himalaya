import React from 'react';

import OurStory from '@/modules/OurStory';
import { ourStoryQuery } from '@/query';
import { client } from '@/sanity/client';

const OurStoryPage = async () => {
  const data = await client.fetch(ourStoryQuery);

  return <OurStory data={data} />;
};

export default OurStoryPage;
