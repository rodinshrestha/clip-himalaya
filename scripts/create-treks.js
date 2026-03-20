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

// Reusable images from existing treks
const images = {
  everest: 'image-56f86010e453a7f9250611d46fd865777395cf74-736x736-jpg',
  gokyo: 'image-49a48b1e337ff9b6affddf5fa5362b670baaa2b8-800x600-jpg',
  annapurna: 'image-dd28165ece363b28e08c868200cadaa3769fa52a-800x533-jpg',
  langtang: 'image-17a1f3f0ba2d6a218d29fef8a6a3b4bc4a351eaa-800x533-jpg',
  mustang: 'image-56dfdc5acb50fbc104acec2c130cf72e37674739-800x533-jpg',
  manaslu: 'image-7129f8cf23a9723f63e894a4df4291af96751217-800x533-jpg',
};

function makeImage(ref) {
  return { _type: 'image', asset: { _type: 'reference', _ref: ref } };
}

function makeDesc(text) {
  return [
    {
      _type: 'block',
      _key: Math.random().toString(36).slice(2),
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: 'a', text, marks: [] }],
    },
  ];
}

function makeSlug(title) {
  return {
    _type: 'slug',
    current: title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, ''),
  };
}

const newTreks = [
  // === EVEREST REGION ===
  {
    title: 'Everest Base Camp Trek - Standard Service',
    region: 'region-everest',
    image: images.everest,
    rating: 5,
    difficult: 'Moderate to Difficult',
    desc: 'The classic Everest Base Camp trek through the legendary Khumbu region. Walk in the footsteps of Tenzing and Hillary on this iconic 15-day journey to the base of the world\'s highest peak.',
  },
  {
    title: 'Everest Base Camp Trek - Luxury Service',
    region: 'region-everest',
    image: images.everest,
    rating: 5,
    difficult: 'Moderate to Difficult',
    desc: 'Experience the Everest Base Camp trek with premium lodge accommodations, gourmet meals, and personalized service. A 13-day luxury trekking experience in the Himalayas.',
  },
  {
    title: 'Everest Gokyo Trek (5,420m)',
    region: 'region-everest',
    image: images.gokyo,
    rating: 5,
    difficult: 'Moderate to Difficult',
    desc: 'Trek to the stunning turquoise Gokyo Lakes and climb Gokyo Ri for breathtaking panoramic views of Everest, Lhotse, Makalu, and Cho Oyu. An 18-day adventure off the beaten path.',
  },
  {
    title: 'Everest View Point Trek (3,900m)',
    region: 'region-everest',
    image: images.everest,
    rating: 4,
    difficult: 'Easy to Moderate',
    desc: 'A shorter 8-day trek ideal for those with limited time. Enjoy stunning views of Everest and surrounding peaks from Namche Bazaar and the famous Everest View Hotel.',
  },
  {
    title: 'Everest Base Camp Via Gokyo Chola Pass Trek (5,420m)',
    region: 'region-everest',
    image: images.gokyo,
    rating: 5,
    difficult: 'Difficult',
    desc: 'Combine the best of both worlds — Gokyo Lakes and Everest Base Camp via the challenging Chola Pass. An epic 18-day traverse through the heart of the Khumbu.',
  },
  {
    title: 'Everest 3 High Passes Trek',
    region: 'region-everest',
    image: images.everest,
    rating: 5,
    difficult: 'Difficult',
    desc: 'The ultimate Everest region challenge. Cross three high passes — Kongma La, Cho La, and Renjo La — on this demanding 20-day trek for experienced trekkers.',
  },

  // === ANNAPURNA REGION ===
  {
    title: 'Poon Hill Annapurna Base Camp Trek',
    region: 'region-annapurna',
    image: images.annapurna,
    rating: 5,
    difficult: 'Moderate',
    desc: 'Combine the iconic Poon Hill sunrise viewpoint with the journey to Annapurna Base Camp. A 13-day trek through lush rhododendron forests and traditional Gurung villages.',
  },
  {
    title: 'Annapurna Circuit | Throng La Pass Trek',
    region: 'region-annapurna',
    image: images.annapurna,
    rating: 5,
    difficult: 'Moderate to Difficult',
    desc: 'One of the world\'s greatest treks. Circle the entire Annapurna massif, crossing the 5,416m Throng La Pass on this epic 17-day journey through diverse landscapes and cultures.',
  },
  {
    title: 'Mardi Himal Trek',
    region: 'region-annapurna',
    image: images.annapurna,
    rating: 4,
    difficult: 'Moderate',
    desc: 'A hidden gem in the Annapurna region. This 10-day trek offers stunning close-up views of Mardi Himal, Machhapuchhre (Fishtail), and the Annapurna range along a less-crowded trail.',
  },
  {
    title: 'Ghorepani Poon Hill Trek',
    region: 'region-annapurna',
    image: images.annapurna,
    rating: 4,
    difficult: 'Easy to Moderate',
    desc: 'The perfect short trek for breathtaking Himalayan views. This 8-day trek takes you to Poon Hill for a spectacular sunrise over Dhaulagiri, Annapurna, and Machhapuchhre.',
  },
  {
    title: 'Tent Peak Climbing (5,850m)',
    region: 'region-annapurna',
    image: images.annapurna,
    rating: 4,
    difficult: 'Difficult',
    desc: 'A thrilling 21-day climbing expedition to Tent Peak (Tharpu Chuli) at 5,850m. Ideal for aspiring mountaineers looking for their first Himalayan peak climbing experience.',
  },
  {
    title: 'Damodar Kunda Trek (4,890m)',
    region: 'region-annapurna',
    image: images.mustang,
    rating: 4,
    difficult: 'Moderate to Difficult',
    desc: 'A sacred pilgrimage trek to the holy Damodar Kunda lake at 4,890m. This remote 23-day journey through the Upper Mustang region offers a unique cultural and spiritual experience.',
  },

  // === LANGTANG REGION ===
  {
    title: 'Langtang Gosaikunda Trek',
    region: 'region-langtang',
    image: images.langtang,
    rating: 4,
    difficult: 'Moderate to Difficult',
    desc: 'Combine the beautiful Langtang Valley with the sacred Gosaikunda Lakes. A 16-day trek through alpine meadows, glacial valleys, and holy lakes revered by Hindus and Buddhists.',
  },
  {
    title: 'Naya Khang Peak (5,884m)',
    region: 'region-langtang',
    image: images.langtang,
    rating: 4,
    difficult: 'Difficult',
    desc: 'A challenging 24-day climbing expedition to Naya Khang Peak at 5,884m in the Langtang region. Offers stunning views of Langtang Lirung, Dorje Lakpa, and the Tibetan plateau.',
  },

  // === DHAULAGIRI REGION ===
  {
    title: 'Dhaulagiri Round Trek',
    region: 'region-dhaulagiri',
    image: images.manaslu,
    rating: 4,
    difficult: 'Difficult',
    desc: 'A demanding 21-day trek circling the world\'s seventh-highest peak, Dhaulagiri (8,167m). Cross the French Pass and explore hidden valleys, glaciers, and remote landscapes.',
  },

  // === MANASLU REGION ===
  {
    title: 'Tsum Valley Trek',
    region: 'region-manaslu',
    image: images.manaslu,
    rating: 4,
    difficult: 'Moderate',
    desc: 'Explore the sacred Tsum Valley, a hidden Himalayan gem. This 22-day trek takes you through ancient Buddhist monasteries, traditional stone villages, and stunning mountain scenery.',
  },

  // === OTHER REGION ===
  {
    title: 'Upper Mustang Via Throng La Pass',
    region: 'region-other',
    image: images.mustang,
    rating: 5,
    difficult: 'Moderate to Difficult',
    desc: 'A unique 25-day adventure combining the Annapurna Circuit with Upper Mustang. Cross Throng La Pass and explore the forbidden kingdom of Lo Manthang.',
  },
  {
    title: 'Kanchenjunga Base Camp Trek',
    region: 'region-other',
    image: images.everest,
    rating: 5,
    difficult: 'Difficult',
    desc: 'Trek to the base of the world\'s third-highest peak in far-eastern Nepal. A remote 26-day expedition through pristine wilderness, diverse ecosystems, and traditional Limbu villages.',
  },
  {
    title: 'Upper Dolpo Trek',
    region: 'region-other',
    image: images.mustang,
    rating: 4,
    difficult: 'Difficult',
    desc: 'One of Nepal\'s most remote and culturally rich treks. This 26-day journey through Upper Dolpo offers Tibetan Buddhist culture, crystal-clear Phoksundo Lake, and untouched landscapes.',
  },
];

