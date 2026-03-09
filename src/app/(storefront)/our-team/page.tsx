import React from 'react';

import OurTeam from '@/modules/OurTeam';
import { client } from '@/sanity/client';
import { ourTeamPageQuery } from '@/query';
import { REVALIDATE } from '@/constants/revalidate.constant';

export const revalidate = 30;

const OurTeamPage = async () => {
  const data = await client.fetch(ourTeamPageQuery);

  return <OurTeam data={data} />;
};

export default OurTeamPage;
