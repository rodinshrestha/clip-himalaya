import React from 'react';

import OtherActivities from '@/modules/OtherActivities';
import { otherActivitiesPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

const OtherActivitiesPage = async () => {
  const data = await client.fetch(otherActivitiesPageQuery);
  return <OtherActivities data={data} />;
};

export default OtherActivitiesPage;
