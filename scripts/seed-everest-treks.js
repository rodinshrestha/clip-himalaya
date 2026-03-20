const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
});

function b(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'normal',
    children: [{ _type: 'span', _key: Math.random().toString(36).slice(2, 10), marks: [], text }],
    markDefs: [],
  };
}

function itin(title, desc) {
  return { _type: 'itineraryDetailsList', _key: Math.random().toString(36).slice(2, 10), itineraryTitle: title, itineraryDescription: [b(desc)] };
}

function highlight(title, desc) {
  return { _type: 'keyHighlightList', _key: Math.random().toString(36).slice(2, 10), title, description: [b(desc)] };
}

function tip(title, desc) {
  return { _type: 'essentialTipsList', _key: Math.random().toString(36).slice(2, 10), title, description: [b(desc)] };
}

const commonCostInclude = [
  'Airport pickup and drop-off for all flights',
  '3 nights at a quality hotel in Kathmandu with breakfast',
  'Welcome dinner at a traditional Nepali restaurant',
  'Round-trip flights: Kathmandu–Lukla–Kathmandu with all taxes',
  'All required trekking permits and national park entry fees',
  'Full board meals (breakfast, lunch, dinner) with tea/coffee during trek',
  'Experienced, certified English-speaking trekking guide',
  'Porter service (1 porter per 2 trekkers) carrying up to 14kg per person',
  'Comfortable teahouse accommodation throughout the trek',
  'Insurance coverage for all Nepalese staff',
  'First aid medical kit carried by the guide',
  'All government taxes and service charges',
  'Trek completion certificate',
  'Clip Himalaya duffle bag and trekking cap',
];

const commonCostExclude = [
  'Nepal entry visa fee',
  'International airfare to and from Kathmandu',
  'Personal trekking gear and equipment',
  'Travel insurance and emergency evacuation coverage (min US$15,000)',
  'Lunch and dinner in Kathmandu',
  'Bottled water, alcoholic beverages, and soft drinks during trek',
  'Hot showers and battery charging at teahouses',
  'Wi-Fi and internet usage along the trail',
  'Personal expenses (laundry, souvenirs, snacks)',
  'Extra accommodation due to early arrival or flight delays',
  'Tips for guide and porters',
  'Drone and special filming permits',
  'Costs from natural disasters or flight cancellations',
];

const commonTips = [
  tip('Physical Preparation', 'Begin a training routine 2-3 months before departure. Focus on cardio endurance and leg strength — hiking, running, and stair climbing are ideal. Walking 6-8 hours daily at altitude demands a solid fitness base.'),
  tip('Altitude Awareness', 'Altitude sickness can affect anyone regardless of fitness. Stay hydrated (3-4 liters daily), avoid alcohol, and follow the golden rule: climb high, sleep low. Never ignore persistent headaches or nausea — communicate immediately with your guide.'),
  tip('Packing Light', 'Your porter carries up to 14kg, and you carry a daypack with essentials. Layer your clothing: thermal base, insulating fleece, waterproof shell. Break in your trekking boots well before the trip.'),
  tip('Best Seasons', 'March–May (spring) and September–November (autumn) offer the best conditions with clear skies and comfortable temperatures. Winter treks are possible but significantly colder.'),
  tip('Lukla Flights', 'Flights to Lukla are weather-dependent and delays happen. Always keep a buffer day before international connections. Helicopter transfers are available at extra cost.'),
  tip('Cash & Connectivity', 'Carry Nepali rupees — ATMs are only in Kathmandu and Namche. Wi-Fi exists at teahouses for a fee. A local Ncell SIM card provides basic connectivity.'),
];

