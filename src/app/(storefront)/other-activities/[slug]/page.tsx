import React from 'react';
import { notFound } from 'next/navigation';

import ActivityDetails from '@/modules/ActivityDetails';
import { PagePropsType } from '@/types/page.type';
import { client } from '@/sanity/client';
import { activityDetailsQuery } from '@/query';

export const revalidate = 30;

const ActivityDetailsPage = async ({ params }: PagePropsType) => {
  const param = await params;
  const slug = param?.slug;

  const data = await client.fetch(activityDetailsQuery, { slug });

  if (!data) {
    notFound();
  }

  return <ActivityDetails data={data} />;
};

export default ActivityDetailsPage;
