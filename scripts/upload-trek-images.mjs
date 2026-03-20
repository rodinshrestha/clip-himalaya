import { createClient } from '@sanity/client';
import https from 'https';
import http from 'http';

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

const trekImages = [
  {
    slug: 'annapurna-base-camp',
    url: 'https://images.unsplash.com/photo-1585409677983-0f6c41128c23?w=800&q=80',
  },
  {
    slug: 'langtang-valley-trek',
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
  },
  {
    slug: 'manaslu-circuit-trek',
    url: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80',
  },
  {
    slug: 'upper-mustang-trek',
    url: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80',
  },
  {
    slug: 'gokyo-lakes-trek',
    url: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80',
  },
];

async function uploadImages() {
  for (const trek of trekImages) {
    try {
      console.log(`Downloading image for ${trek.slug}...`);
      const buffer = await fetchBuffer(trek.url);

      console.log(`Uploading to Sanity...`);
      const asset = await client.assets.upload('image', buffer, {
        filename: `${trek.slug}.jpg`,
        contentType: 'image/jpeg',
      });

      console.log(`Patching trek document...`);
      const docs = await client.fetch(
        `*[_type == "trekDetails" && slug.current == $slug]{ _id }`,
        { slug: trek.slug }
      );

      if (docs.length > 0) {
        await client
          .patch(docs[0]._id)
          .set({
            image: {
              _type: 'image',
              asset: { _type: 'reference', _ref: asset._id },
            },
          })
          .commit();
        console.log(`Done: ${trek.slug}`);
      } else {
        console.log(`Trek not found: ${trek.slug}`);
      }
    } catch (err) {
      console.error(`Failed: ${trek.slug}`, err.message);
    }
  }
  console.log('All images uploaded!');
}

uploadImages();
