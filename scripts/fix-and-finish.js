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

function makeImage(ref) {
  return { _type: 'image', asset: { _type: 'reference', _ref: ref } };
}
function makeDesc(text) {
  return [{ _type: 'block', _key: Math.random().toString(36).slice(2), style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 'a', text, marks: [] }] }];
}
function makeSlug(title) {
  return { _type: 'slug', current: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') };
}

const images = {
  mustang: 'image-56dfdc5acb50fbc104acec2c130cf72e37674739-800x533-jpg',
  everest: 'image-56f86010e453a7f9250611d46fd865777395cf74-736x736-jpg',
  gokyo: 'image-49a48b1e337ff9b6affddf5fa5362b670baaa2b8-800x600-jpg',
};

async function run() {
  // Step 1: Recreate region-other
  console.log('Creating region-other...');
  await client.createOrReplace({
    _type: 'trekkingRegion',
    _id: 'region-other',
    name: 'Other Region',
    slug: { _type: 'slug', current: 'other-region' },
    image: makeImage(images.gokyo),
    order: 6,
  });
  console.log('Created: Other Region');

  // Step 2: Create the 3 remaining "Other Region" treks
  const otherTreks = [
    {
      title: 'Upper Mustang Via Throng La Pass',
      image: images.mustang,
      rating: 5,
      difficult: 'Moderate to Difficult',
      desc: 'A unique 25-day adventure combining the Annapurna Circuit with Upper Mustang. Cross Throng La Pass and explore the forbidden kingdom of Lo Manthang.',
    },
    {
      title: 'Kanchenjunga Base Camp Trek',
      image: images.everest,
      rating: 5,
      difficult: 'Difficult',
      desc: "Trek to the base of the world's third-highest peak in far-eastern Nepal. A remote 26-day expedition through pristine wilderness, diverse ecosystems, and traditional Limbu villages.",
    },
    {
      title: 'Upper Dolpo Trek',
      image: images.mustang,
      rating: 4,
      difficult: 'Difficult',
      desc: "One of Nepal's most remote and culturally rich treks. This 26-day journey through Upper Dolpo offers Tibetan Buddhist culture, crystal-clear Phoksundo Lake, and untouched landscapes.",
    },
  ];

  const existing = await client.fetch('*[_type == "trekDetails"]{ title }');
  const existingTitles = new Set(existing.map((t) => t.title));

  for (const trek of otherTreks) {
    if (existingTitles.has(trek.title)) {
      console.log('SKIP (exists):', trek.title);
      continue;
    }
    const doc = {
      _type: 'trekDetails',
      title: trek.title,
      slug: makeSlug(trek.title),
      image: makeImage(trek.image),
      rating: trek.rating,
      difficult: trek.difficult,
      trekDescription: makeDesc(trek.desc),
      region: { _type: 'reference', _ref: 'region-other' },
    };
    const result = await client.create(doc);
    console.log('CREATED:', result.title, '-> region-other');
  }

  // Step 3: Reassign existing "Upper Mustang Trek" to Other Region
  const allTreks = await client.fetch('*[_type == "trekDetails"]{ _id, title, region }');
  for (const trek of allTreks) {
    if (trek.title === 'Upper Mustang Trek' && (!trek.region || trek.region._ref !== 'region-other')) {
      await client.patch(trek._id).set({ region: { _type: 'reference', _ref: 'region-other' } }).commit();
      console.log('REASSIGNED:', trek.title, '-> region-other');
    }
    // Also fix any treks missing region refs
    if (!trek.region) {
      const regionMap = {
        'Everest Base Camp': 'region-everest',
        'Gokyo Lakes Trek': 'region-everest',
        'Annapurna Base Camp': 'region-annapurna',
        'Langtang Valley Trek': 'region-langtang',
        'Manaslu Circuit Trek': 'region-manaslu',
      };
      if (regionMap[trek.title]) {
        await client.patch(trek._id).set({ region: { _type: 'reference', _ref: regionMap[trek.title] } }).commit();
        console.log('REASSIGNED:', trek.title, '->', regionMap[trek.title]);
      }
    }
  }

  // Final verification
  const regions = await client.fetch('*[_type == "trekkingRegion"] | order(order asc) { name, "trekCount": count(*[_type == "trekDetails" && region._ref == ^._id]) }');
  console.log('\n=== Final Region Summary ===');
  let total = 0;
  regions.forEach((r) => {
    console.log(r.name, '-', r.trekCount, 'packages');
    total += r.trekCount;
  });
  console.log('Total treks:', total);
}

run().catch((e) => console.error(e));