async function run() {
  // Get existing treks to avoid duplicates
  const existing = await client.fetch('*[_type == "trekDetails"]{ title }');
  const existingTitles = new Set(existing.map((t) => t.title));
  console.log('Existing treks:', existingTitles.size);

  let created = 0;
  for (const trek of newTreks) {
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
      region: { _type: 'reference', _ref: trek.region },
    };

    const result = await client.create(doc);
    console.log('CREATED:', result.title, '->', trek.region);
    created++;
  }

  // Also reassign existing treks that might be missing region refs
  const reassignMap = {
    'Everest Base Camp': 'region-everest',
    'Gokyo Lakes Trek': 'region-everest',
    'Annapurna Base Camp': 'region-annapurna',
    'Upper Mustang Trek': 'region-other',
    'Langtang Valley Trek': 'region-langtang',
    'Manaslu Circuit Trek': 'region-manaslu',
  };

  const allTreks = await client.fetch(
    '*[_type == "trekDetails"]{ _id, title, region }'
  );
  for (const trek of allTreks) {
    if (reassignMap[trek.title] && !trek.region) {
      await client
        .patch(trek._id)
        .set({ region: { _type: 'reference', _ref: reassignMap[trek.title] } })
        .commit();
      console.log('REASSIGNED:', trek.title, '->', reassignMap[trek.title]);
    }
  }

  // Final verification
  const regions = await client.fetch(
    '*[_type == "trekkingRegion"] | order(order asc) { name, "trekCount": count(*[_type == "trekDetails" && region._ref == ^._id]) }'
  );
  console.log('\n=== Final Region Summary ===');
  regions.forEach((r) => console.log(r.name, '-', r.trekCount, 'packages'));
  console.log('\nTotal treks created:', created);
}

run().catch((e) => console.error(e));
