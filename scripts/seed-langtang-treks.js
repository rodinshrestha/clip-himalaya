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

// ─── Trek Data ───────────────────────────────────────────────

const treks = [
  {
    // Langtang Valley Trek
    id: 'XejQA1ZUhEQcECOLGqua8u',
    data: {
      title: 'Langtang Valley Trek (5,000m)',
      helperTitle: '10-Day Cultural & Mountain Adventure',
      rating: 5,
      difficult: 'Moderate',
      trekDescription: [
        block(
          'The Langtang Valley Trek is the closest high-altitude Himalayan adventure to Kathmandu, yet it feels a world away — a 10-day journey into a stunning glacial valley flanked by towering peaks, ancient monasteries, and welcoming Tamang villages. Legend has it that the valley got its name when a Buddhist monk followed a runaway yak ("Lang" meaning yak, "Tang" meaning to follow) and stumbled upon this hidden paradise. Today, trekkers follow in those mythic footsteps through one of Nepal\'s most beautiful and culturally rich regions.'
        ),
        block(
          'The trail takes you through Langtang National Park — Nepal\'s first Himalayan national park — where dense forests of oak, rhododendron, and bamboo give way to alpine meadows and glacial moraines. The highlight is the ascent to Tserko Ri (5,000m), a viewpoint offering staggering 360-degree panoramas of Langtang Lirung (7,227m), Ganesh Himal, Dorje Lakpa, and on clear days, the Tibetan plateau beyond. Along the way, you\'ll visit the sacred Kyanjin Gompa monastery and encounter the longest mani wall in Nepal. With comfortable teahouse lodges and moderate trail difficulty, this trek is perfect for those seeking genuine Himalayan grandeur without extreme challenge.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Tserko Ri Summit (5,000m)',
          'Climb to one of the finest viewpoints in the Langtang region for an unrivaled panorama of Langtang Lirung, Ganesh Himal, Dorje Lakpa, Yala Peak, and — on exceptionally clear days — the snow-covered plateau of Tibet.'
        ),
        highlightItem(
          'Kyanjin Gompa Monastery',
          'Visit the ancient Buddhist monastery at 3,870m, set against a backdrop of glaciers and towering peaks. The resident monks welcome visitors, and the local cheese factory — established with Swiss help decades ago — produces some of Nepal\'s finest yak cheese.'
        ),
        highlightItem(
          'Tamang Heritage & Culture',
          'The Langtang Valley is home to the Tamang people, whose Tibetan-Buddhist traditions, distinctive stone houses, and warm hospitality create an atmosphere quite different from the Sherpa regions. Experience authentic village life, prayer wheels, and colorful festivals.'
        ),
        highlightItem(
          'Nepal\'s Longest Mani Wall',
          'Pass beside an enormous mani wall stretching hundreds of meters — every stone hand-carved with Buddhist prayers and mantras. Walking beside this sacred structure is a meditative experience in itself.'
        ),
        highlightItem(
          'Langtang National Park Wildlife',
          'Trek through a protected ecosystem home to red pandas, Himalayan black bears, musk deer, langur monkeys, and over 300 bird species. The park\'s diverse forests offer some of Nepal\'s richest biodiversity.'
        ),
        highlightItem(
          'Closest Trek to Kathmandu',
          'Unlike most major treks that require flights or multi-day drives, the Langtang trailhead is just a scenic 7-8 hour drive from Kathmandu — making this one of the most accessible high-altitude Himalayan experiences available.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Our team meets you at Tribhuvan International Airport and transfers you to your hotel in Thamel. Settle in and explore Kathmandu\'s vibrant streets. Evening trek briefing, gear check, and welcome dinner with your guide and fellow trekkers.'
        ),
        itineraryItem(
          'Day 2: Drive to Syabrubesi (1,550m)',
          'Scenic drive north from Kathmandu through terraced hillsides and river valleys, passing through Trishuli Bazaar and the gateway town of Dhunche. The road follows the Trishuli River with increasingly dramatic mountain scenery. Arrive at Syabrubesi in the afternoon. Drive time: 7-8 hours.'
        ),
        itineraryItem(
          'Day 3: Trek to Lama Hotel (2,380m)',
          'Enter the Langtang Valley on a trail that follows the Langtang Khola through dense subtropical forest. Cross several suspension bridges and pass small settlements before ascending through oak and rhododendron forest to the peaceful lodge settlement at Lama Hotel. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 4: Trek to Langtang Village (3,430m)',
          'A rewarding day of steady climbing as the valley opens up. The forest gradually thins, revealing views of Langtang Lirung\'s massive ice face. Pass through Ghoda Tabela (old Tibetan horse station) and prayer-flag-decorated trails before arriving at the reconstructed village of Langtang. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Kyanjin Gompa (3,870m)',
          'A gentler day following the widening valley floor past yak pastures and mani walls. Visit the ancient Kyanjin Gompa monastery and the local yak cheese factory. The amphitheatre of peaks surrounding this settlement is breathtaking — Langtang Lirung, Kimshung, and Yala Peak tower above. Distance: 7km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 6: Hike to Tserko Ri (5,000m) & Return to Kyanjin Gompa',
          'The highlight of the trek. Set out early for the non-technical but demanding ascent of Tserko Ri. The trail climbs steeply through grassy slopes and rocky terrain. The summit panorama is one of Nepal\'s finest — Langtang Lirung dominates the west, Shishapangma (8,027m) sits on the Tibetan border, and peaks stretch in every direction. Return to Kyanjin Gompa for the night. Distance: 8km round trip, 5-7 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to Lama Hotel (2,380m)',
          'Retrace your steps down the valley, enjoying the views from a different perspective. The descent is faster and you\'ll notice details missed on the way up — hidden waterfalls, prayer stones, and wildlife in the forest canopy. Distance: 17km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Trek to Syabrubesi (1,550m)',
          'Continue descending through the lush forest to Syabrubesi. The warmer air and subtropical vegetation feel like a different world after days in the high valley. Celebrate completing the trek over a warm dinner. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 9: Drive to Kathmandu (1,400m)',
          'Return drive to Kathmandu following the same scenic route. Arrive by late afternoon. Farewell dinner at a traditional Nepali restaurant with your trekking team. Drive time: 7-8 hours.'
        ),
        itineraryItem(
          'Day 10: Departure Day',
          'Transfer to Tribhuvan International Airport for your onward journey. Our team handles all logistics so you can depart with lasting memories of the Langtang Valley.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '2 nights hotel accommodation in Kathmandu with breakfast',
        'Welcome and farewell dinners',
        'All ground transportation (Kathmandu–Syabrubesi–Kathmandu by private vehicle)',
        'All trek permits, TIMS card, and Langtang National Park entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) for carrying luggage up to 14kg',
        'Teahouse/lodge accommodation throughout the trek',
        'Insurance for all Nepalese staff (guide and porters)',
        'First aid medical kit carried by the guide',
        'All government taxes and company service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee (available on arrival)',
        'International airfare to and from Kathmandu',
        'Personal trekking gear and equipment',
        'Travel insurance and emergency evacuation coverage (mandatory, min US$15,000)',
        'Lunch and dinner in Kathmandu',
        'Bottled water, alcoholic beverages, and soft drinks during the trek',
        'Hot showers and device charging at teahouses',
        'Personal expenses (laundry, souvenirs, snacks)',
        'Tips and gratuities for guide and porters (customary but not mandatory)',
        'Monastery and museum entrance fees',
        'Any costs arising from natural disasters, road blocks, or route changes',
        'Any services not specifically mentioned in the inclusions list',
      ],
      essentialTips: [
        tipItem(
          'Fitness & Preparation',
          'Moderate fitness is required — expect 5-7 hours of walking per day with altitude gains up to 1,000m. The Tserko Ri day hike is the most demanding section. Train with regular hiking and stair climbing for at least 6 weeks before departure. No technical skills needed.'
        ),
        tipItem(
          'Altitude Awareness',
          'The trek reaches 5,000m at Tserko Ri. Ascend gradually, drink 3-4 liters of water daily, and watch for symptoms of altitude sickness. The itinerary builds altitude progressively, but communicate openly with your guide about how you feel at all times.'
        ),
        tipItem(
          'Road Conditions',
          'The drive to Syabrubesi follows mountain roads that can be rough, especially during monsoon season. Occasional landslides may require route adjustments. Build flexibility into your schedule and trust your driver\'s experience on these roads.'
        ),
        tipItem(
          'Best Trekking Seasons',
          'October-November (autumn) offers the clearest skies and best mountain views. March-May (spring) brings warmer temperatures and rhododendron blooms in the lower forest. Winter (December-February) is cold but quiet. Avoid monsoon season (June-August) due to landslide risk on the access road.'
        ),
        tipItem(
          'Packing Smart',
          'Temperatures range from warm in the lower valleys to well below freezing at Tserko Ri. Bring layered clothing, a warm down jacket, quality trekking boots (broken in), UV sunglasses, sunscreen, and a sleeping bag rated to -10°C. Keep your daypack under 6kg.'
        ),
        tipItem(
          'Post-Earthquake Resilience',
          'The 2015 earthquake severely damaged Langtang Village, but the community has rebuilt with remarkable resilience. The new village, lodges, and trails are fully operational. Trekking here directly supports the local recovery and the warm Tamang communities that call this valley home.'
        ),
      ],
    },
  },
  {
    // Langtang Gosaikunda Trek (16 days)
    id: 'Gn8jgLeaocYXQpT7iXDsL8',
    data: {
      title: 'Langtang Valley & Gosaikunda Lake Trek (4,460m)',
      helperTitle: '16-Day Valley, Lakes & Villages Journey',
      rating: 5,
      difficult: 'Moderate to Challenging',
      trekDescription: [
        block(
          'The Langtang Gosaikunda Trek is the ultimate way to experience the Langtang region — a 16-day adventure that combines the stunning glacial valley of Langtang with the sacred alpine lakes of Gosaikunda and the charming Sherpa villages of the Helambu region. This comprehensive route takes you through three distinct geographical and cultural zones, offering a diversity of landscapes and experiences that few single treks in Nepal can match.'
        ),
        block(
          'From the towering ice walls of Langtang Lirung and the ancient monastery at Kyanjin Gompa, you\'ll cross a high ridge to reach the sacred Gosaikunda Lake at 4,460m — a glacial lake of deep spiritual significance where Hindu legend tells that Lord Shiva pierced the ground with his trident to create a cooling pool of water. The surrounding basin holds 108 smaller lakes, creating an ethereal high-altitude landscape. The descent through the Helambu valley introduces you to yet another world — terraced hillsides, Sherpa hospitality, and warm subtropical forests. This trek is ideal for those who want to go deeper into Nepal\'s mountain world without repeating the same trail twice.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Gosaikunda Sacred Lake (4,460m)',
          'Stand at the shores of one of Nepal\'s holiest alpine lakes, where Hindu mythology says Lord Shiva struck the earth to create water. The deep blue lake surrounded by rocky peaks and 108 smaller lakes is both spiritually significant and visually stunning.'
        ),
        highlightItem(
          'Three Regions in One Trek',
          'Experience the glacial Langtang Valley, the sacred high-altitude Gosaikunda lakes, and the warm Helambu Sherpa villages — three distinct worlds of landscape, culture, and ecology in a single continuous journey.'
        ),
        highlightItem(
          'Tserko Ri Panorama (5,000m)',
          'Ascend to the premier viewpoint of the Langtang region for 360-degree views encompassing Langtang Lirung, Ganesh Himal, Dorje Lakpa, and the distant Tibetan plateau.'
        ),
        highlightItem(
          'Kyanjin Gompa & Cheese Factory',
          'Visit the sacred Buddhist monastery and the famous Swiss-established yak cheese factory at 3,870m — a unique combination of spiritual heritage and high-altitude entrepreneurship.'
        ),
        highlightItem(
          'Helambu Valley Culture',
          'Descend through the Helambu region, home to the Hyolmo Sherpa people. Their distinctive traditions, terraced farming, and welcoming villages offer a completely different cultural experience from the upper Langtang.'
        ),
        highlightItem(
          'Diverse Ecosystems',
          'Trek through an extraordinary range of environments — subtropical river gorges, temperate rhododendron forests, alpine meadows, glacial moraines, high-altitude lake basins, and Himalayan farmland. The biodiversity rivals any trek in Nepal.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Airport pickup and hotel transfer in Thamel. Evening trek briefing with your guide, gear check, and welcome dinner.'
        ),
        itineraryItem(
          'Day 2: Kathmandu Sightseeing & Preparation',
          'Guided tour of Kathmandu\'s highlights — Boudhanath Stupa, Swayambhunath (Monkey Temple), and the Thamel markets. Finalize permits and last-minute gear shopping. Preparation for tomorrow\'s drive.'
        ),
        itineraryItem(
          'Day 3: Drive to Syabrubesi (1,550m)',
          'Scenic drive through the hills north of Kathmandu, following the Trishuli River valley past Dhunche and into the Langtang region. Mountain views build steadily throughout the drive. Drive time: 7-8 hours.'
        ),
        itineraryItem(
          'Day 4: Trek to Lama Hotel (2,380m)',
          'Enter Langtang National Park and trek along the Langtang Khola through dense forest. Cross suspension bridges and pass through small settlements. The forest is alive with birdsong and occasional monkey sightings. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Langtang Village (3,430m)',
          'Ascend steadily as the valley widens and views of Langtang Lirung\'s massive ice face appear through the thinning forest. Pass yak pastures and prayer-flag-strewn trails to reach the rebuilt village. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 6: Trek to Kyanjin Gompa (3,870m)',
          'A gentler walk along the valley floor past mani walls and yak herds. Visit the monastery and cheese factory. The cirque of surrounding peaks creates a magnificent natural amphitheatre. Distance: 7km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 7: Tserko Ri (5,000m) & Return to Kyanjin Gompa',
          'Early morning ascent to the summit of Tserko Ri for the trek\'s finest panorama. The climb is non-technical but steep and demanding at altitude. Return to Kyanjin Gompa for an afternoon of rest. Distance: 8km round trip, 5-7 hours.'
        ),
        itineraryItem(
          'Day 8: Trek to Lama Hotel (2,380m)',
          'Descend the familiar valley trail at a comfortable pace, noticing details missed on the way up. The afternoon light through the forest canopy is beautiful. Distance: 17km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to Thulo Syabru (2,230m)',
          'Branch off the main Langtang trail and climb through rhododendron and pine forest to the traditional Tamang village of Thulo Syabru, perched on a hillside with commanding valley views. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 10: Trek to Shin Gompa (3,330m)',
          'Ascend through increasingly beautiful forest via the village of Dimsa. Shin Gompa is known for its small monastery and cheese production. The surroundings feel remote and wild. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 11: Trek to Gosaikunda (4,460m)',
          'A demanding climb along rocky ridgelines to the sacred lake basin. Pass through alpine meadows and over exposed terrain before the stunning blue waters of Gosaikunda appear below. Camp beside the lake for a night of extraordinary stargazing. Distance: 9km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 12: Explore Gosaikunda & Trek to Gopte (3,440m)',
          'Morning at the sacred lake — explore the surrounding smaller lakes and enjoy the serene atmosphere. Cross the Laurebina La pass (4,610m) with panoramic mountain views, then descend over rocky terrain to the small settlement of Gopte. Distance: 12km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 13: Trek to Melamchi Gaon (2,560m)',
          'Descend through changing vegetation zones — from barren alpine to lush forest — into the Helambu region. Cross ridges and river valleys to reach the charming village of Melamchi Gaon. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 14: Trek to Tarke Gyang (2,590m)',
          'Walk through the heart of Helambu, visiting Sherpa villages with their distinctive architecture and Buddhist prayer wheels. Tarke Gyang is one of the largest and most traditional villages in the region. Distance: 8km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 15: Trek to Melamchi Bazaar & Drive to Kathmandu',
          'Final descent through terraced farmland and small villages to the road at Melamchi Bazaar. Drive to Kathmandu for a farewell dinner celebrating the completion of this comprehensive trek. Distance: 10km trek, 3-4 hours + 2-3 hours drive.'
        ),
        itineraryItem(
          'Day 16: Departure Day',
          'Transfer to Tribhuvan International Airport for your onward journey. Depart with memories spanning three distinct Himalayan worlds.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '3 nights hotel accommodation in Kathmandu with breakfast',
        'Welcome and farewell dinners',
        'Full-day Kathmandu sightseeing tour with guide',
        'All ground transportation (Kathmandu–Syabrubesi, Melamchi–Kathmandu)',
        'All trek permits, TIMS card, and Langtang National Park entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) up to 14kg',
        'Teahouse/lodge accommodation throughout the trek',
        'Insurance for all Nepalese staff',
        'First aid medical kit',
        'All government taxes and company service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Personal trekking gear and equipment',
        'Travel insurance and emergency evacuation coverage (mandatory, min US$15,000)',
        'Lunch and dinner in Kathmandu',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Hot showers and device charging at teahouses',
        'Personal expenses (laundry, souvenirs, snacks)',
        'Tips and gratuities for guide and porters',
        'Monastery and museum entrance fees',
        'Any costs from natural disasters, road blocks, or route changes',
        'Services not specifically mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Fitness Requirements',
          'This is a demanding 16-day trek covering three regions with passes up to 4,610m. Train for at least 10 weeks with progressive hiking, cardio, and leg strength work. Daily trekking is typically 5-7 hours with significant elevation changes. Good overall endurance is essential.'
        ),
        tipItem(
          'Altitude Strategy',
          'The trek reaches 5,000m at Tserko Ri and 4,610m at Laurebina La. The itinerary builds altitude gradually with the Langtang Valley section serving as natural acclimatization for the Gosaikunda crossing. Stay hydrated, ascend slowly, and never ignore altitude symptoms.'
        ),
        tipItem(
          'Gosaikunda Weather',
          'The Gosaikunda area is exposed and can experience sudden weather changes, even in peak season. Carry warm layers, a quality waterproof jacket, and be prepared for cold, windy conditions at the lake. Mornings are usually calmer than afternoons.'
        ),
        tipItem(
          'Best Seasons',
          'October-November offers the clearest mountain views and most stable weather. March-May brings warmer temperatures, rhododendron blooms, and fewer crowds. The Gosaikunda section is snow-covered in winter and the trail to the lake may be impassable. Monsoon (June-August) brings heavy rain and leeches in the forest sections.'
        ),
        tipItem(
          'Cultural Sensitivity',
          'You\'ll pass through Buddhist and Hindu sacred sites. Always walk clockwise around mani walls, prayer wheels, and chortens. Ask permission before photographing religious ceremonies or local people. Remove shoes before entering monasteries.'
        ),
        tipItem(
          'Varied Accommodation',
          'Teahouse quality varies significantly across the three regions. Lodges in Langtang Valley are well-established, Gosaikunda has basic facilities, and Helambu offers simple but charming homestay-style accommodation. Bring a good sleeping bag and manage expectations accordingly.'
        ),
      ],
    },
  },
  {
    // Naya Khang Peak (5,884m) (24 days)
    id: 'Gn8jgLeaocYXQpT7iXDsdz',
    data: {
      title: 'Naya Khang Peak Climbing (5,884m)',
      helperTitle: '24-Day Climbing Expedition in Langtang',
      rating: 4,
      difficult: 'Challenging',
      trekDescription: [
        block(
          'Naya Khang Peak (also known as Ganja La Chuli) at 5,884m is a thrilling climbing expedition in the heart of the Langtang region, offering aspiring mountaineers a genuine Himalayan summit experience with stunning views of some of Nepal\'s most iconic peaks. This 24-day adventure combines the classic Langtang Valley trek with a technical but achievable summit that requires basic mountaineering skills — fixed ropes, crampons, and glacier travel. It\'s an outstanding next step for trekkers who have conquered the high passes and are ready to stand on an actual Himalayan summit.'
        ),
        block(
          'The approach follows the beautiful Langtang Valley trail to Kyanjin Gompa, where you\'ll acclimatize and prepare for the climb. From a high camp on the mountain\'s flanks, the summit push rewards you with a panorama that stretches from Shishapangma (8,027m) on the Tibetan border to Dorje Lakpa (6,966m), Langtang Lirung (7,227m), and a sea of peaks extending to the Annapurna and Ganesh Himal ranges. The descent returns through the valley, allowing you to appreciate the Tamang culture and lush forests with fresh eyes and the satisfaction of a summit in your memory.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Summit of Naya Khang (5,884m)',
          'Stand on a genuine Himalayan summit with views spanning from Shishapangma (8,027m) in Tibet to the Langtang, Ganesh, and Annapurna ranges. The summit experience at nearly 6,000m is deeply rewarding and a meaningful mountaineering achievement.'
        ),
        highlightItem(
          'Langtang Valley Approach',
          'The trek to base camp follows the classic Langtang Valley trail through stunning forests, Tamang villages, and the glacial valley — making the approach itself a world-class trek before the climbing even begins.'
        ),
        highlightItem(
          'Mountaineering Skill Building',
          'Learn and practice climbing techniques including crampon walking, ice axe use, fixed rope ascent, and glacier navigation. Naya Khang is an ideal peak for building skills toward higher Himalayan objectives.'
        ),
        highlightItem(
          'Kyanjin Gompa Base',
          'Acclimatize at the beautiful Kyanjin Gompa settlement with its ancient monastery, yak cheese factory, and spectacular mountain amphitheatre. The perfect base for preparing your body and mind for the summit push.'
        ),
        highlightItem(
          'Views of Shishapangma (8,027m)',
          'Naya Khang offers one of the finest perspectives of Shishapangma — the only 8,000m peak entirely within Tibet. Seeing this giant from the summit is a truly special moment.'
        ),
        highlightItem(
          'Less Crowded Peak',
          'Unlike more popular climbing peaks, Naya Khang sees relatively few climbers each season. You\'ll likely have the mountain largely to yourself — a rare luxury in the Himalayas.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Airport pickup and hotel transfer. Meet your climbing guide and expedition team. Gear inspection and equipment briefing over a welcome dinner.'
        ),
        itineraryItem(
          'Day 2: Kathmandu Preparation',
          'Finalize climbing permits and paperwork. Last-minute gear shopping if needed. Climbing orientation session covering techniques, safety protocols, and summit strategy. Packing and equipment organization.'
        ),
        itineraryItem(
          'Day 3: Drive to Syabrubesi (1,550m)',
          'Scenic drive north through the hills to the Langtang trailhead. The mountain scenery builds throughout the drive. Rest and prepare for the trek ahead. Drive time: 7-8 hours.'
        ),
        itineraryItem(
          'Day 4: Trek to Lama Hotel (2,380m)',
          'Enter Langtang National Park and trek through dense forest along the Langtang Khola. The trail crosses several bridges and climbs steadily through subtropical and temperate forest zones. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Langtang Village (3,430m)',
          'Continue ascending as the valley opens up. Views of Langtang Lirung emerge through the thinning canopy. Pass yak pastures and prayer-flag-decorated trails. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 6: Trek to Kyanjin Gompa (3,870m)',
          'Gentle walk along the valley floor to the monastery settlement. Visit Kyanjin Gompa and enjoy the dramatic mountain amphitheatre. This will be your base for acclimatization. Distance: 7km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 7: Acclimatization at Kyanjin Gompa',
          'Essential rest day. Hike to Kyanjin Ri (4,350m) for acclimatization and views. Practice climbing skills with your guide — crampon fitting, ice axe technique, and rope work. Afternoon rest and summit strategy briefing.'
        ),
        itineraryItem(
          'Day 8: Acclimatization Hike to Tserko Ri (5,000m)',
          'Climb Tserko Ri for excellent acclimatization and panoramic views. This hike serves double duty — building altitude adaptation and providing a spectacular viewpoint. Return to Kyanjin Gompa. Distance: 8km round trip, 5-7 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to Naya Khang Base Camp (4,200m)',
          'Leave the main valley trail and head toward Naya Khang. The terrain becomes wilder and more remote as you approach the mountain. Set up base camp on a glacial moraine with views of the climbing route above. Distance: 6km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 10: Move to High Camp (4,800m)',
          'Climb to the high camp location on the mountain\'s lower slopes. Your climbing Sherpas will have prepared fixed ropes on the steeper sections above. Practice climbing on the actual terrain and review the summit route. Early rest. Distance: 3km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 11: Summit Day — Naya Khang Peak (5,884m)',
          'Pre-dawn start (2-3am) for the summit push. Climb steep snow and ice slopes using fixed ropes and crampons. The upper ridge leads to the summit with increasingly spectacular views unfolding with each step. The panorama from the top — Shishapangma, Langtang Lirung, Dorje Lakpa, Ganesh Himal — is breathtaking. Descend to base camp. Distance: 8km, 10-12 hours total.'
        ),
        itineraryItem(
          'Day 12: Reserve/Weather Day',
          'Built-in contingency day for weather delays or a second summit attempt if needed. If the summit was successful, rest at base camp and begin packing down.'
        ),
        itineraryItem(
          'Day 13: Descend to Kyanjin Gompa (3,870m)',
          'Return to the valley trail and descend to Kyanjin Gompa. The familiar settlement feels wonderfully comfortable after days on the mountain. Celebrate your climbing achievement. Distance: 6km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 14: Trek to Lama Hotel (2,380m)',
          'Descend the valley through increasingly lush forest. The lower altitude feels noticeably easier after your time above 5,000m. Distance: 17km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 15: Trek to Syabrubesi (1,550m)',
          'Final trekking day back to the trailhead. The subtropical warmth and greenery are a welcome contrast to the glacial heights. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 16: Drive to Kathmandu (1,400m)',
          'Return drive to the capital. Arrive by late afternoon and enjoy a farewell dinner celebrating your summit success. Drive time: 7-8 hours.'
        ),
        itineraryItem(
          'Day 17: Kathmandu Sightseeing',
          'Free day to explore Kathmandu — visit Boudhanath Stupa, Pashupatinath Temple, Bhaktapur Durbar Square, or shop for souvenirs. Certificate ceremony in the evening.'
        ),
        itineraryItem(
          'Day 18: Departure Day',
          'Airport transfer for your onward journey. Depart as a Himalayan climber with summit memories to last a lifetime.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        'Hotel accommodation in Kathmandu with breakfast (3 nights)',
        'Welcome and farewell dinners',
        'All ground transportation (Kathmandu–Syabrubesi–Kathmandu)',
        'Naya Khang climbing permit (NMA fee)',
        'All trek permits, TIMS card, and Langtang National Park entry fees',
        'Full board meals throughout trek and climb',
        'Certified climbing guide and assistant climbing Sherpa',
        'Trekking guide and porters for approach',
        'All group climbing equipment (ropes, anchors, snow stakes, ice screws)',
        'Camping equipment for climbing phase (high-altitude tents, kitchen gear)',
        'Teahouse accommodation during trek portion',
        'Insurance for all Nepalese staff',
        'First aid kit and emergency oxygen',
        'Satellite communication device for emergencies',
        'All government taxes and service charges',
        'NMA climbing peak certificate upon successful summit',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Personal climbing gear (mountaineering boots, crampons, ice axe, harness — rental available)',
        'Personal trekking gear and equipment',
        'Travel insurance with helicopter evacuation and climbing coverage (mandatory, min US$50,000)',
        'Lunch and dinner in Kathmandu',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Personal expenses and tips',
        'Extra nights in Kathmandu due to weather delays',
        'Monastery entrance fees',
        'Any costs from natural disasters, cancellations, or route changes',
        'Services not mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Climbing Experience',
          'Naya Khang is classified as a trekking peak but involves genuine mountaineering — steep snow/ice slopes, fixed ropes, and glacier travel. Prior experience with crampons and ice axe is highly recommended. Previous high-altitude trekking above 5,000m is strongly advised as minimum preparation.'
        ),
        tipItem(
          'Physical Fitness',
          'This is a demanding 18-day expedition with a strenuous summit day of 10-12 hours at extreme altitude. Train intensively for at least 4 months focusing on cardio endurance, leg strength, and core stability. Include some altitude exposure if possible.'
        ),
        tipItem(
          'Personal Climbing Gear',
          'You\'ll need mountaineering boots compatible with step-in crampons, a climbing harness, helmet, and layering for extreme cold (-20°C at high camp). Crampons, ice axes, and technical gear can be rented through your guide if you don\'t own them.'
        ),
        tipItem(
          'Weather & Summit Windows',
          'October-November and March-May offer the best climbing conditions. The reserve day accounts for weather delays — your climbing guide makes the final call on summit timing. Afternoon weather deteriorates rapidly above 5,000m, so early starts are critical.'
        ),
        tipItem(
          'Acclimatization is Key',
          'The itinerary includes multiple acclimatization strategies — rest days at Kyanjin Gompa and the Tserko Ri hike prepare your body for the summit altitude. Don\'t skip these days and don\'t push through altitude symptoms. A safe descent is more important than any summit.'
        ),
        tipItem(
          'Insurance Requirements',
          'Standard travel insurance will NOT cover this expedition. You need a policy specifically covering mountaineering/climbing up to 6,000m with helicopter evacuation from remote areas. Verify coverage details with your insurer and carry proof of insurance.'
        ),
      ],
    },
  },
];

// ─── Seed Function ───────────────────────────────────────────

async function seedLangtangTreks() {
  for (const trek of treks) {
    try {
      await client.patch(trek.id).set(trek.data).commit();
      console.log(`Seeded: ${trek.data.title}`);
    } catch (err) {
      console.error(`Failed: ${trek.data.title}`, err.message);
    }
  }
  console.log('\nAll Langtang region treks seeded!');
}

seedLangtangTreks().catch(console.error);
