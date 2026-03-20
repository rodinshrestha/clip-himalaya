const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
});

function block(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'normal',
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).slice(2, 10),
        marks: [],
        text,
      },
    ],
    markDefs: [],
  };
}

function itineraryItem(title, description) {
  return {
    _type: 'itineraryDetailsList',
    _key: Math.random().toString(36).slice(2, 10),
    itineraryTitle: title,
    itineraryDescription: [block(description)],
  };
}

function highlightItem(title, description) {
  return {
    _type: 'keyHighlightList',
    _key: Math.random().toString(36).slice(2, 10),
    title,
    description: [block(description)],
  };
}

function tipItem(title, description) {
  return {
    _type: 'essentialTipsList',
    _key: Math.random().toString(36).slice(2, 10),
    title,
    description: [block(description)],
  };
}

async function seedEBC() {
  const trekId = 'e313f5f1-8cfa-4e8e-9e8c-ecbf8aa42f80';

  await client
    .patch(trekId)
    .set({
      title: 'Everest Base Camp Trek (5,364m)',
      helperTitle: '15-Day Classic Himalayan Adventure',
      rating: 5,
      difficult: 'Moderate',
      trekDescription: [
        block(
          'The Everest Base Camp Trek is the ultimate Himalayan adventure — a 15-day journey that takes you through the heart of the Khumbu Valley to the foot of the world\'s tallest peak. Walking through ancient Sherpa villages, crossing dramatic suspension bridges over the Dudh Koshi River, and winding through rhododendron and pine forests, you\'ll experience the rich cultural heritage and breathtaking natural beauty of Nepal\'s Sagarmatha National Park.'
        ),
        block(
          'Beyond reaching Base Camp at 5,364m, the trek rewards you with a sunrise ascent of Kala Patthar (5,545m), widely regarded as the finest vantage point for panoramic views of Everest, Lhotse, Nuptse, and Ama Dablam. Along the way, you\'ll visit the iconic Tengboche Monastery, acclimatize in the bustling market town of Namche Bazaar, and share meals with friendly locals in cozy teahouses. Whether you\'re a first-time high-altitude trekker or a seasoned mountain enthusiast, this trek delivers an unforgettable experience of a lifetime.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Kala Patthar Sunrise (5,545m)',
          'Climb to the highest viewpoint accessible without a climbing permit for a stunning sunrise panorama over Everest, Lhotse, Nuptse, Pumori, and Makalu — a truly once-in-a-lifetime moment.'
        ),
        highlightItem(
          'Everest Base Camp (5,364m)',
          'Stand at the legendary starting point of all Everest summit expeditions. Feel the energy of the Khumbu Icefall and take in the towering south face of Everest surrounded by massive glaciers.'
        ),
        highlightItem(
          'Tengboche Monastery Visit',
          'Experience the spiritual heart of the Khumbu region at Nepal\'s most famous Buddhist monastery, nestled at 3,867m with jaw-dropping views of Ama Dablam and surrounding peaks.'
        ),
        highlightItem(
          'Sherpa Culture & Hospitality',
          'Immerse yourself in the warm hospitality of the Sherpa people. Explore vibrant prayer flags, intricately carved mani stones, and ancient Buddhist traditions that define life in the high Himalayas.'
        ),
        highlightItem(
          'Sagarmatha National Park',
          'Trek through a UNESCO World Heritage Site home to diverse ecosystems — from lush rhododendron forests at lower elevations to stark glacial landscapes above 5,000m, with chances to spot Himalayan tahr, musk deer, and the elusive snow leopard.'
        ),
        highlightItem(
          'Scenic Flight to Lukla',
          'Begin your adventure with one of the world\'s most thrilling flights — a 30-minute journey from Kathmandu to the mountain airstrip at Lukla (2,840m), offering aerial views of terraced hillsides and towering snow peaks.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Welcome to Nepal! Our team meets you at Tribhuvan International Airport and transfers you to your hotel. Settle in and explore the vibrant streets of Thamel at your own pace. Evening trek briefing and gear check with your guide.'
        ),
        itineraryItem(
          'Day 2: Kathmandu – Permits & Preparation',
          'A day dedicated to finalizing trek permits, paperwork, and last-minute gear shopping. Visit some of Kathmandu\'s iconic landmarks if time allows — Boudhanath Stupa and Swayambhunath are within easy reach. Meet your fellow trekkers over a welcome dinner.'
        ),
        itineraryItem(
          'Day 3: Fly to Lukla (2,840m) & Trek to Phakding (2,610m)',
          'An exhilarating 30-minute mountain flight brings you to Lukla. After landing, begin your trek along the Dudh Koshi River valley, passing through small Sherpa settlements and crossing your first suspension bridges. A gentle warm-up day covering about 8km in 3-4 hours.'
        ),
        itineraryItem(
          'Day 4: Trek to Namche Bazaar (3,440m)',
          'Follow the river valley deeper into the Khumbu, crossing several suspension bridges including the famous Hillary Bridge. The trail steepens significantly after entering Sagarmatha National Park. Catch your first thrilling glimpse of Everest through the trees before arriving at the bustling Sherpa capital. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 5: Acclimatization Day in Namche Bazaar',
          'A crucial rest day for your body to adjust to the altitude. Take a short hike to the Everest View Hotel viewpoint for panoramic mountain vistas, explore the local market, or visit the Sherpa Culture Museum. Staying active at moderate effort helps acclimatization.'
        ),
        itineraryItem(
          'Day 6: Trek to Tengboche (3,867m)',
          'Descend to the Dudh Koshi River and climb through rhododendron forests to the ridge where Tengboche Monastery sits. The views of Ama Dablam, Everest, and Lhotse from here are extraordinary. Attend the evening prayer ceremony at the monastery if timing permits. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to Dingboche (4,410m)',
          'Continue through the beautiful villages of Pangboche and Shomare. The landscape begins to change as tree cover thins and the valley opens up with expansive views of Ama Dablam\'s dramatic south face. Dingboche sits in a wide, windy valley surrounded by towering peaks. Distance: 9km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Acclimatization Day in Dingboche',
          'Another important rest day. Take a rewarding hike up Nangkartshang Peak (5,083m) for sweeping views of Makalu, Lhotse, and the Island Peak massif. Return to Dingboche for a restful afternoon — hydrate well and enjoy the mountain atmosphere.'
        ),
        itineraryItem(
          'Day 9: Trek to Lobuche (4,940m)',
          'Ascend along the lateral moraine of the Khumbu Glacier. Pass the stone memorials at Chukpo Lari honoring climbers and Sherpas who lost their lives on Everest. The terrain becomes increasingly barren and glacial. Lobuche is the last settlement with teahouse facilities before Base Camp. Distance: 7km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 10: Trek to Everest Base Camp (5,364m) via Gorak Shep (5,164m)',
          'The big day! Trek to Gorak Shep first, drop your bags, then continue along the rocky glacial moraine to Everest Base Camp. Standing at the foot of the Khumbu Icefall with Everest\'s summit towering above is an indescribable feeling. Celebrate your achievement before returning to Gorak Shep for the night. Distance: 13km, 8-9 hours.'
        ),
        itineraryItem(
          'Day 11: Kala Patthar Sunrise (5,545m) & Trek to Pheriche (4,371m)',
          'Wake before dawn for the highlight of the entire trek — a pre-sunrise climb to Kala Patthar. Watch the first golden rays illuminate Everest\'s summit while surrounded by a 360-degree panorama of Himalayan giants. Descend to Gorak Shep for breakfast, then continue downhill to Pheriche. Distance: 16km, 7-8 hours.'
        ),
        itineraryItem(
          'Day 12: Trek to Namche Bazaar (3,440m)',
          'A long but rewarding descent retracing your steps through Pangboche and Tengboche. The lower altitude feels noticeably easier to breathe. Enjoy the lush valleys and familiar villages with fresh eyes on the return journey. Distance: 20km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 13: Trek to Lukla (2,840m)',
          'Your final day on the trail. Descend through forests and Sherpa villages back to Lukla. Celebrate the completion of your trek with your team over a well-deserved dinner. Distance: 19km, 7-8 hours.'
        ),
        itineraryItem(
          'Day 14: Fly to Kathmandu & Sightseeing',
          'Morning flight back to Kathmandu (weather permitting). Spend the afternoon exploring — visit Pashupatinath Temple, Bhaktapur Durbar Square, or simply relax and shop for souvenirs. Enjoy a farewell dinner with your trekking companions.'
        ),
        itineraryItem(
          'Day 15: Departure Day',
          'Transfer to Tribhuvan International Airport for your onward journey. Our team handles all logistics so you can depart stress-free, carrying memories that will last a lifetime.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off for all domestic and international flights',
        '3 nights at a 3-star hotel in Kathmandu with breakfast',
        'Welcome dinner at a traditional Nepali restaurant',
        'Round-trip domestic flights: Kathmandu to Lukla and Lukla to Kathmandu',
        'All necessary trek permits and Sagarmatha National Park entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) for carrying luggage up to 14kg per person',
        'Teahouse accommodation throughout the trek',
        'Insurance coverage for all Nepalese staff (guide and porters)',
        'First aid medical kit carried by the guide',
        'All government taxes and company service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee (available on arrival at the airport)',
        'International airfare to and from Kathmandu',
        'Personal trekking gear and equipment',
        'Travel insurance and emergency evacuation coverage (minimum US$15,000 required)',
        'Lunch and dinner in Kathmandu',
        'Bottled/mineral water, alcoholic beverages, and soft drinks during the trek',
        'Hot showers and battery/device charging at teahouses',
        'Phone calls, Wi-Fi, and internet usage along the trail',
        'Personal expenses such as laundry, souvenirs, and snacks',
        'Extra accommodation in Kathmandu due to early arrival or flight delays',
        'Tips and gratuities for guide and porters (customary but not mandatory)',
        'Drone permits and special filming/photography permits',
        'Any costs arising from natural disasters, flight cancellations, or route changes',
        'Any services not specifically mentioned in the inclusions list',
      ],
      essentialTips: [
        tipItem(
          'Physical Fitness & Preparation',
          'Start a training routine at least 2-3 months before your trek. Focus on cardiovascular endurance (hiking, running, cycling) and leg strength. While no technical climbing is involved, walking 6-8 hours daily at altitude demands a solid fitness base. Prior high-altitude experience is helpful but not required.'
        ),
        tipItem(
          'Altitude & Acclimatization',
          'Altitude sickness can affect anyone regardless of fitness level. Follow the golden rule: climb high, sleep low. Stay well-hydrated (3-4 liters daily), avoid alcohol, and never ignore symptoms like persistent headaches or nausea. The itinerary includes strategic acclimatization days — use them wisely with short hikes rather than complete rest.'
        ),
        tipItem(
          'Packing Smart',
          'Pack light — your porter carries up to 14kg, and you\'ll carry a daypack with essentials. Layering is key: thermal base layers, insulating fleece, and a waterproof outer shell. Don\'t forget quality trekking boots (broken in beforehand), a warm sleeping bag rated to -15°C, UV-protective sunglasses, and high-SPF sunscreen.'
        ),
        tipItem(
          'Weather & Best Seasons',
          'The prime trekking windows are March-May (spring) and September-November (autumn), offering stable weather, clear skies, and comfortable temperatures. Winter treks (December-February) are possible but significantly colder with shorter days. Monsoon season (June-August) brings heavy rainfall and is not recommended.'
        ),
        tipItem(
          'Lukla Flight Contingency',
          'Flights to Lukla are weather-dependent and delays are common, especially during monsoon shoulder seasons. Build at least one buffer day into your travel plans before any onward international flights. Helicopter transfers are available as an alternative at additional cost.'
        ),
        tipItem(
          'Money & Communication',
          'Carry Nepali rupees in cash — ATMs are only available in Kathmandu and Namche Bazaar. Wi-Fi is available at most teahouses for a fee but can be unreliable above Namche. Consider purchasing a local Ncell SIM card in Kathmandu for basic connectivity along the trail.'
        ),
      ],
    })
    .commit();

  console.log('EBC trek data seeded successfully!');
}

seedEBC().catch(console.error);