const treks = {
  // 1. EBC Standard Service
  'Gn8jgLeaocYXQpT7iXDqTJ': {
    title: 'Everest Base Camp Trek – Standard Service',
    helperTitle: '15-Day Classic Himalayan Adventure',
    rating: 5,
    difficult: 'Moderate',
    trekDescription: [
      b('The classic Everest Base Camp Trek is the quintessential Himalayan journey — a 15-day expedition through the legendary Khumbu Valley to the doorstep of the world\'s tallest peak at 5,364m. Walk through ancient Sherpa villages, cross dramatic suspension bridges over the roaring Dudh Koshi River, and wind through forests of rhododendron and juniper inside the UNESCO-listed Sagarmatha National Park.'),
      b('The crown jewel of this trek is the pre-dawn ascent of Kala Patthar (5,545m), offering what many consider the finest panoramic view of Everest, Lhotse, Nuptse, and Ama Dablam on Earth. Along the way, visit Tengboche Monastery, acclimatize in the vibrant market town of Namche Bazaar, and share warm meals with friendly locals in cozy mountain teahouses.'),
    ],
    keyHighlights: [
      highlight('Kala Patthar Sunrise (5,545m)', 'Ascend to the premier viewpoint in the Everest region for an unforgettable sunrise panorama over Everest, Lhotse, Nuptse, Pumori, and Makalu — a truly transformative moment.'),
      highlight('Everest Base Camp (5,364m)', 'Stand at the iconic starting point of all Everest summit expeditions, feeling the energy of the Khumbu Icefall and the towering south face of Everest.'),
      highlight('Tengboche Monastery', 'Visit Nepal\'s most revered Buddhist monastery at 3,867m, set against the dramatic backdrop of Ama Dablam and the Khumbu peaks.'),
      highlight('Sherpa Culture & Heritage', 'Immerse yourself in the warm hospitality of the Sherpa people, exploring vibrant prayer flags, carved mani stones, and centuries-old Buddhist traditions.'),
      highlight('Sagarmatha National Park', 'Trek through a UNESCO World Heritage Site with diverse ecosystems — lush forests at lower elevations to stark glacial landscapes above 5,000m.'),
    ],
    itineraryDetails: [
      itin('Day 1: Arrival in Kathmandu (1,400m)', 'Our team greets you at Tribhuvan Airport and transfers you to your hotel. Settle in and explore the vibrant streets of Thamel. Evening trek briefing and gear check with your guide.'),
      itin('Day 2: Kathmandu – Permits & Preparation', 'Finalize trek permits and last-minute gear shopping. Explore Boudhanath Stupa or Swayambhunath if time allows. Meet your fellow trekkers over a welcome dinner.'),
      itin('Day 3: Fly to Lukla (2,840m) & Trek to Phakding (2,610m)', 'A thrilling 30-minute mountain flight to Lukla. Begin trekking along the Dudh Koshi River valley through small Sherpa settlements. A gentle 8km warm-up day in 3-4 hours.'),
      itin('Day 4: Trek to Namche Bazaar (3,440m)', 'Follow the river deeper into the Khumbu, crossing the famous Hillary Bridge. Enter Sagarmatha National Park and catch your first glimpse of Everest before arriving at the bustling Sherpa capital. 11km, 5-6 hours.'),
      itin('Day 5: Acclimatization in Namche Bazaar', 'Essential rest day. Hike to the Everest View Hotel viewpoint for mountain panoramas, explore the Saturday market, or visit the Sherpa Culture Museum.'),
      itin('Day 6: Trek to Tengboche (3,867m)', 'Descend to the river then climb through rhododendron forests to Tengboche Monastery. Extraordinary views of Ama Dablam and Everest. Attend the evening prayer ceremony. 10km, 5-6 hours.'),
      itin('Day 7: Trek to Dingboche (4,410m)', 'Continue through Pangboche and Shomare. The landscape opens up with expansive views of Ama Dablam\'s dramatic south face. 9km, 5-6 hours.'),
      itin('Day 8: Acclimatization in Dingboche', 'Hike up Nangkartshang Peak (5,083m) for sweeping views of Makalu and Lhotse. Return for a restful afternoon — hydrate well and enjoy the mountain atmosphere.'),
      itin('Day 9: Trek to Lobuche (4,940m)', 'Ascend along the Khumbu Glacier moraine past the stone memorials honoring climbers and Sherpas. The last settlement before Base Camp. 7km, 4-5 hours.'),
      itin('Day 10: Trek to EBC (5,364m) via Gorak Shep', 'The big day. Trek to Gorak Shep, then follow the rocky glacial moraine to Everest Base Camp. Standing at the foot of the Khumbu Icefall is indescribable. Return to Gorak Shep. 13km, 8-9 hours.'),
      itin('Day 11: Kala Patthar (5,545m) & Trek to Pheriche', 'Pre-dawn climb for sunrise over Everest\'s summit. A 360-degree panorama of Himalayan giants. Descend to Gorak Shep for breakfast, then continue to Pheriche. 16km, 7-8 hours.'),
      itin('Day 12: Trek to Namche Bazaar (3,440m)', 'Long but rewarding descent retracing steps through Pangboche and Tengboche. The lower altitude feels noticeably easier. 20km, 6-7 hours.'),
      itin('Day 13: Trek to Lukla (2,840m)', 'Final trail day through forests and villages back to Lukla. Celebrate with your team over a well-deserved dinner. 19km, 7-8 hours.'),
      itin('Day 14: Fly to Kathmandu & Sightseeing', 'Morning flight back. Afternoon free for Pashupatinath, Bhaktapur, or shopping. Farewell dinner with trekking companions.'),
      itin('Day 15: Departure Day', 'Airport transfer for your onward journey. Carry memories that will last a lifetime.'),
    ],
    costInclude: commonCostInclude,
    costExclude: commonCostExclude,
    essentialTips: commonTips,
  },

  // 2. EBC Luxury Service
  'Gn8jgLeaocYXQpT7iXDqe5': {
    title: 'Everest Base Camp Trek – Luxury Service',
    helperTitle: '13-Day Premium Himalayan Experience',
    rating: 5,
    difficult: 'Moderate',
    trekDescription: [
      b('Experience the magic of Everest Base Camp with enhanced comfort and personalized service. This 13-day luxury package follows the classic EBC route but with premium teahouse accommodation, private rooms where available, and a dedicated support team ensuring every detail is taken care of.'),
      b('From helicopter transfers to upgraded lodging in Namche and Lukla, this trek proves that reaching the world\'s most iconic base camp doesn\'t mean sacrificing comfort. Enjoy the same breathtaking landscapes — Kala Patthar sunrise, Tengboche Monastery, and the Khumbu Icefall — with the added luxury of personalized attention and premium facilities.'),
    ],
    keyHighlights: [
      highlight('Premium Accommodation', 'Stay in the best available teahouses with private rooms and attached bathrooms where possible. Upgraded lodging in Namche Bazaar and Lukla for maximum comfort.'),
      highlight('Kala Patthar Sunrise (5,545m)', 'The same iconic sunrise viewpoint — golden light illuminating Everest\'s summit while surrounded by Himalayan giants. A moment worth every step.'),
      highlight('Personalized Service', 'A dedicated guide with a maximum group size ensures personalized attention, flexible pacing, and tailored experiences throughout the journey.'),
      highlight('Helicopter Option', 'Optional helicopter transfer from Lukla to Kathmandu available for a dramatic aerial finale to your Himalayan adventure.'),
      highlight('Cultural Immersion', 'Deeper engagement with Sherpa communities through arranged cultural experiences, monastery visits, and authentic local cuisine beyond standard meals.'),
    ],
    itineraryDetails: [
      itin('Day 1: Arrival in Kathmandu (1,400m)', 'VIP airport meet and transfer to a premium hotel. Private trek briefing with your dedicated guide and personalized gear check.'),
      itin('Day 2: Fly to Lukla & Trek to Phakding (2,610m)', 'Early mountain flight to Lukla. Begin the trek through the Dudh Koshi valley at a comfortable pace. 8km, 3-4 hours.'),
      itin('Day 3: Trek to Namche Bazaar (3,440m)', 'Cross the Hillary Bridge and enter Sagarmatha National Park. First Everest sighting before arriving at premium lodge in Namche. 11km, 5-6 hours.'),
      itin('Day 4: Acclimatization in Namche Bazaar', 'Private guided tour of Namche — Everest View Hotel viewpoint, Sherpa museum, and local market exploration. Optional spa treatment at the lodge.'),
      itin('Day 5: Trek to Tengboche (3,867m)', 'Scenic trail through rhododendron forests to the famous monastery. Private monastery visit and evening prayers. 10km, 5-6 hours.'),
      itin('Day 6: Trek to Dingboche (4,410m)', 'Landscape transforms as you ascend above the tree line. Stunning views of Ama Dablam dominate the horizon. 9km, 5-6 hours.'),
      itin('Day 7: Acclimatization in Dingboche', 'Guided hike to Nangkartshang viewpoint. Afternoon rest with hot drinks and mountain views from the lodge terrace.'),
      itin('Day 8: Trek to Lobuche (4,940m)', 'Traverse the Khumbu Glacier moraine to the final settlement before Base Camp. 7km, 4-5 hours.'),
      itin('Day 9: Trek to EBC (5,364m) via Gorak Shep', 'Reach Everest Base Camp and take in the Khumbu Icefall. Celebrate with your team before returning to Gorak Shep. 13km, 8-9 hours.'),
      itin('Day 10: Kala Patthar (5,545m) & Trek to Pheriche', 'Iconic pre-dawn sunrise climb. Panoramic views of Everest and surrounding peaks. Long descent to Pheriche. 16km, 7-8 hours.'),
      itin('Day 11: Trek to Namche Bazaar (3,440m)', 'Rewarding descent through familiar villages. Return to premium Namche lodge for a celebratory dinner. 20km, 6-7 hours.'),
      itin('Day 12: Trek to Lukla (2,840m)', 'Final day on the trail. Relax and reflect on the journey over a farewell dinner with your team. 19km, 7-8 hours.'),
      itin('Day 13: Fly to Kathmandu & Departure', 'Morning flight (or optional helicopter transfer) back to Kathmandu. Airport transfer for onward travel or extend your stay.'),
    ],
    costInclude: [
      ...commonCostInclude,
      'Premium/upgraded teahouse rooms with private bathrooms where available',
      'Private guided cultural experiences at Namche and Tengboche',
    ],
    costExclude: commonCostExclude,
    essentialTips: commonTips,
  },

  // 3. Everest Gokyo Trek
  'Gn8jgLeaocYXQpT7iXDqor': {
    title: 'Everest Gokyo Trek (5,420m)',
    helperTitle: '18-Day Combined Everest & Gokyo Adventure',
    rating: 5,
    difficult: 'Challenging',
    trekDescription: [
      b('The Everest Gokyo Trek is an 18-day expedition that combines two of the Khumbu region\'s most spectacular destinations into one unforgettable journey. Cross the technical Cho La Pass at 5,420m, marvel at the turquoise Gokyo Lakes, and stand at Everest Base Camp — all in a single trek that showcases the very best of Nepal\'s high Himalayas.'),
      b('Unlike the standard EBC route, this trek takes you through the quieter Gokyo Valley with its pristine alpine lakes and the panoramic summit of Gokyo Ri (5,483m). The glacier crossing at Cho La Pass adds an element of adventure that sets this apart as a truly world-class trekking experience, recommended for those with solid fitness and a desire for something beyond the ordinary.'),
    ],
    keyHighlights: [
      highlight('Cho La Pass Crossing (5,420m)', 'Navigate this dramatic glacier pass connecting the Gokyo and EBC valleys — a thrilling technical highlight requiring crampons and offering spectacular alpine scenery.'),
      highlight('Gokyo Lakes & Gokyo Ri (5,483m)', 'Witness the otherworldly turquoise Gokyo Lakes and climb Gokyo Ri for a sweeping panorama of Everest, Cho Oyu, Lhotse, Makalu, and the vast Ngozumpa Glacier.'),
      highlight('Everest Base Camp & Kala Patthar', 'Experience the iconic Base Camp at 5,364m and catch sunrise from Kala Patthar (5,545m) — the finest viewpoint in the entire Everest region.'),
      highlight('Ngozumpa Glacier', 'Walk alongside Nepal\'s longest glacier, a massive river of ice stretching over 36km through the heart of the Khumbu.'),
      highlight('Quieter Trails', 'The Gokyo Valley sees far fewer trekkers than the standard EBC route, offering a more intimate and peaceful mountain experience.'),
    ],
    itineraryDetails: [
      itin('Day 1: Arrival in Kathmandu (1,400m)', 'Airport meet, hotel transfer, and evening trek briefing with your guide.'),
      itin('Day 2: Kathmandu – Permits & Preparation', 'Permit processing, gear check, and free time to explore the capital.'),
      itin('Day 3: Fly to Lukla & Trek to Phakding (2,610m)', 'Scenic mountain flight followed by a gentle 8km warm-up trek along the Dudh Koshi.'),
      itin('Day 4: Trek to Namche Bazaar (3,440m)', 'Enter Sagarmatha National Park. First Everest views as you arrive at the Sherpa capital. 11km, 5-6 hours.'),
      itin('Day 5: Acclimatization in Namche Bazaar', 'Explore viewpoints, markets, and the Sherpa museum at your own pace.'),
      itin('Day 6: Trek to Dole (4,200m)', 'Branch off the main EBC trail toward the Gokyo Valley. The path climbs through pastoral landscapes with far fewer trekkers. 6km, 5-6 hours.'),
      itin('Day 7: Trek to Machhermo (4,470m)', 'Ridge walking with panoramic views of Kangtega, Cho Oyu, and the approaching Ngozumpa Glacier. 5km, 4-5 hours.'),
      itin('Day 8: Trek to Gokyo (4,790m)', 'Arrive at the stunning Gokyo settlement beside the turquoise third lake. The views are extraordinary. 6km, 4-5 hours.'),
      itin('Day 9: Gokyo Ri (5,483m) & Exploration', 'Pre-dawn ascent of Gokyo Ri for a 360-degree panorama of eight 8,000m+ peaks. Afternoon explore the lakes and glacier.'),
      itin('Day 10: Trek to Thagnak (4,750m)', 'Move toward the Cho La Pass approach through rugged glacial terrain. 4km, 3-4 hours.'),
      itin('Day 11: Cross Cho La Pass (5,420m) to Dzongla (4,830m)', 'Early start for the demanding glacier crossing. Crampons required. A physically intense but incredibly rewarding day. 8km, 7-8 hours.'),
      itin('Day 12: Trek to Lobuche (4,940m)', 'Short trek along the Khumbu Glacier moraine to Lobuche, the gateway to Base Camp. 5km, 3-4 hours.'),
      itin('Day 13: Trek to EBC (5,364m) via Gorak Shep', 'Reach Everest Base Camp, witness the Khumbu Icefall, and return to Gorak Shep. 13km, 8-9 hours.'),
      itin('Day 14: Kala Patthar (5,545m) & Trek to Dingboche (4,410m)', 'Sunrise from Kala Patthar — the ultimate viewpoint. Then descend to the warmer air of Dingboche. 16km, 7-8 hours.'),
      itin('Day 15: Trek to Namche Bazaar (3,440m)', 'A long, rewarding descent retracing the main trail through Tengboche and Pangboche. 20km, 6-7 hours.'),
      itin('Day 16: Trek to Lukla (2,840m)', 'Final trail day. Celebrate with your team over a farewell dinner. 19km, 7-8 hours.'),
      itin('Day 17: Fly to Kathmandu & Sightseeing', 'Morning flight. Free afternoon for sightseeing or shopping. Farewell dinner.'),
      itin('Day 18: Departure Day', 'Airport transfer for your onward journey.'),
    ],
    costInclude: commonCostInclude,
    costExclude: [...commonCostExclude, 'Crampon and ice axe rental if needed'],
    essentialTips: [
      ...commonTips,
      tip('Cho La Pass Preparation', 'The Cho La glacier crossing requires basic crampon use. Your guide will assist, but familiarize yourself with walking on ice beforehand. Start early (4-5 AM) as conditions worsen by afternoon.'),
    ],
  },

  // 4. Everest View Point Trek
  'Gn8jgLeaocYXQpT7iXDqzd': {
    title: 'Everest View Point Trek (3,900m)',
    helperTitle: '8-Day Easy Himalayan Escape',
    rating: 4,
    difficult: 'Easy',
    trekDescription: [
      b('The Everest View Point Trek is the perfect introduction to the Himalayas — an 8-day journey designed for those with limited time or those seeking a gentler trekking experience. Reaching a maximum altitude of 3,900m, this trek delivers stunning views of Everest, Lhotse, Nuptse, and Ama Dablam without the physical demands of higher altitude routes.'),
      b('Ideal for families, first-time trekkers, and older adventurers, this route takes you through the enchanting Sherpa villages of the lower Khumbu, to the bustling town of Namche Bazaar, and up to the famous Everest View Hotel — the highest-altitude hotel in the world — where you\'ll enjoy a panoramic mountain vista that rivals any viewpoint in Nepal.'),
    ],
    keyHighlights: [
      highlight('Everest View Hotel (3,900m)', 'Reach the world\'s highest-placed hotel and enjoy a cup of tea with an uninterrupted panorama of Everest, Lhotse, and Ama Dablam stretching before you.'),
      highlight('Namche Bazaar', 'Explore the vibrant capital of the Sherpa people — a hillside town filled with colorful shops, cozy cafes, and rich cultural heritage at 3,440m.'),
      highlight('Beginner-Friendly', 'Perfect for first-time trekkers with no technical difficulty. Short walking days and manageable altitude make this accessible to almost anyone with basic fitness.'),
      highlight('Sherpa Villages', 'Walk through authentic mountain communities like Phakding and Jorsalle, experiencing daily life in the shadow of the world\'s highest peaks.'),
      highlight('Sagarmatha National Park', 'Enter the UNESCO-listed park and trek through beautiful forests of rhododendron, pine, and birch teeming with birdlife.'),
    ],
    itineraryDetails: [
      itin('Day 1: Arrival in Kathmandu (1,400m)', 'Airport transfer, hotel check-in, and evening trek briefing. Free time to explore Thamel.'),
      itin('Day 2: Fly to Lukla (2,840m) & Trek to Phakding (2,610m)', 'Scenic mountain flight followed by a relaxing 3-hour walk through riverside settlements. 8km.'),
      itin('Day 3: Trek to Namche Bazaar (3,440m)', 'Enter Sagarmatha National Park, cross the Hillary Bridge, and first Everest sighting. 11km, 5-6 hours.'),
      itin('Day 4: Hike to Everest View Point (3,900m)', 'Morning ascent to the famous viewpoint for breathtaking mountain panoramas. Return to Namche for lunch and explore the town at leisure.'),
      itin('Day 5: Acclimatization & Cultural Day in Namche', 'Visit the Sherpa Culture Museum, local monasteries, and the weekly market. Short optional hikes available for those wanting more.'),
      itin('Day 6: Trek to Lukla (2,840m)', 'Descend the familiar trail back through the forests and villages. A pleasant day\'s walk with the mountains behind you. 19km, 6-7 hours.'),
      itin('Day 7: Fly to Kathmandu & Sightseeing', 'Morning flight back. Afternoon free for Boudhanath, Pashupatinath, or shopping. Farewell dinner.'),
      itin('Day 8: Departure Day', 'Airport transfer for your onward journey.'),
    ],
    costInclude: commonCostInclude,
    costExclude: commonCostExclude,
    essentialTips: [
      tip('Fitness Level', 'This trek is categorized as easy, but you\'ll still walk 4-6 hours daily on mountain trails. Basic fitness from regular walking or light jogging is sufficient.'),
      tip('Altitude', 'Though the maximum altitude is just 3,900m, some people may still feel mild altitude effects. Stay hydrated and communicate any discomfort to your guide.'),
      tip('Packing', 'Pack lighter than for higher treks. You won\'t need extreme cold weather gear, but layers are still essential as mountain weather changes quickly.'),
      tip('Best Time', 'March–May and September–November offer the best weather. This trek is also suitable during winter (Dec–Feb) for those who don\'t mind colder mornings.'),
    ],
  },

  // 5. Everest 3 High Passes Trek
  'Gn8jgLeaocYXQpT7iXDrTG': {
    title: 'Everest Three High Passes Trek',
    helperTitle: '20-Day Ultimate Khumbu Challenge',
    rating: 5,
    difficult: 'Strenuous',
    trekDescription: [
      b('The Everest Three High Passes Trek is the ultimate challenge in the Khumbu region — a 20-day expedition crossing three dramatic mountain passes above 5,300m: Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m). This is the definitive trek for experienced adventurers seeking to explore every corner of the Everest region.'),
      b('Beyond the three passes, this expedition includes Everest Base Camp, Kala Patthar sunrise, the turquoise Gokyo Lakes, and Gokyo Ri — combining all the highlights of the Khumbu into one epic journey. With remote trails, glacier crossings, and some of the most dramatic alpine scenery on the planet, this trek pushes boundaries while rewarding you with views that few ever witness.'),
    ],
    keyHighlights: [
      highlight('Three High Passes Above 5,300m', 'Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) — three dramatic glacier passes offering some of the most remote and spectacular terrain in the Himalayas.'),
      highlight('Complete Khumbu Experience', 'This single trek combines EBC, Kala Patthar, Gokyo Lakes, and Gokyo Ri — every major Khumbu highlight in one expedition.'),
      highlight('Remote Trails', 'Long stretches of this route see very few trekkers. Between the passes, you\'ll have the mountains largely to yourself.'),
      highlight('Gokyo Ri & Kala Patthar', 'Summit both of the Everest region\'s premier viewpoints for contrasting but equally breathtaking panoramas.'),
      highlight('Glacier Navigation', 'Multiple glacier crossings with crampons add technical adventure to this world-class trek.'),
    ],
    itineraryDetails: [
      itin('Day 1: Arrival in Kathmandu', 'Airport transfer, hotel check-in, and detailed trek briefing for this demanding expedition.'),
      itin('Day 2: Kathmandu – Permits & Final Preparation', 'Permit processing, thorough gear check, and physical readiness assessment. Welcome dinner.'),
      itin('Day 3: Fly to Lukla & Trek to Phakding (2,610m)', 'Mountain flight and gentle first day along the Dudh Koshi River. 8km, 3-4 hours.'),
      itin('Day 4: Trek to Namche Bazaar (3,440m)', 'Enter Sagarmatha National Park through dense forests. First Everest views. 11km, 5-6 hours.'),
      itin('Day 5: Acclimatization in Namche Bazaar', 'Hike to viewpoints and explore the Sherpa capital. Essential preparation for the altitude ahead.'),
      itin('Day 6: Trek to Tengboche (3,867m)', 'Rhododendron forest trails to the famous monastery with views of Ama Dablam. 10km, 5-6 hours.'),
      itin('Day 7: Trek to Dingboche (4,410m)', 'Ascend above the tree line into the high alpine landscape. 9km, 5-6 hours.'),
      itin('Day 8: Acclimatization in Dingboche', 'Hike to Nangkartshang Peak (5,083m) for panoramic views. Critical rest day before the first pass.'),
      itin('Day 9: Cross Kongma La (5,535m) to Lobuche (4,940m)', 'The first and highest pass. Early start for the steep climb over moraines and glacial terrain. Descend to Lobuche. 8km, 8-9 hours.'),
      itin('Day 10: Trek to EBC (5,364m) via Gorak Shep', 'Reach Everest Base Camp and the Khumbu Icefall. Return to Gorak Shep. 13km, 8-9 hours.'),
      itin('Day 11: Kala Patthar (5,545m) & Trek to Dzongla (4,830m)', 'Sunrise from Kala Patthar, then traverse to Dzongla in preparation for Cho La Pass. 14km, 7-8 hours.'),
      itin('Day 12: Cross Cho La Pass (5,420m) to Thagnak (4,750m)', 'Second pass — a demanding glacier crossing requiring crampons. Arrive at the quiet settlement of Thagnak. 8km, 7-8 hours.'),
      itin('Day 13: Trek to Gokyo (4,790m)', 'Descend alongside the massive Ngozumpa Glacier to the stunning turquoise Gokyo Lakes. 5km, 3-4 hours.'),
      itin('Day 14: Gokyo Ri (5,483m) & Exploration', 'Pre-dawn ascent of Gokyo Ri for a panorama rivaling Kala Patthar. Afternoon explore the lakes.'),
      itin('Day 15: Cross Renjo La (5,360m) to Lungden (4,380m)', 'The third and final pass offers stunning views of Everest, Lhotse, and the Gokyo Valley you\'re leaving behind. 9km, 7-8 hours.'),
      itin('Day 16: Trek to Thame (3,820m)', 'Descend into the peaceful Thame Valley, a remote Sherpa village rarely visited by trekkers. 7km, 4-5 hours.'),
      itin('Day 17: Trek to Namche Bazaar (3,440m)', 'Return to civilization via the scenic Thame trail. Celebrate at Namche. 5km, 3-4 hours.'),
      itin('Day 18: Trek to Lukla (2,840m)', 'Final trail day back through familiar territory. Farewell dinner with your team. 19km, 7-8 hours.'),
      itin('Day 19: Fly to Kathmandu & Sightseeing', 'Morning flight. Afternoon free. Farewell dinner with fellow trekkers.'),
      itin('Day 20: Departure Day', 'Airport transfer for your onward journey.'),
    ],
    costInclude: commonCostInclude,
    costExclude: [...commonCostExclude, 'Crampon and ice axe rental for glacier crossings'],
    essentialTips: [
      ...commonTips,
      tip('Experience Required', 'This trek is strenuous and suited for experienced trekkers. Previous high-altitude trekking (above 4,000m) is strongly recommended. Three consecutive glacier passes demand mental and physical resilience.'),
      tip('Technical Gear', 'Crampons are essential for Kongma La and Cho La. Your guide provides assistance, but familiarity with walking on ice and snow is highly recommended.'),
    ],
  },

  // 6. EBC via Gokyo Chola Pass
  'XejQA1ZUhEQcECOLGt9aoG': {
    title: 'Everest Base Camp via Gokyo & Cho La Pass (5,420m)',
    helperTitle: '18-Day Combined EBC & Gokyo Circuit',
    rating: 5,
    difficult: 'Challenging',
    trekDescription: [
      b('This 18-day expedition combines the best of both worlds — the legendary Everest Base Camp trek with the stunning Gokyo Valley, connected by the thrilling Cho La Pass glacier crossing at 5,420m. Starting through the Gokyo Valley for a less-crowded approach, you\'ll experience turquoise alpine lakes, climb Gokyo Ri, and cross into the EBC corridor via one of the Himalayas\' most dramatic mountain passes.'),
      b('This route is ideal for trekkers who want more than the standard EBC experience. You get the Gokyo Lakes, the Cho La glacier adventure, and the full EBC and Kala Patthar experience — all in a single, well-paced expedition that showcases the incredible diversity of the Khumbu region.'),
    ],
    keyHighlights: [
      highlight('Two Routes in One', 'Experience both the Gokyo Valley and EBC corridors in a single trek, seeing far more of the Khumbu than the standard route allows.'),
      highlight('Cho La Pass (5,420m)', 'Cross this stunning glacier pass connecting the Gokyo and Everest valleys — a highlight that adds genuine adventure to the journey.'),
      highlight('Gokyo Lakes & Gokyo Ri', 'Marvel at the surreal turquoise lakes and climb Gokyo Ri (5,483m) for views of Everest, Cho Oyu, Lhotse, and the vast Ngozumpa Glacier.'),
      highlight('Everest Base Camp & Kala Patthar', 'The full EBC experience including the iconic Kala Patthar sunrise — standing at 5,545m as golden light paints Everest\'s summit.'),
      highlight('Fewer Crowds on the Gokyo Side', 'The first half of this trek follows the quieter Gokyo route, offering a more peaceful experience compared to the main EBC highway.'),
    ],
    itineraryDetails: [
      itin('Day 1: Arrival in Kathmandu', 'Airport transfer, hotel check-in, and comprehensive trek briefing.'),
      itin('Day 2: Kathmandu – Permits & Preparation', 'Permit processing, final gear check, and welcome dinner.'),
      itin('Day 3: Fly to Lukla & Trek to Phakding (2,610m)', 'Mountain flight and gentle first-day walk. 8km, 3-4 hours.'),
      itin('Day 4: Trek to Namche Bazaar (3,440m)', 'Classic trail through Sagarmatha National Park to the Sherpa capital. 11km, 5-6 hours.'),
      itin('Day 5: Acclimatization in Namche Bazaar', 'Explore viewpoints and Sherpa culture. Essential rest day.'),
      itin('Day 6: Trek to Dole (4,200m)', 'Branch toward the Gokyo Valley on quieter trails through alpine pastures. 6km, 5-6 hours.'),
      itin('Day 7: Trek to Machhermo (4,470m)', 'Continue up the Gokyo Valley with views of Cho Oyu and the Ngozumpa Glacier. 5km, 4-5 hours.'),
      itin('Day 8: Trek to Gokyo (4,790m)', 'Arrive at the turquoise third Gokyo Lake — one of the most beautiful sights in Nepal. 6km, 4-5 hours.'),
      itin('Day 9: Gokyo Ri (5,483m) & Lake Exploration', 'Summit Gokyo Ri at dawn for incredible panoramas. Afternoon explore the sacred lakes.'),
      itin('Day 10: Trek to Thagnak (4,750m)', 'Move toward the Cho La approach through rugged terrain alongside the glacier. 4km, 3-4 hours.'),
      itin('Day 11: Cross Cho La Pass (5,420m) to Dzongla (4,830m)', 'Early morning glacier crossing — the physical and scenic highpoint of the trek. Crampons required. 8km, 7-8 hours.'),
      itin('Day 12: Trek to Lobuche (4,940m)', 'Short trek to the Khumbu Glacier moraine settlement. 5km, 3-4 hours.'),
      itin('Day 13: Trek to EBC (5,364m) via Gorak Shep', 'The EBC day. Walk the glacial moraine to Base Camp and the Khumbu Icefall. 13km, 8-9 hours.'),
      itin('Day 14: Kala Patthar (5,545m) & Trek to Pheriche (4,371m)', 'Sunrise from Kala Patthar, then long descent to Pheriche. 16km, 7-8 hours.'),
      itin('Day 15: Trek to Namche Bazaar (3,440m)', 'Rewarding descent through Pangboche and Tengboche. 20km, 6-7 hours.'),
      itin('Day 16: Trek to Lukla (2,840m)', 'Final trail day and farewell dinner. 19km, 7-8 hours.'),
      itin('Day 17: Fly to Kathmandu & Sightseeing', 'Morning flight. Free afternoon. Farewell dinner.'),
      itin('Day 18: Departure Day', 'Airport transfer for your onward journey.'),
    ],
    costInclude: commonCostInclude,
    costExclude: [...commonCostExclude, 'Crampon and ice axe rental for Cho La Pass'],
    essentialTips: [
      ...commonTips,
      tip('Cho La Pass Readiness', 'The glacier crossing at Cho La is weather-dependent and physically demanding. Your guide will assess conditions — be prepared for an alternate route if conditions are unsafe. Bring or rent crampons.'),
    ],
  },
};

async function seedAll() {
  // First, delete the extra treks not in the 6
  const extraIds = [
    'Gn8jgLeaocYXQpT7iTO2YK', // Gokyo Lakes Trek (not in screenshot)
    'e313f5f1-8cfa-4e8e-9e8c-ecbf8aa42f80', // standalone Everest Base Camp
  ];

  for (const id of extraIds) {
    try {
      await client.delete(id);
      console.log(`Deleted extra trek: ${id}`);
    } catch (e) {
      console.log(`Could not delete ${id}: ${e.message}`);
    }
  }

  // Seed each trek
  for (const [id, data] of Object.entries(treks)) {
    try {
      await client.patch(id).set(data).commit();
      console.log(`Seeded: ${data.title}`);
    } catch (e) {
      console.log(`Error seeding ${data.title}: ${e.message}`);
    }
  }

  console.log('\nAll Everest region treks seeded!');
}

seedAll().catch(console.error);
