const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.NEXT_PUBLIC_SANITY_API || 'sk6zw2p0jfIzE2kfPlD0oe1oCHKsrRwL3gARiTfhUFImM31oFdbVJro1gmP6MdfKtobYKk6hWpugpngh7lFaqVGdYQSWjqY0f0681Dtbz74AtDOgWJzt8PZGS98hbnu3VSdEcgorKTrir3QisdM8xsQuiTKzuSWsW1W5BSYLgWnsnsuGKaMu',
  useCdn: false,
});

function block(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).slice(2, 10),
        text,
        marks: [],
      },
    ],
  };
}

function h3Block(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'h3',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).slice(2, 10),
        text,
        marks: [],
      },
    ],
  };
}

const activities = [
  {
    _id: 'activity-mountain-bike',
    _type: 'activityDetails',
    title: 'Mountain Bike',
    slug: { _type: 'slug', current: 'mountain-bike' },
    shortDescription:
      "Experience the thrill of mountain biking through Nepal's rugged terrain, from lush valleys to high-altitude trails with breathtaking Himalayan views.",
    description: [
      block(
        "Nepal is a mountain biker's paradise, offering some of the most diverse and thrilling trails in the world. From the rolling hills of Kathmandu Valley to the dramatic descents along ancient trade routes, every ride is an adventure."
      ),
      h3Block('What to Expect'),
      block(
        'Our mountain biking tours cater to all skill levels. Beginners can enjoy scenic rides through traditional Newari villages and terraced farmland, while experienced riders can tackle challenging single-track trails that wind through rhododendron forests and alongside rushing rivers.'
      ),
      h3Block('Popular Routes'),
      block(
        'The Kathmandu Valley Rim offers a full-day ride with panoramic views of the Himalayas. The Annapurna Circuit by bike is a multi-day adventure that combines cycling with cultural immersion. For downhill enthusiasts, the trail from Nagarkot to Changu Narayan is an unforgettable descent.'
      ),
      block(
        'All tours include a well-maintained mountain bike, safety gear, an experienced guide, and support vehicle for longer rides. We also arrange accommodation and meals for multi-day trips.'
      ),
    ],
    highlights: [
      {
        _key: 'h1',
        _type: 'object',
        title: 'Diverse Terrain',
        description:
          'From smooth valley roads to rugged mountain single-tracks, Nepal offers trails for every skill level.',
      },
      {
        _key: 'h2',
        _type: 'object',
        title: 'Himalayan Views',
        description:
          'Ride with stunning panoramic views of peaks like Everest, Annapurna, and Langtang.',
      },
      {
        _key: 'h3',
        _type: 'object',
        title: 'Cultural Immersion',
        description:
          'Pass through remote villages, ancient temples, and experience authentic Nepali hospitality.',
      },
      {
        _key: 'h4',
        _type: 'object',
        title: 'Expert Guides',
        description:
          'Our experienced guides know every trail and ensure your safety throughout the journey.',
      },
    ],
  },
  {
    _id: 'activity-heli-tours',
    _type: 'activityDetails',
    title: 'Heli Tours',
    slug: { _type: 'slug', current: 'heli-tours' },
    shortDescription:
      'Witness the majesty of the Himalayas from above with our exclusive helicopter tours to Everest Base Camp, Annapurna, and other iconic destinations.',
    description: [
      block(
        "For those who want to experience the grandeur of the Himalayas without the long trek, our helicopter tours offer a once-in-a-lifetime aerial adventure. Soar above the world's highest peaks and land at iconic locations that would otherwise take days to reach on foot."
      ),
      h3Block('Everest Base Camp Heli Tour'),
      block(
        "Our most popular tour takes you from Kathmandu to Everest Base Camp in just a few hours. Fly over the Khumbu region, witness the Khumbu Icefall, and land at Kala Patthar or Everest Base Camp for photos with the world's tallest peak as your backdrop. The tour includes a breakfast stop at Lukla or Syangboche."
      ),
      h3Block('Annapurna Base Camp Heli Tour'),
      block(
        'Fly into the heart of the Annapurna Sanctuary, surrounded by towering peaks including Machapuchare (Fishtail) and Annapurna I. This tour offers spectacular views of the Annapurna massif and the Modi Khola valley below.'
      ),
      block(
        'All helicopter tours are conducted with experienced pilots, and each flight is weather-dependent to ensure maximum safety. Group sizes are kept small for a personalized experience.'
      ),
    ],
    highlights: [
      {
        _key: 'h1',
        _type: 'object',
        title: 'Time Efficient',
        description:
          'Experience Everest Base Camp or Annapurna in hours instead of weeks of trekking.',
      },
      {
        _key: 'h2',
        _type: 'object',
        title: 'Aerial Views',
        description:
          "Witness unparalleled panoramic views of the world's highest peaks from above.",
      },
      {
        _key: 'h3',
        _type: 'object',
        title: 'Landing at Base Camp',
        description:
          'Touch down at iconic locations for photos and an unforgettable experience.',
      },
      {
        _key: 'h4',
        _type: 'object',
        title: 'Safe & Comfortable',
        description:
          'Modern helicopters with experienced pilots ensure a safe and comfortable journey.',
      },
    ],
  },
  {
    _id: 'activity-city-tour',
    _type: 'activityDetails',
    title: 'City Tour',
    slug: { _type: 'slug', current: 'city-tour' },
    shortDescription:
      'Explore the rich cultural heritage of Kathmandu Valley with guided tours to ancient temples, UNESCO World Heritage Sites, and vibrant local markets.',
    description: [
      block(
        'The Kathmandu Valley is a treasure trove of history, art, and culture. Our city tours take you through centuries of civilization, from ancient Hindu and Buddhist temples to medieval palace squares and bustling bazaars.'
      ),
      h3Block('Kathmandu City Tour'),
      block(
        "Visit the iconic Pashupatinath Temple, one of the holiest Hindu shrines in the world, and the magnificent Boudhanath Stupa, a UNESCO World Heritage Site and one of the largest Buddhist stupas in Asia. Explore the narrow alleys of Thamel, the vibrant tourist district, and the historic Kathmandu Durbar Square."
      ),
      h3Block('Bhaktapur & Patan Tour'),
      block(
        'Discover the ancient cities of Bhaktapur and Patan, renowned for their exquisite Newari architecture, intricate wood carvings, and pottery traditions that date back centuries. Walk through Bhaktapur Durbar Square and the Golden Temple of Patan.'
      ),
      h3Block('Nagarkot Sunrise Tour'),
      block(
        'Wake up early for a drive to Nagarkot, one of the best vantage points in the valley, where you can witness a breathtaking sunrise over the Himalayan range, including views of Mount Everest on clear days.'
      ),
    ],
    highlights: [
      {
        _key: 'h1',
        _type: 'object',
        title: 'UNESCO Heritage Sites',
        description:
          'Visit seven UNESCO World Heritage Sites within the Kathmandu Valley.',
      },
      {
        _key: 'h2',
        _type: 'object',
        title: 'Ancient Temples',
        description:
          'Explore Pashupatinath, Boudhanath, Swayambhunath, and many other sacred sites.',
      },
      {
        _key: 'h3',
        _type: 'object',
        title: 'Local Culture',
        description:
          'Experience the vibrant Newari culture, traditional crafts, and local cuisine.',
      },
      {
        _key: 'h4',
        _type: 'object',
        title: 'Expert Local Guides',
        description:
          'Knowledgeable guides bring history to life with engaging stories and insights.',
      },
    ],
  },
  {
    _id: 'activity-coffee-testing-farm-tour',
    _type: 'activityDetails',
    title: 'Coffee Testing / Farm Tour',
    slug: { _type: 'slug', current: 'coffee-testing-farm-tour' },
    shortDescription:
      "Journey from farm to cup with our unique coffee tour experience. Visit local coffee farms in the Himalayan foothills and taste some of Nepal's finest specialty coffee.",
    description: [
      block(
        "Nepal's coffee industry is one of the country's best-kept secrets. Grown in the fertile hills between 800 and 1,500 meters above sea level, Nepali coffee is known for its rich flavor profile, bright acidity, and unique terroir influenced by the Himalayan climate."
      ),
      h3Block('The Farm Experience'),
      block(
        "Our coffee farm tours take you to organic coffee plantations in regions like Nuwakot, Kavre, or Palpa. You'll meet local farmers, learn about sustainable farming practices, and see every step of the coffee production process — from cherry picking to sun drying, roasting, and brewing."
      ),
      h3Block('Coffee Tasting Session'),
      block(
        "The highlight of the tour is a guided coffee tasting (cupping) session where you'll explore the rich flavors and aromas that define Nepali specialty coffee. Our expert baristas will walk you through the tasting notes, from fruity and floral to chocolatey and nutty profiles."
      ),
      block(
        "This tour is perfect for coffee enthusiasts, photographers, and anyone who wants to experience a different side of Nepal beyond the mountains. It's not just a trek — it's a deeper connection to the land, the people, and the story behind every cup."
      ),
    ],
    highlights: [
      {
        _key: 'h1',
        _type: 'object',
        title: 'Farm to Cup Journey',
        description:
          'Experience the complete coffee production process from harvesting to brewing.',
      },
      {
        _key: 'h2',
        _type: 'object',
        title: 'Organic Farming',
        description:
          'Visit sustainable organic farms in the beautiful Himalayan foothills.',
      },
      {
        _key: 'h3',
        _type: 'object',
        title: 'Guided Tasting',
        description:
          "Professional cupping session to explore Nepal's unique coffee flavor profiles.",
      },
      {
        _key: 'h4',
        _type: 'object',
        title: 'Support Local Farmers',
        description:
          'Your tour directly supports local farming communities and sustainable agriculture.',
      },
    ],
  },
];

async function seed() {
  for (const activity of activities) {
    await client.createOrReplace(activity);
    console.log('Created:', activity.title);
  }

  // Update the other activities page
  await client.createOrReplace({
    _id: 'otherActivitiesPage',
    _type: 'otherActivitiesPage',
    heading:
      'Unleash Your Adventure: City Tours, Cultural Trips, Safaris & More',
    description:
      'As an adventure enthusiast, you may want to explore many other activities that Clip Himalaya offers. Be it a city tour, cultural trips, river rafting, jungle safaris or any customized trips that you may want to request.',
    sectionTitle: 'Other Activities',
  });
  console.log('Updated other activities page');
}

seed();
