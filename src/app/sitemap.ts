import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { SITE_URL } from '@/constants/site.constant';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [treks, regions, activities] = await Promise.all([
    client.fetch<{ slug: string; _updatedAt: string }[]>(
      `*[_type == "trekDetails" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`,
    ),
    client.fetch<{ slug: string; _updatedAt: string }[]>(
      `*[_type == "trekkingRegion" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`,
    ),
    client.fetch<{ slug: string; _updatedAt: string }[]>(
      `*[_type == "activityDetails" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`,
    ),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/treks`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/annapurna-circuit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/other-activities`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/our-story`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/our-team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const trekRoutes: MetadataRoute.Sitemap = treks.map((trek) => ({
    url: `${SITE_URL}/treks/${trek.slug}`,
    lastModified: new Date(trek._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const regionRoutes: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${SITE_URL}/treks/${region.slug}`,
    lastModified: new Date(region._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const activityRoutes: MetadataRoute.Sitemap = activities.map((activity) => ({
    url: `${SITE_URL}/other-activities/${activity.slug}`,
    lastModified: new Date(activity._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...regionRoutes, ...trekRoutes, ...activityRoutes];
}
