import React from 'react';
import { notFound } from 'next/navigation';

import TrekDetails from '@/modules/TrekDetails';
import RegionTreks from '@/modules/RegionTreks';
import { PagePropsType } from '@/types/page.type';
import { client } from '@/sanity/client';
import { trekDetailsQuery, regionDetailQuery } from '@/query';

export const revalidate = 30;

const TrekDetailsPage = async ({ params }: PagePropsType) => {
  const param = await params;
  const slug = param?.id;

  // First check if this slug matches a region
  const regionData = await client.fetch(regionDetailQuery, { slug });

  if (regionData?.region) {
    return <RegionTreks data={regionData} />;
  }

  // Otherwise treat it as a trek detail page
  const trekData = await client.fetch(trekDetailsQuery, { slug });

  if (!trekData) {
    notFound();
  }

  return <TrekDetails data={trekData} />;
};

export default TrekDetailsPage;
