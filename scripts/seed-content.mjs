import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-04-01',
  token: process.env.NEXT_PUBLIC_SANITY_API,
  useCdn: false,
});

// ── Helpers ──

let keyCounter = 0;
function key(prefix = 'k') {
  keyCounter++;
  return `${prefix}-${keyCounter}`;
}

function portableText(text) {
  const k = key('block');
  return [
    {
      _type: 'block',
      _key: k,
      children: [{ _type: 'span', _key: `${k}-span`, text, marks: [] }],
      markDefs: [],
      style: 'normal',
    },
  ];
}

async function upsert(doc) {
  const result = await client.createOrReplace(doc);
  console.log(`✓ ${result._type} → ${result._id}`);
  return result;
}

// ── Trekking Regions ──

const regions = [
  {
    _id: 'region-everest',
    _type: 'trekkingRegion',
    name: 'Everest Region',
    slug: { _type: 'slug', current: 'everest-region' },
    order: 1,
    tagline: 'Where Sherpa culture meets the world\'s highest peaks',
    elevation: '2,800m – 5,364m',
    description: portableText(
      'The Khumbu valley is the gateway to Everest, but it\'s more than a single peak. The trail from Lukla winds through Sherpa villages — Namche Bazaar, Tengboche, Dingboche — each with its own monastery, rhythm, and teahouse character. The landscape shifts from rhododendron forest to alpine desert. Yak caravans share the path. Prayer flags snap in the wind at every pass.'
    ),
    culture:
      'Sherpa people have lived here for centuries, their culture shaped by Buddhism and altitude. Monasteries dot the hillsides. Tengboche hosts the famous Mani Rimdu festival in autumn. Expect warm hospitality, butter tea, and dal bhat served with quiet pride.',
    bestSeasons:
      'March–May (rhododendrons bloom, warmer mornings) and September–November (clearest skies, driest trails). December–February is cold but quiet — fewer trekkers, stunning light. June–August monsoon brings clouds and leeches below 4,000m.',
    whoItSuits:
      'Trekkers who want iconic Himalayan scenery with well-established trails and comfortable teahouses. Good for first-time high-altitude trekkers — the infrastructure is the best in Nepal. Not for solitude seekers in peak season.',
  },
  {
    _id: 'region-annapurna',
    _type: 'trekkingRegion',
    name: 'Annapurna Region',
    slug: { _type: 'slug', current: 'annapurna-region' },
    order: 2,
    tagline: 'Rice paddies to glaciers — Nepal\'s most diverse trekking corridor',
    elevation: '800m – 5,416m',
    description: portableText(
      'The Annapurna range wraps around the Kali Gandaki valley, the deepest gorge on earth. Trekking here means moving through climate zones — subtropical forests below Ghorepani, alpine meadows around Annapurna Base Camp, arid rain-shadow desert in Upper Mustang. The trails pass through Gurung and Magar villages where stone houses cluster around communal water taps.'
    ),
    culture:
      'Gurung and Magar communities define this region. The Gurungs are famous for their hospitality (and their honey hunters). Ghandruk and Chomrong feel like living museums. In the north, Thakali people serve some of the best food on any trek in Nepal — the dal bhat set in Tatopani is legendary.',
    bestSeasons:
      'October–November is peak (clear views, dry trails). March–April brings wildflower season — Ghorepani\'s rhododendron forest turns red and pink. The Annapurna Circuit\'s high pass, Thorong La, is open March–November.',
    whoItSuits:
      'Everyone from beginners (Poon Hill, 4 days) to experienced trekkers (Annapurna Circuit, 14–21 days). The range of difficulty and duration is wider than any other region. Great for cultural immersion.',
  },
  {
    _id: 'region-manaslu',
    _type: 'trekkingRegion',
    name: 'Manaslu Region',
    slug: { _type: 'slug', current: 'manaslu-region' },
    order: 3,
    tagline: 'Nepal\'s best-kept trekking secret — restricted, remote, real',
    elevation: '700m – 5,106m',
    description: portableText(
      'The Manaslu Circuit is the trek that Annapurna Circuit was 20 years ago — before the road. It circles the world\'s eighth-highest peak through the Budhi Gandaki gorge, crossing the Larkya La pass at 5,106m. The trail is rougher, lodges are simpler, and you won\'t see another group for hours. This is restricted-area trekking — you need a special permit and must travel with a registered agency.'
    ),
    culture:
      'Nubri and Tsum valley communities are ethnically Tibetan. Monasteries here have direct lineage to Tibet. In Samagaon and Samdo, you\'ll see prayer wheels the size of small buildings. The Tsum Valley, a side trip, is one of the last truly hidden valleys in the Himalaya.',
    bestSeasons:
      'September–November (clearest weather for the Larkya La crossing). March–May is possible but snow on the pass can be deep in early March. This is NOT a monsoon trek — the pass is closed June–August.',
    whoItSuits:
      'Experienced trekkers who want wilderness over comfort. You should be fit, comfortable with basic lodges (sleeping bags recommended), and okay with 6–8 hour walking days at altitude. Minimum group of 2 required for permit.',
  },
];

