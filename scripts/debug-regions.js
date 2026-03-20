const fs = require('fs');
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach((line) => {
  const [key, ...val] = line.split('=');
  if (key && val.length) env[key.trim()] = val.join('=').trim();
});

const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-03-08',
  token: env.NEXT_PUBLIC_SANITY_API,
  useCdn: false,
});

async function run() {
  // Check all treks with their regionSlug
  const treks = await client.fetch(`*[_type == "trekDetails"] | order(title asc) {
    title,
    "regionName": region->name,
    "regionSlug": region->slug.current,
    "hasRegionRef": defined(region),
    "regionRef": region._ref
  }`);

  console.log('=== All Treks with Region Data ===');
  treks.forEach((t) => {
    console.log(
      `${t.title} | ref: ${t.regionRef || 'NONE'} | slug: ${t.regionSlug || 'NONE'} | name: ${t.regionName || 'NONE'}`
    );
  });

  // Check regions
  const regions = await client.fetch(`*[_type == "trekkingRegion"] | order(order asc) {
    _id,
    name,
    "slugCurrent": slug.current,
    "trekCount": count(*[_type == "trekDetails" && region._ref == ^._id])
  }`);

  console.log('\n=== Regions ===');
  regions.forEach((r) => {
    console.log(`${r._id} | ${r.name} | slug: ${r.slugCurrent} | treks: ${r.trekCount}`);
  });
}

run().catch((e) => console.error(e));
