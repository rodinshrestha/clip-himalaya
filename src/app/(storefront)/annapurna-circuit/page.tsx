import React from 'react';

import AnnapurnaCircuit from '@/modules/AnnapurnaCircuit';
import { annapurnaPageQuery } from '@/query';
import { client } from '@/sanity/client';
import { REVALIDATE } from '@/constants/revalidate.constant';

export const revalidate = 30;

const AnnapurnaCircuitPage = async () => {
  const data = await client.fetch(annapurnaPageQuery);

  return <AnnapurnaCircuit data={data} />;
};

export default AnnapurnaCircuitPage;
