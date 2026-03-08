import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '@/sanity/env';

export const apiVersion = '2026-03-08'; // 2026 - march - 08

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set to false if you want fresh data
});

// Helper to generate image URLs
export const urlFor = (source: any) => imageUrlBuilder(client).image(source);
