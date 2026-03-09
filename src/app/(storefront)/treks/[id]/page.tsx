import React from 'react';

import TrekDetails from '@/modules/TrekDetails';
import { PagePropsType } from '@/types/page.type';
import { client } from '@/sanity/client';
import { trekDetailsQuery } from '@/query';

const TrekDetailsPage = async ({ params }: PagePropsType) => {
  const param = await params;

  const data = await client.fetch(
    trekDetailsQuery,
    { slug: param?.id } // 👈 pass it to GROQ
  );

  console.log(data, '@@@@');

  return <TrekDetails data={data} />;
};

export default TrekDetailsPage;
