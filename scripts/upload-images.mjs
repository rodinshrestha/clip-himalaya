import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import path from 'path';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-08',
  token: process.env.NEXT_PUBLIC_SANITY_API,
  useCdn: false,
});

const IMG_DIR = path.join(import.meta.dirname, 'images');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function uploadImage(filename, description) {
  await sleep(500);
  const filePath = path.join(IMG_DIR, filename);
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
    description,
  });
  console.log(`  ↑ uploaded ${filename} → ${asset._id}`);
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function patchDocument(docId, fields) {
  await client.patch(docId).set(fields).commit();
  console.log(`  ✓ patched ${docId}`);
}

async function run() {
  console.log('Uploading images to Sanity...\n');

  // ── Everest Region ──
  console.log('Everest Region:');
  const everestHero = await uploadImage('everest-hero.jpg', 'Everest region panorama');
  await patchDocument('region-everest', { image: everestHero });

  // ── Annapurna Region ──
  console.log('\nAnnapurna Region:');
  const annapurnaHero = await uploadImage('annapurna-hero.jpg', 'Annapurna massif panorama');
  await patchDocument('region-annapurna', { image: annapurnaHero });

  // ── Manaslu Region ──
  console.log('\nManaslu Region:');
  const manasluHero = await uploadImage('manaslu-hero.jpg', 'Himalayan peaks, alpine landscape');
  await patchDocument('region-manaslu', { image: manasluHero });

  // ── Everest Base Camp Trek ──
  console.log('\nEverest Base Camp Trek:');
  const ebcHero = await uploadImage('everest-trail.jpg', 'Trekking trail through Khumbu');
  const ebcGallery = [
    await uploadImage('everest-kalapathar.jpg', 'Mountain vista from Kala Patthar viewpoint'),
    await uploadImage('everest-namche.jpg', 'Namche Bazaar, the Sherpa capital at 3,440m'),
    await uploadImage('everest-prayer-flags.jpg', 'Prayer flags against Himalayan peaks on the EBC trail'),
    await uploadImage('everest-teahouse.jpg', 'Teahouse lodge on the Everest Base Camp trail'),
  ];
  await patchDocument('trek-everest-base-camp', {
    image: ebcHero,
    imageGallery: ebcGallery.map((img, i) => ({
      _type: 'imageGalleryList',
      _key: `ebc-gallery-${i}`,
      image: img,
    })),
  });

  // ── Annapurna Base Camp Trek ──
  console.log('\nAnnapurna Base Camp Trek:');
  const abcHero = await uploadImage('annapurna-trail.jpg', 'Trekking trail, Annapurna region');
  const abcGallery = [
    await uploadImage('annapurna-village.jpg', 'Gurung village with stone houses along the trail'),
    await uploadImage('annapurna-mountains.jpg', 'Annapurna range snow peaks'),
    await uploadImage('annapurna-teahouse.jpg', 'Teahouse along the Annapurna trail'),
    await uploadImage('annapurna-culture.jpg', 'Cultural scene on the Nepal trekking trail'),
  ];
  await patchDocument('trek-annapurna-base-camp', {
    image: abcHero,
    imageGallery: abcGallery.map((img, i) => ({
      _type: 'imageGalleryList',
      _key: `abc-gallery-${i}`,
      image: img,
    })),
  });

  // ── Manaslu Circuit Trek ──
  console.log('\nManaslu Circuit Trek:');
  const manasluTrekHero = await uploadImage('manaslu-trail.jpg', 'Mountain trail, high altitude');
  const manasluGallery = [
    await uploadImage('manaslu-village.jpg', 'Remote Himalayan village on the Manaslu Circuit'),
    await uploadImage('manaslu-monastery.jpg', 'Buddhist monastery in the mountains'),
    await uploadImage('manaslu-landscape.jpg', 'High-altitude glacial landscape, Manaslu region'),
    await uploadImage('manaslu-teahouse.jpg', 'Forest lodge on the Manaslu Circuit trail'),
  ];
  await patchDocument('trek-manaslu-circuit', {
    image: manasluTrekHero,
    imageGallery: manasluGallery.map((img, i) => ({
      _type: 'imageGalleryList',
      _key: `manaslu-gallery-${i}`,
      image: img,
    })),
  });

  console.log('\nDone. All images uploaded and linked.');
}

run().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
