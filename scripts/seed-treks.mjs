import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const treks = [
  {
    _type: 'trekDetails',
    title: 'Annapurna Base Camp',
    slug: { _type: 'slug', current: 'annapurna-base-camp' },
    rating: 5,
    difficult: 'Moderate',
    helperTitle: 'The Classic Annapurna Sanctuary Trek',
    trekDescription: [
      {
        _type: 'block',
        _key: 'abc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'abc1s',
            text: 'The Annapurna Base Camp trek takes you deep into the heart of the Annapurna Sanctuary, surrounded by towering peaks including Annapurna I (8,091m), Machapuchare, and Hiunchuli. This 10-14 day trek passes through lush rhododendron forests, traditional Gurung villages, and natural hot springs before reaching the stunning amphitheatre of the base camp at 4,130m.',
          },
        ],
      },
    ],
    keyHighlights: [
      'Panoramic views of Annapurna massif',
      'Visit traditional Gurung villages',
      'Natural hot springs at Jhinu Danda',
      'Rhododendron forests in bloom (March-April)',
    ],
    costInclude: [
      'Airport pickup and drop',
      'All meals during the trek',
      'Experienced English-speaking guide',
      'TIMS permit and ACAP entry fees',
    ],
    costExclude: [
      'International airfare',
      'Travel insurance',
      'Personal gear and equipment',
      'Tips for guide and porters',
    ],
  },
  {
    _type: 'trekDetails',
    title: 'Langtang Valley Trek',
    slug: { _type: 'slug', current: 'langtang-valley-trek' },
    rating: 4,
    difficult: 'Moderate',
    helperTitle: 'The Valley of Glaciers',
    trekDescription: [
      {
        _type: 'block',
        _key: 'def1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'def1s',
            text: 'The Langtang Valley trek is one of the most accessible treks from Kathmandu, offering stunning mountain scenery, rich Tamang culture, and pristine wilderness. The trail follows the Langtang River through bamboo and rhododendron forests to the high alpine pastures of Kyanjin Gompa at 3,870m. This 7-10 day trek is perfect for those with limited time who still want an authentic Himalayan experience.',
          },
        ],
      },
    ],
    keyHighlights: [
      'Close to Kathmandu - easy access',
      'Rich Tamang heritage and culture',
      'Kyanjin Gompa monastery visit',
      'Stunning Langtang Lirung views (7,227m)',
    ],
    costInclude: [
      'Airport pickup and drop',
      'All meals during the trek',
      'Experienced guide and porter',
      'National park entry permit',
    ],
    costExclude: [
      'International airfare',
      'Travel insurance',
      'Personal expenses',
      'Tips for guide and porters',
    ],
  },
  {
    _type: 'trekDetails',
    title: 'Manaslu Circuit Trek',
    slug: { _type: 'slug', current: 'manaslu-circuit-trek' },
    rating: 5,
    difficult: 'Challenging',
    helperTitle: 'The Hidden Gem of Nepal Trekking',
    trekDescription: [
      {
        _type: 'block',
        _key: 'ghi1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'ghi1s',
            text: "The Manaslu Circuit is a stunning alternative to the crowded Annapurna Circuit. Circling the world's eighth-highest peak, Manaslu (8,163m), this 14-18 day trek traverses remote villages, ancient monasteries, and the dramatic Larkya La pass at 5,160m. With restricted access requiring special permits, the trail remains pristine and uncrowded — a true wilderness adventure.",
          },
        ],
      },
    ],
    keyHighlights: [
      'Remote and less crowded trail',
      'Larkya La Pass crossing (5,160m)',
      'Tibetan Buddhist culture and monasteries',
      'Diverse landscapes from subtropical to alpine',
    ],
    costInclude: [
      'Special restricted area permit',
      'All meals during the trek',
      'Experienced guide and porter',
      'TIMS card and conservation fees',
    ],
    costExclude: [
      'International airfare',
      'Travel insurance',
      'Sleeping bag rental',
      'Tips for guide and porters',
    ],
  },
  {
    _type: 'trekDetails',
    title: 'Upper Mustang Trek',
    slug: { _type: 'slug', current: 'upper-mustang-trek' },
    rating: 5,
    difficult: 'Moderate',
    helperTitle: 'The Last Forbidden Kingdom',
    trekDescription: [
      {
        _type: 'block',
        _key: 'jkl1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'jkl1s',
            text: "Upper Mustang, the ancient Kingdom of Lo, is a hidden treasure in Nepal's rain shadow. This 12-16 day trek reveals a surreal landscape of red and ochre cliffs, ancient cave dwellings, and walled city of Lo Manthang. The Tibetan-influenced culture, centuries-old monasteries, and dramatic desert-like terrain make this one of Nepal's most unique trekking experiences.",
          },
        ],
      },
    ],
    keyHighlights: [
      'Walled city of Lo Manthang',
      'Ancient cave monasteries and sky caves',
      'Rain shadow desert landscape',
      'Rich Tibetan Buddhist heritage',
    ],
    costInclude: [
      'Special restricted area permit ($500)',
      'All meals and accommodation',
      'Experienced guide and porter',
      'ACAP entry permit',
    ],
    costExclude: [
      'International airfare',
      'Travel insurance',
      'Personal expenses and souvenirs',
      'Tips for guide and porters',
    ],
  },
  {
    _type: 'trekDetails',
    title: 'Gokyo Lakes Trek',
    slug: { _type: 'slug', current: 'gokyo-lakes-trek' },
    rating: 4,
    difficult: 'Challenging',
    helperTitle: 'Turquoise Lakes & Everest Views',
    trekDescription: [
      {
        _type: 'block',
        _key: 'mno1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'mno1s',
            text: 'The Gokyo Lakes trek offers a breathtaking alternative route in the Everest region. Instead of heading to Base Camp, this 12-14 day trek takes you to the stunning turquoise Gokyo Lakes and the summit of Gokyo Ri (5,357m) for panoramic views of four 8,000m peaks including Everest, Lhotse, Makalu, and Cho Oyu. The Ngozumpa Glacier, the largest in Nepal, adds to the dramatic scenery.',
          },
        ],
      },
    ],
    keyHighlights: [
      'Stunning turquoise Gokyo Lakes',
      'Gokyo Ri summit panoramic views',
      'Ngozumpa Glacier — largest in Nepal',
      'Views of four 8,000m+ peaks',
    ],
    costInclude: [
      'Domestic flights Kathmandu-Lukla',
      'All meals during the trek',
      'Experienced guide and porter',
      'Sagarmatha National Park permit',
    ],
    costExclude: [
      'International airfare',
      'Travel insurance',
      'Personal gear and equipment',
      'Tips for guide and porters',
    ],
  },
];

async function seed() {
  console.log('Seeding treks...');
  for (const trek of treks) {
    try {
      const result = await client.create(trek);
      console.log(`Created: ${trek.title} (${result._id})`);
    } catch (err) {
      console.error(`Failed: ${trek.title}`, err.message);
    }
  }
  console.log('Done!');
}

seed();
