import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ActivityDetails from '@/modules/ActivityDetails';
import { PagePropsType } from '@/types/page.type';
import { client } from '@/sanity/client';
import { activityDetailsQuery } from '@/query';
import { SITE_URL } from '@/constants/site.constant';
import { urlFor } from '@/sanity/client';

export const revalidate = 30;

export async function generateMetadata({ params }: PagePropsType): Promise<Metadata> {
  const param = await params;
  const slug = param?.slug;

  const data = await client.fetch(activityDetailsQuery, { slug });
  if (!data) return {};

  const ogImageSource = data.ogImage || data.image;
  const ogImage = ogImageSource ? urlFor(ogImageSource).width(1200).height(630).url() : undefined;
  const title = data.seoTitle || data.title;
  const description = data.seoDescription || data.shortDescription || `${data.title} — adventure activity in Nepal with Clip Himalaya.`;
  return {
    title,
    description,
    alternates: { canonical: `/other-activities/${slug}` },
    openGraph: {
      title: `${title} | Clip Himalaya`,
      description,
      url: `${SITE_URL}/other-activities/${slug}`,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] }),
    },
  };
}

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