// ── Everest Base Camp Trek ──

const ebcTrek = {
  _id: 'trek-everest-base-camp',
  _type: 'trekDetails',
  title: 'Everest Base Camp Trek',
  slug: { _type: 'slug', current: 'everest-base-camp-trek' },
  helperTitle: 'Stand at the foot of the world\'s highest mountain — 5,364m, earned step by step',
  rating: 5,
  difficult: 'Moderate-Hard',
  region: { _type: 'reference', _ref: 'region-everest' },
  duration: '14 days',
  maxElevation: '5,364m (Everest Base Camp)',
  bestSeasons: 'March–May, September–November',
  startPoint: 'Lukla (2,860m)',
  endPoint: 'Lukla (2,860m)',
  groupSize: '2–12 people',
  permits: 'Sagarmatha National Park entry permit + TIMS card',
  trekDescription: portableText(
    'The Everest Base Camp trek follows the Dudh Kosi river valley from Lukla, climbing through Sherpa villages, crossing suspension bridges strung with prayer flags, and ascending into the stark beauty of the Khumbu glacier. You\'ll spend rest days in Namche Bazaar acclimatizing while exploring the Sherpa museum and Saturday market. The trail passes Tengboche monastery — the highest in the Khumbu — before entering the high-altitude desert of Lobuche and Gorak Shep. Base Camp itself sits on the Khumbu glacier moraine at 5,364m. On the return, a side trip to Kala Patthar (5,545m) at dawn gives you the closest unobstructed view of Everest\'s summit pyramid.'
  ),
  fitnessGuidance:
    'You don\'t need to be an athlete, but you do need to be honest about your fitness. Most days are 5–7 hours of walking on uneven terrain with 400–800m of elevation gain. The altitude, not the distance, is the challenge. If you can comfortably hike 15km with a daypack in hilly terrain, you\'re in the right range. Start training 8–10 weeks before departure — hill walking, stair climbing, and some cardio.',
  accommodationNotes:
    'Teahouses throughout. Basic but comfortable — twin beds, foam mattress, shared bathrooms. Hot showers available in lower villages (Rs 300–500). Above Namche, expect colder rooms and limited charging (Rs 200–400 per device). Food is simple and hearty: dal bhat, noodle soup, fried rice, eggs. Dal bhat is unlimited refills and your best value. Don\'t skip the Sherpa stew in Dingboche.',
  permitDetails:
    'Sagarmatha National Park entry permit (Rs 3,000 for SAARC nationals, $30 USD for others) and TIMS card (free with organized trek, $20 independent). We arrange both in Kathmandu before departure.',
  packingEssentials: [
    'Down jacket (-15°C rated)',
    'Broken-in trekking boots (ankle support)',
    'Sleeping bag liner (lodges provide blankets, but a liner is cleaner)',
    'Headlamp + spare batteries',
    'Water purification tablets or SteriPen',
    'Sunscreen SPF 50 + lip balm',
    'Trekking poles (save your knees on descent)',
    'Quick-dry base layers (3 sets)',
    'Rain shell',
    'Personal first aid + altitude medication (Diamox)',
  ],
  faqList: [
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Will I get altitude sickness?',
      answer:
        'Possibly. Most trekkers feel some symptoms above 3,500m — headache, mild nausea, shortness of breath. Our itinerary includes two acclimatization days. We carry oximeters and monitor your SpO2 daily. If symptoms worsen, we descend. No summit is worth your health.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Is there WiFi on the trail?',
      answer:
        'Yes, in most teahouses up to Lobuche. It costs Rs 300–500 per day and gets slower as you go higher. Above Gorak Shep, don\'t count on it. Download offline maps and entertainment before you leave Namche.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Can I charge my phone?',
      answer:
        'Solar charging is available at most teahouses for Rs 200–400. Bring a power bank (20,000mAh recommended). Conserve battery by switching to airplane mode when not using data.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'When should I book?',
      answer:
        'Peak season (Oct–Nov) fills up fast. Book 2–3 months ahead for those dates. Spring (Mar–May) is slightly less crowded. We can accommodate last-minute bookings in shoulder season.',
    },
  ],
  costInclude: [
    'Airport pickup and drop-off in Kathmandu',
    'Domestic flights: Kathmandu–Lukla–Kathmandu',
    'All teahouse accommodation during the trek',
    'Three meals per day on the trail',
    'Experienced English-speaking guide and porters',
    'Sagarmatha National Park permit and TIMS card',
    'Down jacket and sleeping bag (if needed, on loan)',
    'First aid kit including oximeter and oxygen',
  ],
  costExclude: [
    'International flights',
    'Nepal visa fees',
    'Travel insurance (mandatory, must cover helicopter evacuation)',
    'Personal expenses (hot showers, WiFi, charging, snacks)',
    'Tips for guide and porters',
    'Meals in Kathmandu',
    'Alcoholic and bottled beverages on the trail',
  ],
  keyHighlights: [
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Kala Patthar Sunrise',
      description: portableText(
        'The 5,545m viewpoint delivers the most iconic panorama in the Himalaya — Everest, Lhotse, Nuptse, and the entire Khumbu icefall lit gold at dawn.'
      ),
    },
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Tengboche Monastery',
      description: portableText(
        'The highest monastery in the Khumbu. Morning prayers echo across the valley. If you\'re here in November, you might catch the Mani Rimdu festival.'
      ),
    },
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Namche Bazaar',
      description: portableText(
        'The Sherpa capital, built into a horseshoe-shaped hillside at 3,440m. Saturday market, bakeries, gear shops, and acclimatization hikes to the Everest View Hotel.'
      ),
    },
  ],
  itineraryDetails: [
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 1: Kathmandu to Lukla, trek to Phakding (2,610m)',
      elevation: '2,860m → 2,610m (-250m)',
      walkingHours: '3–4 hours',
      itineraryDescription: portableText(
        'Early morning flight from Kathmandu to Lukla — one of the world\'s most dramatic airport landings, the runway tilted into a mountainside. From Lukla, a gentle descent through pine forest along the Dudh Kosi river to Phakding. Easy first day to find your trail legs.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 2: Phakding to Namche Bazaar (3,440m)',
      elevation: '2,610m → 3,440m (+830m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Cross and re-cross the river on suspension bridges draped in prayer flags. The final push to Namche is a steep 600m climb — the trail\'s first real test. Your first glimpse of Everest comes at a bend about two-thirds up. Namche sits in a natural amphitheatre, a bustling Sherpa trading town.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 3: Acclimatization day in Namche Bazaar',
      elevation: 'Day hike to 3,800m',
      walkingHours: '3–4 hours',
      itineraryDescription: portableText(
        'Climb high, sleep low. Morning hike to the Everest View Hotel (3,880m) for panoramic views of Everest, Ama Dablam, and Lhotse. Afternoon to explore Namche — the Sherpa Culture Museum, Saturday market if timing aligns, or just rest in a bakery with apple pie and coffee.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 4: Namche to Tengboche (3,860m)',
      elevation: '3,440m → 3,860m (+420m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Contour trail with views of Ama Dablam dominating the skyline. Descend to the Dudh Kosi, then climb through rhododendron and birch forest to Tengboche. The monastery sits on a ridge with Everest directly behind — one of the most photographed viewpoints on the trek.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 5: Tengboche to Dingboche (4,410m)',
      elevation: '3,860m → 4,410m (+550m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Drop down through forest to Pangboche — the oldest Sherpa village in the Khumbu. From here, the tree line ends and you enter a broader valley. Stone walls line the trail, yak pastures spread out. Dingboche sits in a wind-swept basin below the walls of Lhotse.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 6: Acclimatization day in Dingboche',
      elevation: 'Day hike to Nagarjun Hill (4,800m)',
      walkingHours: '3–4 hours',
      itineraryDescription: portableText(
        'Second acclimatization day. Hike up Nagarjun Hill for views of Makalu, Island Peak, and the Lhotse wall. Return to Dingboche for lunch. Afternoon rest — read, write, drink tea. Your body is adapting. Listen to it.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 7: Dingboche to Lobuche (4,940m)',
      elevation: '4,410m → 4,940m (+530m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Pass the memorial cairns for climbers lost on Everest — a sobering reminder of altitude\'s power. The trail crosses the terminal moraine of the Khumbu Glacier. Landscape is stark now — grey rock, ice, thin air. Lobuche is small, cold, and functional.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 8: Lobuche to Gorak Shep (5,170m), visit EBC (5,364m)',
      elevation: '4,940m → 5,364m → 5,170m',
      walkingHours: '7–8 hours',
      itineraryDescription: portableText(
        'Morning trek to Gorak Shep across rocky glacier moraine. Drop bags, eat lunch, then push on to Everest Base Camp. The trail follows the Khumbu Glacier — a chaotic landscape of ice towers and shifting rubble. Base Camp is marked by prayer flags and, in season, colourful expedition tents. Return to Gorak Shep before dark.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 9: Gorak Shep to Kala Patthar (5,545m), descend to Pheriche (4,371m)',
      elevation: '5,170m → 5,545m → 4,371m',
      walkingHours: '7–8 hours',
      itineraryDescription: portableText(
        'Pre-dawn start for Kala Patthar — the trek\'s highest point. Watch sunrise light up Everest\'s summit pyramid in gold and pink. Descend all the way to Pheriche, losing over 1,100m. Your lungs will thank you. Pheriche has a medical post and surprisingly good apple pie.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 10: Pheriche to Namche Bazaar (3,440m)',
      elevation: '4,371m → 3,440m (-931m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Long descent through familiar territory — but it looks different going down. More oxygen in each breath. Trees return. Colour returns. Back in Namche for a hot shower and a celebratory dinner. The bakeries feel like fine dining after a week of dal bhat.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 11: Namche to Lukla (2,860m)',
      elevation: '3,440m → 2,860m (-580m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Final trekking day. Retrace the trail along the Dudh Kosi, crossing those suspension bridges one last time. The air feels thick and warm. Arrive in Lukla for a farewell dinner with your guide and porters. Early sleep — tomorrow\'s flight leaves at dawn.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 12: Fly Lukla to Kathmandu',
      elevation: '2,860m → 1,400m',
      walkingHours: 'Flight day',
      itineraryDescription: portableText(
        'Early morning flight back to Kathmandu (weather permitting — always keep a buffer day). Transfer to hotel. The rest of the day is yours: Thamel\'s chaos, a proper restaurant meal, or just a long shower. You did it.'
      ),
    },
  ],
};

// ── Annapurna Base Camp Trek ──

const abcTrek = {
  _id: 'trek-annapurna-base-camp',
  _type: 'trekDetails',
  title: 'Annapurna Base Camp Trek',
  slug: { _type: 'slug', current: 'annapurna-base-camp-trek' },
  helperTitle: 'Walk into a glacial amphitheatre ringed by 7,000m and 8,000m peaks — 10 days from rice paddies to ice',
  rating: 5,
  difficult: 'Moderate',
  region: { _type: 'reference', _ref: 'region-annapurna' },
  duration: '10 days',
  maxElevation: '4,130m (Annapurna Base Camp)',
  bestSeasons: 'March–May, October–November',
  startPoint: 'Nayapul (1,070m)',
  endPoint: 'Nayapul (1,070m)',
  groupSize: '2–12 people',
  permits: 'ACAP entry permit + TIMS card',
  trekDescription: portableText(
    'The Annapurna Base Camp trek takes you from lowland rice terraces into the heart of the Annapurna Sanctuary — a natural amphitheatre encircled by Annapurna I (8,091m), Machapuchare\'s sacred fish-tail summit, Hiunchuli, and Annapurna South. The route passes through Gurung villages with slate-roofed houses, climbs through dense rhododendron forest (spectacular in March-April bloom), and follows the Modi Khola river gorge into the sanctuary. The final approach crosses bamboo forest and glacial moraine before opening into the base camp bowl — one of the most dramatic campsites in the Himalaya.'
  ),
  fitnessGuidance:
    'Moderate fitness required. Days average 5–6 hours of walking with some steep stone staircases (the "Nepali flat" — they\'re never flat). The altitude is lower than Everest, topping out at 4,130m, so altitude sickness is less common but still possible. If you walk regularly and can manage 12–15km hilly days, you\'ll be fine.',
  accommodationNotes:
    'Teahouses all the way — this route has good infrastructure. Lower villages (Ghorepani, Chhomrong) have hot showers and attached bathrooms. Higher up (Deurali, ABC) it\'s more basic: shared toilets, bucket showers or none. Food is excellent throughout — Thakali dal bhat, momos, Tibetan bread with honey for breakfast.',
  permitDetails:
    'Annapurna Conservation Area Project (ACAP) permit ($30 USD) and TIMS card ($20 independent, free with agency). Both arranged in Kathmandu or Pokhara before departure.',
  packingEssentials: [
    'Down jacket (-10°C rated)',
    'Trekking boots (broken in)',
    'Rain jacket and pack cover (essential in spring)',
    'Headlamp',
    'Sunscreen and sunglasses',
    'Water bottle + purification',
    'Trekking poles',
    'Sleeping bag liner',
    'Quick-dry layers (3 sets)',
    'Personal first aid kit',
  ],
  faqList: [
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'How hard is the ABC trek compared to Everest Base Camp?',
      answer:
        'Easier overall. Lower maximum altitude (4,130m vs 5,364m), shorter duration, and warmer temperatures. The stone staircases in the first few days are tiring, but the altitude challenge is significantly less. A good first high-altitude trek.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Is the trail crowded?',
      answer:
        'In October-November, yes — expect company at every teahouse. March-April is slightly less busy and has the bonus of rhododendron blooms. Start early each day to secure beds in popular stops like Chhomrong and ABC.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Can I do this trek independently?',
      answer:
        'Yes, the trail is well-marked and teahouses are frequent. However, a guide adds cultural context, handles logistics, and is invaluable if weather turns. We recommend guided travel for first-time Nepal trekkers.',
    },
  ],
  costInclude: [
    'Airport pickup and drop-off in Kathmandu',
    'Tourist bus or private transfer: Kathmandu–Pokhara–Kathmandu',
    'All teahouse accommodation during the trek',
    'Three meals per day on the trail',
    'Experienced English-speaking guide and porters',
    'ACAP permit and TIMS card',
    'First aid kit and oximeter',
  ],
  costExclude: [
    'International flights',
    'Nepal visa fees',
    'Travel insurance (mandatory)',
    'Personal expenses (hot showers, WiFi, charging)',
    'Tips for guide and porters',
    'Meals in Kathmandu and Pokhara',
    'Alcoholic and bottled beverages on the trail',
  ],
  keyHighlights: [
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Annapurna Sanctuary Sunrise',
      description: portableText(
        'Wake before dawn at ABC to watch the first light hit Annapurna I\'s south face — 8,091m of ice and rock turning from blue to gold. The entire amphitheatre glows. Worth every cold morning.'
      ),
    },
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Ghorepani & Poon Hill',
      description: portableText(
        'The classic side-trip. Pre-dawn climb to Poon Hill (3,210m) for a 360-degree panorama of Dhaulagiri, the Annapurnas, and Machapuchare. Sunrise here is a rite of passage for Nepal trekkers.'
      ),
    },
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Chhomrong Village',
      description: portableText(
        'A Gurung village perched on a ridge with terraced fields dropping away on all sides. The gateway to the sanctuary. Great food, warm people, and views of Machapuchare that feel impossibly close.'
      ),
    },
  ],
  itineraryDetails: [
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 1: Kathmandu to Pokhara, drive to Nayapul, trek to Tikhedhunga (1,540m)',
      elevation: '1,070m → 1,540m (+470m)',
      walkingHours: '3–4 hours',
      itineraryDescription: portableText(
        'Early morning drive or flight to Pokhara, then a short drive to the trailhead at Nayapul. Easy walk along the Modi Khola river through lowland villages and rice terraces. Tikhedhunga is a quiet village at the base of tomorrow\'s big staircase.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 2: Tikhedhunga to Ghorepani (2,860m)',
      elevation: '1,540m → 2,860m (+1,320m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'The big day. Over 3,000 stone steps climb from Tikhedhunga through Ulleri and into dense rhododendron forest. In March-April, the forest is ablaze — red, pink, and white blooms everywhere. Ghorepani sits at the top, a ridge-line village with lodges and sunset views of Dhaulagiri.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 3: Poon Hill sunrise, trek to Tadapani (2,630m)',
      elevation: '2,860m → 3,210m → 2,630m',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Pre-dawn start for Poon Hill (3,210m) — 45 minutes up in the dark with headlamps. The panorama at sunrise is worth the early alarm: Dhaulagiri, the full Annapurna range, Machapuchare. Descend back to Ghorepani for breakfast, then trek through mossy forest to Tadapani.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 4: Tadapani to Chhomrong (2,170m)',
      elevation: '2,630m → 2,170m (-460m)',
      walkingHours: '4–5 hours',
      itineraryDescription: portableText(
        'Descend through rhododendron and bamboo forest with Machapuchare framed perfectly ahead. Chhomrong is a beautiful Gurung village built on a steep hillside — stone houses, slate roofs, and the last real village before the sanctuary. Good teahouses with hot showers.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 5: Chhomrong to Bamboo (2,310m)',
      elevation: '2,170m → 2,310m (+140m)',
      walkingHours: '4–5 hours',
      itineraryDescription: portableText(
        'Descend the stone staircase from Chhomrong (steep), cross the Chhomrong Khola, then climb to Sinuwa. From here the trail drops into the Modi Khola gorge — dense bamboo forest, humid and green. The settlement called Bamboo is exactly what it sounds like.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 6: Bamboo to Deurali (3,230m)',
      elevation: '2,310m → 3,230m (+920m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Steady climb through bamboo to Himalaya Hotel, then into scrubby alpine terrain. The valley narrows. Avalanche paths cross the trail in several places — move quickly through these. Deurali sits in a tight valley below towering cliffs. It gets cold fast after sunset.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 7: Deurali to Annapurna Base Camp (4,130m)',
      elevation: '3,230m → 4,130m (+900m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'The sanctuary opens up. Glacial moraine replaces forest. Pass Machhapuchhre Base Camp (3,700m) — the fish-tail peak towers directly above. Continue climbing to ABC where the amphitheatre reveals itself: Annapurna I, South, III, Gangapurna, Machapuchare, Hiunchuli — a complete circle of giants.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 8: ABC to Bamboo (2,310m)',
      elevation: '4,130m → 2,310m (-1,820m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Sunrise at ABC — don\'t miss it. Then begin the long descent. Retracing the route downhill is faster but hard on the knees. Use poles. The air thickens, the forest returns, warmth returns. Back into bamboo territory by evening.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 9: Bamboo to Jhinu Danda (1,780m)',
      elevation: '2,310m → 1,780m (-530m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Continue descending through Chhomrong and down to Jhinu Danda. The reward: natural hot springs by the Modi Khola river. Soak tired muscles in warm mineral water with the sound of the river beside you. Simple teahouses, cold beer available.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 10: Jhinu Danda to Nayapul, drive to Pokhara',
      elevation: '1,780m → 1,070m (-710m)',
      walkingHours: '3–4 hours',
      itineraryDescription: portableText(
        'Final walking day — easy descent to Nayapul through farmland and villages. Jeep or bus back to Pokhara. Afternoon free at Lakeside — boat ride on Phewa Lake, rooftop dinner with Machapuchare reflected in the water. Transfer to Kathmandu next day.'
      ),
    },
  ],
};

// ── Manaslu Circuit Trek ──

const manasluTrek = {
  _id: 'trek-manaslu-circuit',
  _type: 'trekDetails',
  title: 'Manaslu Circuit Trek',
  slug: { _type: 'slug', current: 'manaslu-circuit-trek' },
  helperTitle: 'Circle the world\'s eighth-highest peak on Nepal\'s wildest circuit — 5,106m of earned remoteness',
  rating: 5,
  difficult: 'Hard',
  region: { _type: 'reference', _ref: 'region-manaslu' },
  duration: '14 days',
  maxElevation: '5,106m (Larkya La Pass)',
  bestSeasons: 'September–November, March–May',
  startPoint: 'Soti Khola (700m)',
  endPoint: 'Dharapani (1,860m)',
  groupSize: '2–12 people',
  permits: 'Manaslu Restricted Area Permit + MCAP + TIMS card',
  trekDescription: portableText(
    'The Manaslu Circuit is the trek for people who want Nepal without the crowds. It circles Manaslu (8,163m) through the Budhi Gandaki gorge, climbing from subtropical jungle at 700m to the glaciated Larkya La pass at 5,106m. The route passes through ethnically Tibetan villages where Buddhism is lived daily, not performed for tourists. Lodges are basic, trails are rough in places, and you\'ll need a restricted-area permit that limits group sizes. In return, you get the most complete Himalayan trekking experience in Nepal — deep gorges, high passes, ancient monasteries, and very few other trekkers.'
  ),
  fitnessGuidance:
    'This is a demanding trek. Days are long (6–8 hours), terrain is rough, and the Larkya La crossing at 5,106m is a serious high-altitude day. You should be able to walk 8 hours on consecutive days with a daypack over uneven ground. Previous high-altitude experience (above 4,000m) is strongly recommended. Train for 10–12 weeks minimum.',
  accommodationNotes:
    'Basic lodges throughout — improving yearly but still simpler than Everest or Annapurna routes. Below Namrung, expect wooden beds and pit toilets. Above Namrung, lodges have foam mattresses and some have attached bathrooms. Bring a sleeping bag rated to -10°C. Food is dal bhat, Tibetan bread, noodle soup, and whatever the lodge has. Don\'t expect menus with 40 items.',
  permitDetails:
    'Manaslu Restricted Area Permit ($100/week Sep–Nov, $75/week Dec–Aug). Manaslu Conservation Area Project (MCAP) permit ($30). TIMS card ($20 independent). Minimum group of 2 trekkers required. Must travel with a registered trekking agency — independent trekking not permitted.',
  packingEssentials: [
    'Sleeping bag (-15°C comfort rating)',
    'Down jacket (expedition weight)',
    'Trekking boots with ankle support',
    'Gaiters (river crossings, snow on Larkya La)',
    'Trekking poles (essential for the pass)',
    'Headlamp + spare batteries',
    'Water purification (no bottled water above Jagat)',
    'Sunscreen SPF 50 + glacier glasses',
    'First aid kit + Diamox',
    'Buff/balaclava for wind on Larkya La',
  ],
  faqList: [
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Why do I need a group of 2?',
      answer:
        'It\'s a restricted-area requirement set by the Nepal government. The permit requires minimum 2 trekkers traveling with a registered agency and a licensed guide. Solo trekkers cannot get the permit — but we can match you with another trekker if needed.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'How hard is the Larkya La crossing?',
      answer:
        'It\'s a long day — typically 8–10 hours, starting at 4:30am from Dharamsala. The climb is steady rather than technical, but at 5,106m every step costs. Snow is possible from late October. The descent to Bimthang is steep and can be icy. Trekking poles are essential.',
    },
    {
      _type: 'faqItem',
      _key: key('faq'),
      question: 'Is the Manaslu Circuit safe?',
      answer:
        'Yes, with proper preparation. The main risks are altitude sickness and trail conditions after rain. We carry full first aid, oximeters, and have evacuation protocols. The trail has been improved significantly in recent years, but river crossings and narrow gorge sections require attention.',
    },
  ],
  costInclude: [
    'Airport pickup and drop-off in Kathmandu',
    'Private jeep: Kathmandu–Soti Khola and Dharapani–Kathmandu',
    'All lodge accommodation during the trek',
    'Three meals per day on the trail',
    'Experienced English-speaking guide and porters',
    'Manaslu Restricted Area Permit, MCAP, and TIMS card',
    'Sleeping bag and down jacket (on loan if needed)',
    'First aid kit, oximeter, and emergency oxygen',
  ],
  costExclude: [
    'International flights',
    'Nepal visa fees',
    'Travel insurance (mandatory, must cover helicopter evacuation to 6,000m)',
    'Personal expenses (hot showers where available, charging)',
    'Tips for guide and porters',
    'Meals in Kathmandu',
    'Alcoholic beverages and snacks beyond meals',
  ],
  keyHighlights: [
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Larkya La Pass (5,106m)',
      description: portableText(
        'The circuit\'s crux. A pre-dawn start, steady climb through glacial moraine, and the pass itself draped in prayer flags with Manaslu\'s north face filling the sky. The descent to Bimthang opens up a completely different landscape — lush valley, grazing yaks, Himalayan peaks in every direction.'
      ),
    },
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Samagaon Village',
      description: portableText(
        'A Tibetan trading village at 3,530m with a massive monastery, mani walls, and views of Manaslu\'s glaciated south face. Rest day here to acclimatize — explore the monastery, walk to Birendra Tal (glacial lake), and watch village life unfold at its own pace.'
      ),
    },
    {
      _type: 'keyHighlightList',
      _key: key('highlight'),
      title: 'Budhi Gandaki Gorge',
      description: portableText(
        'The first days follow this deep river gorge — subtropical vegetation, waterfalls pouring from cliffs, suspension bridges over turquoise water. The trail is carved into the rock in places. It feels wild and remote from day one.'
      ),
    },
  ],
  itineraryDetails: [
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 1: Kathmandu to Soti Khola (700m)',
      elevation: '1,400m → 700m',
      walkingHours: 'Drive day (7–8 hours)',
      itineraryDescription: portableText(
        'Long drive from Kathmandu through the hills to Soti Khola — the trailhead. The road is rough in the final section. Arrive by afternoon, settle into a riverside lodge. The Budhi Gandaki is already roaring beside you.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 2: Soti Khola to Machha Khola (870m)',
      elevation: '700m → 870m (+170m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Enter the Budhi Gandaki gorge. Trail follows the river through subtropical forest — sal trees, banana plants, waterfalls cascading from cliffs above. Cross suspension bridges, pass through small Gurung settlements. Machha Khola is a small village strung along the river.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 3: Machha Khola to Jagat (1,340m)',
      elevation: '870m → 1,340m (+470m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'The gorge deepens. Trail is carved into rock walls in places — narrow, exposed sections with the river far below. Hot springs at Tatopani (not the famous one — a different Tatopani). Jagat marks the entrance to the restricted area — your permits are checked here.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 4: Jagat to Deng (1,860m)',
      elevation: '1,340m → 1,860m (+520m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'The landscape and culture begin to shift. Subtropical gives way to temperate forest. Villages become more Tibetan — flat-roofed stone houses, mani walls, prayer flags. Deng is a tiny settlement where the valley briefly opens up. First views of snow peaks above.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 5: Deng to Namrung (2,660m)',
      elevation: '1,860m → 2,660m (+800m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Steady climbing through pine and rhododendron forest. Pass through Ghap — a pretty village with a monastery and kani (entrance arch). The trail climbs a forested ridge before dropping into Namrung, a Tibetan-style village with stunning views of Manaslu and Ganesh Himal. You can feel the altitude beginning.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 6: Namrung to Samagaon (3,530m)',
      elevation: '2,660m → 3,530m (+870m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Through Lho village — gorgeous monastery with Manaslu directly behind — and up to Samagaon, the largest village on the circuit. Tibetan culture is dominant now: large gompa, mani walls stretching hundreds of metres, yak herds. Manaslu\'s south face dominates the skyline. Rest day tomorrow.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 7: Acclimatization day in Samagaon',
      elevation: 'Day hike to Birendra Tal (3,450m) or Pungyen Gompa (4,000m)',
      walkingHours: '3–5 hours',
      itineraryDescription: portableText(
        'Essential rest day. Options: walk to Birendra Tal, a glacial lake at the foot of Manaslu\'s glacier. Or climb to Pungyen Gompa for close-up views of Manaslu. Afternoon in the village — watch grain being threshed, visit the monastery, drink butter tea. Your body is adjusting to 3,500m.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 8: Samagaon to Samdo (3,860m)',
      elevation: '3,530m → 3,860m (+330m)',
      walkingHours: '4–5 hours',
      itineraryDescription: portableText(
        'Short day — important for acclimatization. The trail follows the Budhi Gandaki upstream through increasingly barren terrain. Samdo is a windswept trading village near the Tibet border. Yak caravans still come through. Basic lodges but friendly people and strong tea.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 9: Samdo to Dharamsala/Larkya BC (4,460m)',
      elevation: '3,860m → 4,460m (+600m)',
      walkingHours: '4–5 hours',
      itineraryDescription: portableText(
        'Another short day to aid acclimatization before the pass. The trail leaves vegetation behind entirely — just rock, scree, and snow. Dharamsala (also called Larkya Phedi) is a stone shelter at the base of the pass. Cold, windy, and stark. Early dinner, early sleep. Tomorrow starts at 4:30am.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 10: Dharamsala over Larkya La (5,106m) to Bimthang (3,590m)',
      elevation: '4,460m → 5,106m → 3,590m',
      walkingHours: '8–10 hours',
      itineraryDescription: portableText(
        'The big day. Pre-dawn start in darkness, headlamps on. Steady climb up glacial moraine — the trail is cairned but can be snowy. The pass is broad and draped in prayer flags. Views of Manaslu North, Himlung, and Cheo Himal. Long, steep descent — knees will complain — down to Bimthang\'s green valley. You\'ve crossed. Relief, elation, exhaustion.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 11: Bimthang to Tilije (2,300m)',
      elevation: '3,590m → 2,300m (-1,290m)',
      walkingHours: '6–7 hours',
      itineraryDescription: portableText(
        'Descend through alpine meadows into forest. Rhododendrons and birch return. The air feels rich. Pass through Karche and Gho villages. The landscape is softer on this side — terraced fields, stone walls, grazing animals. Tilije is a compact village with a monastery and good lodges.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 12: Tilije to Dharapani (1,860m)',
      elevation: '2,300m → 1,860m (-440m)',
      walkingHours: '5–6 hours',
      itineraryDescription: portableText(
        'Final trekking day. Continue descending through villages and farmland to Dharapani on the Annapurna Circuit trail. The Marsyangdi river is wide and fast here. Dharapani marks the end of the trek — a road-head village where your jeep waits.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 13: Dharapani to Kathmandu',
      elevation: '1,860m → 1,400m',
      walkingHours: 'Drive day (7–8 hours)',
      itineraryDescription: portableText(
        'Long drive back to Kathmandu along the Marsyangdi and Trisuli river valleys. Rough road for the first few hours, then highway. Arrive evening. Hot shower, real bed, city noise. The mountains feel far away already.'
      ),
    },
    {
      _type: 'itineraryDetailsList',
      _key: key('day'),
      itineraryTitle: 'Day 14: Buffer/departure day',
      elevation: 'Kathmandu (1,400m)',
      walkingHours: 'Rest day',
      itineraryDescription: portableText(
        'Built-in buffer for weather delays or simply to rest before flying home. Explore Kathmandu — Boudhanath stupa, Patan Durbar Square, or the chaos of Thamel. Farewell dinner with the team.'
      ),
    },
  ],
};

// ── Execute ──

async function main() {
  console.log('Seeding content to Sanity...\n');

  // Upsert regions
  for (const region of regions) {
    await upsert(region);
  }

  // Upsert treks
  await upsert(ebcTrek);
  await upsert(abcTrek);
  await upsert(manasluTrek);

  console.log('\nDone. All documents upserted successfully.');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
