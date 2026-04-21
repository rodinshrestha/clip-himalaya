import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import TrekDetails from '@/modules/TrekDetails';
import RegionTreks from '@/modules/RegionTreks';
import { PagePropsType } from '@/types/page.type';
import { client } from '@/sanity/client';
import { trekDetailsQuery, regionDetailQuery } from '@/query';
import { SITE_URL } from '@/constants/site.constant';
import { urlFor } from '@/sanity/client';

export const revalidate = 30;

export async function generateMetadata({ params }: PagePropsType): Promise<Metadata> {
  const param = await params;
  const slug = param?.id;

  const regionData = await client.fetch(regionDetailQuery, { slug });
  if (regionData?.region) {
    const region = regionData.region;
    const ogImage = region.image ? urlFor(region.image).width(1200).height(630).fit('crop').crop('entropy').url() : undefined;
    return {
      title: `${region.name} Treks`,
      description: `Explore trekking adventures in the ${region.name} of Nepal. Find guided treks, itineraries, and travel information.`,
      alternates: { canonical: `/treks/${slug}` },
      openGraph: {
        title: `${region.name} Treks | Clip Himalaya`,
        description: `Explore trekking adventures in the ${region.name} of Nepal.`,
        url: `${SITE_URL}/treks/${slug}`,
        ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: region.name }] }),
      },
    };
  }

  const trekData = await client.fetch(trekDetailsQuery, { slug });
  if (!trekData) return {};

  const ogImageSource = trekData.ogImage || trekData.image;
  const ogImage = ogImageSource ? urlFor(ogImageSource).width(1200).height(630).fit('crop').crop('entropy').url() : undefined;
  const title = trekData.seoTitle || trekData.title;
  const description = trekData.seoDescription || `${trekData.title} — ${trekData.difficult || 'Guided'} trek in Nepal. Book with expert local guides at Clip Himalaya.`;
  return {
    title,
    description,
    alternates: { canonical: `/treks/${slug}` },
    openGraph: {
      title: `${title} | Clip Himalaya`,
      description,
      url: `${SITE_URL}/treks/${slug}`,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] }),
    },
  };
}

function buildTrekJsonLd(trek: { title: string; slug: { current: string }; rating?: number; difficult?: string; image?: unknown }) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: trek.title,
    url: `${SITE_URL}/treks/${trek.slug?.current}`,
    touristType: 'Adventure traveler',
    provider: {
      '@type': 'TravelAgency',
      name: 'Clip Himalaya',
      url: SITE_URL,
    },
  };

  if (trek.image) {
    jsonLd.image = urlFor(trek.image).width(1200).height(630).fit('crop').crop('entropy').url();
  }

  if (trek.rating) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: trek.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
    };
  }

  return jsonLd;
}

const TrekDetailsPage = async ({ params }: PagePropsType) => {
  const param = await params;
  const slug = param?.id;

  const regionData = await client.fetch(regionDetailQuery, { slug });

  if (regionData?.region) {
    return <RegionTreks data={regionData} />;
  }

  const trekData = await client.fetch(trekDetailsQuery, { slug });

  if (!trekData) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildTrekJsonLd(trekData)) }}
      />
      <TrekDetails data={trekData} />
    </>
  );
};

export default TrekDetailsPage;
