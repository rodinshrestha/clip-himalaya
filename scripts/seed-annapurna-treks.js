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
    // Annapurna Base Camp Trek (11 days)
    id: 'XejQA1ZUhEQcECOLGquZxx',
    data: {
      title: 'Annapurna Base Camp Trek (4,130m)',
      helperTitle: '11-Day Himalayan Sanctuary Journey',
      rating: 5,
      difficult: 'Moderate',
      trekDescription: [
        block(
          'The Annapurna Base Camp Trek is one of the most iconic treks in Nepal, leading you deep into the heart of the Annapurna Sanctuary — a natural amphitheatre surrounded by towering peaks including Annapurna I (8,091m), Machapuchare (6,993m), Hiunchuli, and Annapurna South. Over 11 unforgettable days, you\'ll walk through terraced rice paddies, lush rhododendron forests alive with birdsong, and charming Gurung villages where traditional hospitality and warm smiles welcome you at every turn.'
        ),
        block(
          'As you ascend, the landscape transforms dramatically — from subtropical lowlands to alpine meadows and finally to the glacial moraine of Base Camp itself. Standing at 4,130m with 360-degree views of some of the world\'s highest peaks is a moment of pure awe. The trail is well-maintained with comfortable teahouse lodges throughout, making this trek accessible to reasonably fit adventurers without any technical climbing experience. Whether you\'re chasing panoramic sunrises or cultural immersion, the ABC trek delivers on every front.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Annapurna Base Camp (4,130m)',
          'Arrive at the legendary sanctuary surrounded by a dramatic wall of Himalayan giants — Annapurna I, Machapuchare, Hiunchuli, Gangapurna, and Annapurna South create a 360-degree amphitheatre of snow and ice.'
        ),
        highlightItem(
          'Machapuchare Base Camp Views',
          'Camp beneath the sacred "Fishtail Mountain" at 3,700m. The towering twin summit of Machapuchare is considered holy and has never been officially summited — its presence here is both dramatic and spiritual.'
        ),
        highlightItem(
          'Gurung Cultural Immersion',
          'Pass through traditional Gurung villages like Ghandruk and Chhomrong, where centuries-old stone houses, terraced farmland, and warm hospitality offer a window into authentic Himalayan life and culture.'
        ),
        highlightItem(
          'Rhododendron Forest Trail',
          'Trek through enchanting forests of rhododendron, bamboo, and oak, especially magical during spring (March-May) when the entire hillside blazes with red, pink, and white blooms.'
        ),
        highlightItem(
          'Jhinu Hot Springs',
          'On the return journey, soak your tired muscles in the natural hot springs at Jhinu Danda — a perfect rejuvenating reward nestled beside the Modi Khola river after days on the trail.'
        ),
        highlightItem(
          'Panoramic Sunrise at MBC',
          'Wake before dawn at Machapuchare Base Camp to witness the first golden rays of sunlight paint the surrounding peaks in shades of orange and pink — an unforgettable start to your final push to ABC.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Welcome to Nepal! Our team meets you at Tribhuvan International Airport and transfers you to your hotel in Thamel. Settle in and explore the vibrant streets at your own pace. Evening trek briefing and gear check with your guide over a welcome dinner.'
        ),
        itineraryItem(
          'Day 2: Drive to Nayapul & Trek to Tikhedhunga (1,540m)',
          'Early morning scenic drive from Pokhara to Nayapul (approximately 1.5 hours). Begin your trek along the Modi Khola valley through charming villages and terraced fields. The trail is gentle and serves as a perfect warm-up. Distance: 6km, 3-4 hours trekking.'
        ),
        itineraryItem(
          'Day 3: Trek to Ghorepani (2,860m)',
          'A challenging but rewarding day with significant elevation gain. Climb the famous stone staircase through dense forests and past waterfalls. As you ascend, views of Annapurna South and Hiunchuli begin to reveal themselves. Distance: 11km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 4: Poon Hill Sunrise & Trek to Chhomrong (2,170m)',
          'Pre-dawn start for the climb to Poon Hill (3,210m) to witness a spectacular sunrise over the Annapurna and Dhaulagiri ranges. After breakfast, descend through beautiful rhododendron forests and Gurung villages to the hillside settlement of Chhomrong. Distance: 12km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Bamboo (2,310m)',
          'Descend the long stone staircase from Chhomrong to the Chhomrong Khola, then climb to Sinuwa before dropping into the deep Modi Khola gorge. The trail enters dense bamboo forest — keep an eye out for langur monkeys and colorful birds. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 6: Trek to Deurali (3,230m)',
          'Continue ascending through the narrowing valley as the bamboo forest gives way to rhododendron and then rocky terrain. The valley walls close in dramatically as you approach the gateway to the Annapurna Sanctuary. Watch for avalanche debris paths on the surrounding cliffs. Distance: 7km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to Annapurna Base Camp (4,130m) via MBC (3,700m)',
          'The big day! Trek to Machapuchare Base Camp first, where the valley opens into the stunning glacial amphitheatre. After a rest, continue to Annapurna Base Camp surrounded by towering peaks on all sides. Celebrate your achievement as the late afternoon light illuminates the surrounding walls of ice and rock. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Sunrise at ABC & Descend to Bamboo (2,310m)',
          'Wake early for a breathtaking sunrise that lights up the entire sanctuary in golden hues. After breakfast and photos, begin your descent — the trail feels easier now, and you\'ll cover ground quickly. Distance: 15km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to Jhinu Danda (1,780m)',
          'Continue descending through familiar terrain. In the afternoon, reward yourself with a soak in the natural hot springs at Jhinu Danda beside the Modi Khola river — the perfect way to ease tired legs. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 10: Trek to Nayapul & Drive to Pokhara',
          'Final morning on the trail, walking through terraced farmland and villages back to Nayapul. Drive to Pokhara and enjoy a well-deserved lakeside dinner with views of the Annapurna range you just conquered. Distance: 8km, 3-4 hours trekking.'
        ),
        itineraryItem(
          'Day 11: Departure Day',
          'Transfer to Pokhara Airport or drive to Kathmandu. Our team handles all logistics so you can depart with a heart full of Himalayan memories.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '2 nights hotel in Pokhara with breakfast',
        'All ground transportation (Pokhara–Nayapul–Pokhara)',
        'All necessary trek permits and ACAP entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) for carrying luggage up to 14kg',
        'Teahouse accommodation throughout the trek',
        'Insurance for all Nepalese staff (guide and porters)',
        'First aid medical kit carried by the guide',
        'All government taxes and company service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee (available on arrival)',
        'International airfare to and from Nepal',
        'Kathmandu–Pokhara transportation (flight or tourist bus)',
        'Personal trekking gear and equipment',
        'Travel insurance and emergency evacuation coverage (mandatory, min US$15,000)',
        'Lunch and dinner in Pokhara/Kathmandu',
        'Bottled water, alcoholic beverages, and soft drinks on trek',
        'Hot showers and device charging at teahouses',
        'Personal expenses such as laundry, souvenirs, and snacks',
        'Tips and gratuities for guide and porters (customary but not mandatory)',
        'Any costs arising from natural disasters, flight cancellations, or route changes',
        'Any services not specifically mentioned in the inclusions list',
      ],
      essentialTips: [
        tipItem(
          'Fitness & Preparation',
          'Start cardio training at least 8 weeks before your trek. Focus on uphill hiking, stair climbing, and endurance. The trek involves daily ascents and descents of 800-1,000m, so strong legs and good cardiovascular fitness are essential. No technical climbing skills required.'
        ),
        tipItem(
          'Altitude Awareness',
          'Altitude sickness can affect anyone. Ascend gradually, stay well-hydrated (3-4 liters daily), and communicate openly with your guide about how you feel. The itinerary is designed with proper acclimatization, but listen to your body above all else.'
        ),
        tipItem(
          'Packing Essentials',
          'Pack light — your porter carries up to 14kg. Bring layered clothing (thermal base, fleece mid-layer, waterproof shell), broken-in trekking boots, a sleeping bag rated to -10°C, sunscreen, UV sunglasses, and a refillable water bottle with purification tablets.'
        ),
        tipItem(
          'Best Seasons',
          'Spring (March-May) offers blooming rhododendrons, mild weather, and clear skies. Autumn (September-November) delivers the most stable weather and crystal-clear mountain views. Winter treks are possible but very cold above 3,000m. Avoid monsoon (June-August).'
        ),
        tipItem(
          'Cash & Communication',
          'Carry sufficient Nepali rupees — there are no ATMs beyond Pokhara. Wi-Fi is available at most teahouses for a fee but becomes unreliable above Deurali. A local Ncell SIM card provides basic connectivity on lower sections of the trail.'
        ),
        tipItem(
          'Hot Springs Tip',
          'Pack a lightweight towel and swimwear for the Jhinu hot springs. The natural pools are a highlight of the descent and the perfect recovery for sore muscles after days of trekking.'
        ),
      ],
    },
  },
  {
    // Annapurna Circuit | Throng La Pass Trek (17 days)
    id: 'Gn8jgLeaocYXQpT7iXDre2',
    data: {
      title: 'Annapurna Circuit Trek via Thorong La Pass (5,416m)',
      helperTitle: '17-Day Ultimate Himalayan Circuit',
      rating: 5,
      difficult: 'Challenging',
      trekDescription: [
        block(
          'The Annapurna Circuit is widely regarded as one of the greatest long-distance treks on Earth — a sweeping 17-day journey that encircles the entire Annapurna massif, crossing through an astonishing diversity of landscapes, climates, and cultures. From the subtropical lowlands of the Marsyangdi Valley to the high-altitude desert of upper Manang, and finally over the legendary Thorong La Pass at 5,416m, this trek is a masterclass in Himalayan adventure.'
        ),
        block(
          'Along the way, you\'ll walk through terraced rice paddies, dense pine forests, and arid Tibetan-influenced villages. The cultural tapestry is as varied as the geography — Hindu communities in the lower valleys transition to Buddhist monasteries and prayer flag-draped settlements as you gain altitude. The descent into the sacred Muktinath temple and the dramatic Kali Gandaki gorge (the world\'s deepest) provides a fitting climax to this extraordinary trek. With well-established teahouse lodges throughout, the Circuit remains accessible to determined trekkers with good fitness.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Thorong La Pass (5,416m)',
          'Cross the highest point of the trek — a legendary Himalayan pass offering sweeping views of the Annapurna and Dhaulagiri ranges. Standing at the summit marked by prayer flags is one of trekking\'s most iconic achievements.'
        ),
        highlightItem(
          'Muktinath Temple',
          'Visit the sacred pilgrimage site at 3,710m, revered by both Hindus and Buddhists. The 108 water spouts and eternal natural gas flames make this one of the most spiritually significant sites in the Himalayas.'
        ),
        highlightItem(
          'Kali Gandaki Gorge',
          'Trek through the deepest gorge in the world, carved between the 8,000m+ peaks of Annapurna and Dhaulagiri. The scale of the landscape here is simply overwhelming.'
        ),
        highlightItem(
          'Tilicho Lake Side Trip (4,919m)',
          'Optional detour to one of the highest lakes in the world, nestled beneath the towering north face of Tilicho Peak. The turquoise waters against a backdrop of rock and ice create a surreal high-altitude landscape.'
        ),
        highlightItem(
          'Manang Valley Culture',
          'Spend acclimatization days exploring the ancient Buddhist villages of Manang and Braga, where flat-roofed stone houses cling to cliffsides and centuries-old gompas hold treasured wall paintings and scriptures.'
        ),
        highlightItem(
          'Diverse Ecosystems',
          'Experience an extraordinary range of environments — from humid subtropical forests with banana trees and waterfalls to alpine meadows, glacial moraines, and the rain shadow desert of the upper Kali Gandaki.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Airport pickup and transfer to your hotel. Evening trek briefing with your guide, gear check, and welcome dinner.'
        ),
        itineraryItem(
          'Day 2: Drive to Chame (2,670m)',
          'Scenic drive from Kathmandu through the hills to Chame, the district headquarters of Manang. The road follows the Marsyangdi River valley with increasingly dramatic mountain scenery. Approximate drive time: 8-9 hours with stops.'
        ),
        itineraryItem(
          'Day 3: Trek to Pisang (3,200m)',
          'Begin trekking through pine forests with views of Annapurna II and Lamjung Himal emerging ahead. The trail follows the river valley, passing through small farming villages and crossing wooden bridges. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 4: Trek to Manang (3,540m)',
          'A beautiful day walking through the increasingly arid upper Marsyangdi valley. Visit the ancient Braga Monastery perched on a clifftop and arrive at the bustling village of Manang, the largest settlement in the region. Distance: 11km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 5: Acclimatization Day in Manang',
          'Essential rest day for altitude adjustment. Hike to Gangapurna Lake for stunning reflections of Gangapurna peak, explore the village, visit the Himalayan Rescue Association clinic for an altitude talk, or hike to the Praken Gompa viewpoint for panoramic views.'
        ),
        itineraryItem(
          'Day 6: Trek to Yak Kharka (4,018m)',
          'Leave Manang behind as the landscape becomes increasingly barren and dramatic. The trail traverses high alpine meadows dotted with yak herds grazing beneath towering peaks. Views of the Chulu range and the Great Barrier are magnificent. Distance: 9km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to Thorong Phedi (4,525m)',
          'A shorter but critical day as you approach the base of Thorong La. The terrain becomes rocky and steep. Settle in early, hydrate well, and prepare mentally for tomorrow\'s pass crossing. Distance: 7km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 8: Cross Thorong La Pass (5,416m) to Muktinath (3,710m)',
          'The defining day of the circuit. Start before dawn (3-4am) for the steep climb to the prayer flag-draped summit. Views from the top span the Annapurna and Dhaulagiri ranges. The long descent to Muktinath is demanding on the knees but exhilarating. Visit the sacred temple upon arrival. Distance: 16km, 9-10 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to Kagbeni (2,810m)',
          'A relaxed descent into the dramatic Kali Gandaki valley. Kagbeni is a medieval-looking Tibetan village at the edge of the restricted Upper Mustang region. Explore its narrow alleys, ancient chorten, and the red-walled monastery. Distance: 10km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 10: Trek to Marpha (2,670m)',
          'Continue down the Kali Gandaki through apple orchards and whitewashed villages. Marpha is famous for its apple brandy and immaculate cobblestone streets. Sample the local produce and enjoy stunning views of Dhaulagiri. Distance: 8km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 11: Trek to Kalopani (2,530m)',
          'Walk through the increasingly lush valley with Dhaulagiri dominating the skyline to the west and Annapurna I visible to the east. The Kali Gandaki gorge reaches its deepest point in this section. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 12: Trek to Tatopani (1,190m)',
          'Dramatic descent into the subtropical lowlands. The vegetation changes rapidly as you lose altitude. Arrive at Tatopani ("hot water") and soak in the natural hot springs — a perfect reward after crossing the high pass days earlier. Distance: 14km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 13: Trek to Ghorepani (2,860m)',
          'A demanding climb from the valley floor back up to the ridge settlement of Ghorepani. The trail passes through beautiful rhododendron and oak forests. Distance: 12km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 14: Poon Hill Sunrise & Trek to Hile (1,495m)',
          'Pre-dawn climb to Poon Hill (3,210m) for a legendary sunrise panorama over Dhaulagiri, Annapurna South, Machapuchare, and the entire Annapurna range. Descend through forests and villages to Hile. Distance: 13km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 15: Trek to Nayapul & Drive to Pokhara',
          'Final morning of trekking through terraced hillsides to Nayapul. Drive to Pokhara and celebrate the completion of the full circuit with a lakeside dinner. Distance: 7km, 2-3 hours trekking.'
        ),
        itineraryItem(
          'Day 16: Pokhara to Kathmandu',
          'Morning at leisure in Pokhara — visit the World Peace Pagoda, Davis Falls, or simply relax by Phewa Lake. Afternoon flight or drive to Kathmandu. Farewell dinner with the team.'
        ),
        itineraryItem(
          'Day 17: Departure Day',
          'Transfer to Tribhuvan International Airport for your onward journey. Depart with memories of one of the world\'s most extraordinary trekking routes.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '2 nights hotel in Kathmandu and 1 night in Pokhara with breakfast',
        'All ground transportation (Kathmandu–Chame, Pokhara–Kathmandu)',
        'All trek permits and ACAP entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) for carrying luggage up to 14kg',
        'Teahouse accommodation throughout the trek',
        'Insurance for all Nepalese staff',
        'First aid medical kit',
        'All government taxes and service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare to and from Nepal',
        'Personal trekking gear and equipment',
        'Travel insurance and emergency evacuation (mandatory, min US$15,000)',
        'Meals in Kathmandu and Pokhara (except breakfast)',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Hot showers and device charging at teahouses',
        'Personal expenses (laundry, souvenirs, snacks)',
        'Tilicho Lake side trip porter/guide surcharge (if opted)',
        'Tips and gratuities for guide and porters',
        'Costs from natural disasters, cancellations, or route changes',
        'Services not mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Fitness Requirements',
          'The Annapurna Circuit is a demanding trek with long days and significant altitude gain. Train for at least 3 months before departure with a focus on cardio endurance, hill climbing, and leg strength. The Thorong La crossing day is 9-10 hours of strenuous effort at extreme altitude.'
        ),
        tipItem(
          'Thorong La Pass Strategy',
          'Arrive at Thorong Phedi well-rested and hydrated. Start the pass crossing before dawn (3-4am) to reach the summit while conditions are calm — afternoon winds can be severe. Move at a steady pace and communicate with your guide. Diamox can help but consult your doctor first.'
        ),
        tipItem(
          'Layered Clothing System',
          'Temperatures range from 30°C+ in the lowlands to -15°C at the pass. A versatile layering system is essential: moisture-wicking base layers, insulating fleece, and a waterproof windproof outer shell. Don\'t forget warm gloves, a balaclava, and quality trekking boots.'
        ),
        tipItem(
          'Best Trekking Seasons',
          'Autumn (October-November) offers the clearest views and most stable weather. Spring (March-May) brings warmer temperatures and rhododendron blooms in the lower sections. The pass may be snow-blocked in deep winter (January-February). Monsoon season is not recommended.'
        ),
        tipItem(
          'Money & Supplies',
          'Carry plenty of cash in Nepali rupees — ATMs are only available in Chame and Manang (unreliable). Prices for food and supplies increase significantly at higher elevations. Stock up on snacks and essentials in lower villages.'
        ),
        tipItem(
          'Route Flexibility',
          'Road construction has altered some lower sections of the traditional circuit. Your guide will optimize the route to maximize trail walking and minimize road sections. The Tilicho Lake detour adds 2-3 days but is highly rewarding if time allows.'
        ),
      ],
    },
  },
  {
    // Mardi Himal Trek (10 days)
    id: 'Gn8jgLeaocYXQpT7iXDroo',
    data: {
      title: 'Mardi Himal Trek (4,500m)',
      helperTitle: '10-Day Hidden Gem of Annapurna',
      rating: 5,
      difficult: 'Moderate',
      trekDescription: [
        block(
          'The Mardi Himal Trek is Nepal\'s best-kept secret — a relatively new and uncrowded trail that takes you along a stunning high ridge directly beneath the towering south face of Mardi Himal (5,587m) and Machapuchare (Fishtail Mountain). Unlike the busier Annapurna trails, this 10-day journey offers a sense of genuine wilderness and solitude, with sections of the trail passing through pristine forests and high meadows where you may not encounter another trekker for hours.'
        ),
        block(
          'The trek follows a dramatic ridgeline that offers continuously changing perspectives of Annapurna South, Hiunchuli, Machapuchare, and the entire Annapurna range. The high camp at 4,500m provides an intimate vantage point that rivals views from much longer and harder treks. With comfortable teahouse accommodation on most nights, manageable daily distances, and no extreme altitude challenges, Mardi Himal is perfect for trekkers seeking spectacular mountain scenery without the crowds.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Mardi Himal High Camp (4,500m)',
          'Stand on a dramatic ridgeline directly beneath the massive south face of Mardi Himal. The panoramic views of Machapuchare, Annapurna South, Hiunchuli, and the surrounding peaks are simply extraordinary.'
        ),
        highlightItem(
          'Off-the-Beaten-Path Experience',
          'One of the least crowded treks in the Annapurna region. Enjoy genuine solitude and wilderness as you walk along ridgelines and through forests that few international trekkers have explored.'
        ),
        highlightItem(
          'Ridge Walk to High Camp',
          'The approach to high camp follows a narrow, exposed ridgeline with dramatic drop-offs on both sides — an exhilarating trail section with continuously unfolding mountain views that ranks among Nepal\'s finest day walks.'
        ),
        highlightItem(
          'Rhododendron & Oak Forests',
          'Trek through ancient forests draped in moss and lichen, alive with bird calls and the occasional red panda sighting. During spring, the rhododendrons create a spectacular canopy of color overhead.'
        ),
        highlightItem(
          'Machapuchare Close-Up',
          'Get an unparalleled close-up perspective of the sacred Fishtail Mountain — its twin summit appears to be almost within arm\'s reach from the upper camps, creating incredible photographic opportunities.'
        ),
        highlightItem(
          'Pokhara Valley Views',
          'The early sections of the trek offer beautiful views down to Phewa Lake and the Pokhara Valley below, with the Annapurna range rising above — a perfect blend of lowland charm and mountain grandeur.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Airport pickup and hotel transfer. Evening trek briefing, gear check, and welcome dinner in Thamel.'
        ),
        itineraryItem(
          'Day 2: Fly/Drive to Pokhara & Drive to Kande (1,770m)',
          'Transfer to Pokhara (scenic flight or tourist bus), then drive to the trailhead at Kande. Begin a short trek through oak forest to Australian Camp for the night. Distance: 3km, 1-2 hours trekking.'
        ),
        itineraryItem(
          'Day 3: Trek to Forest Camp (2,520m)',
          'Ascend through beautiful rhododendron and oak forest along the Mardi ridge. The trail is well-shaded and peaceful, with intermittent views of the Annapurna range through the canopy. Distance: 7km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 4: Trek to Low Camp (2,990m)',
          'Continue along the forested ridge as the vegetation gradually thins. Emerging above the treeline, the first truly spectacular views of Machapuchare and Mardi Himal unfold. The sense of wilderness intensifies. Distance: 5km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to High Camp (3,580m)',
          'Cross alpine meadows and rocky terrain as the ridge narrows. The high camp sits on an exposed ledge with jaw-dropping views in every direction. Sunset here, with the surrounding peaks turning golden, is genuinely magical. Distance: 5km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 6: Hike to Upper Viewpoint (4,500m) & Return to High Camp',
          'The highlight of the trek. Early morning ascent along the narrow ridgeline to the upper viewpoint at 4,500m. The panorama from here is staggering — Mardi Himal\'s south face fills the sky while Annapurna South, Hiunchuli, and Machapuchare stand in a semicircle around you. Return to High Camp. Distance: 6km round trip, 4-5 hours.'
        ),
        itineraryItem(
          'Day 7: Descend to Forest Camp (2,520m)',
          'Retrace your steps along the ridge with views you may have missed on the way up. The descent through the forest feels magical in the afternoon light. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Trek to Siding & Drive to Pokhara',
          'Continue descending through villages and farmland to Siding, where your vehicle awaits. Drive to Pokhara for a well-deserved lakeside celebration dinner. Distance: 6km, 3-4 hours trekking.'
        ),
        itineraryItem(
          'Day 9: Pokhara Sightseeing & Transfer',
          'Morning at leisure — visit the International Mountain Museum, take a boat ride on Phewa Lake, or explore the Old Bazaar. Afternoon flight or drive to Kathmandu. Farewell dinner.'
        ),
        itineraryItem(
          'Day 10: Departure Day',
          'Airport transfer for your onward journey. Carry home memories of one of Nepal\'s most beautiful and uncrowded treks.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '1 night hotel in Kathmandu and 1 night in Pokhara with breakfast',
        'All ground transportation (Pokhara–Kande, Siding–Pokhara)',
        'All trek permits and ACAP entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) up to 14kg',
        'Teahouse/lodge accommodation throughout the trek',
        'Insurance for all Nepalese staff',
        'First aid medical kit',
        'Government taxes and service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Kathmandu–Pokhara transportation (flight or tourist bus)',
        'Personal trekking gear and equipment',
        'Travel insurance and emergency evacuation (mandatory, min US$15,000)',
        'Meals in cities (except breakfast)',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Hot showers and device charging at lodges',
        'Personal expenses (laundry, souvenirs, snacks)',
        'Tips and gratuities for guide and porters',
        'Costs from natural disasters or route changes',
        'Services not mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Fitness Level',
          'Moderate fitness is required. Daily walks of 4-6 hours with elevation gain of 500-700m are typical. Train with regular hiking and stair climbing for at least 6 weeks beforehand. No technical skills needed.'
        ),
        tipItem(
          'Weather Exposure',
          'The ridge is exposed to wind and weather. Conditions can change rapidly above 3,000m — bring a quality windproof/waterproof jacket, warm hat, and gloves even in spring and autumn. Morning starts tend to have calmer conditions.'
        ),
        tipItem(
          'Limited Facilities',
          'Accommodation above Forest Camp is basic — small lodges with limited menu options. Bring your own snacks, a good sleeping bag rated to -10°C, and a headlamp. Charging facilities may be unavailable at higher camps.'
        ),
        tipItem(
          'Best Time to Go',
          'October-November offers the clearest views and most comfortable temperatures. March-May brings rhododendron blooms but slightly hazier conditions. This trek is not recommended during monsoon (June-August) due to slippery ridge trails.'
        ),
        tipItem(
          'Photography',
          'This trek is a photographer\'s paradise. Bring extra batteries (cold drains them fast), a wide-angle lens, and a lightweight tripod for sunrise shots at High Camp. The golden hour light on Machapuchare is legendary.'
        ),
      ],
    },
  },
  {
    // Ghorepani Poon Hill Trek (8 days)
    id: 'Gn8jgLeaocYXQpT7iXDrza',
    data: {
      title: 'Ghorepani Poon Hill Trek (3,210m)',
      helperTitle: '8-Day Classic Sunrise Trek',
      rating: 5,
      difficult: 'Easy to Moderate',
      trekDescription: [
        block(
          'The Ghorepani Poon Hill Trek is the most popular short trek in the Annapurna region and an ideal introduction to Himalayan trekking. In just 8 days, you\'ll experience the full magic of Nepal — terraced hillsides, charming Gurung and Magar villages, dense rhododendron forests, and one of the most celebrated sunrise viewpoints in the Himalayas at Poon Hill (3,210m). The panoramic vista from the summit encompasses over a dozen major peaks, including Dhaulagiri (8,167m), Annapurna South, Machapuchare (Fishtail), Nilgiri, and the entire Annapurna range.'
        ),
        block(
          'This trek is perfect for first-time trekkers, families, and anyone with limited time who still wants an authentic mountain experience. The trails are well-maintained with comfortable teahouse lodges offering warm beds, hot meals, and even Wi-Fi along most of the route. Despite its accessibility, the trek doesn\'t compromise on scenery — the views are genuinely world-class, the cultural encounters are heartfelt, and the sense of accomplishment upon watching sunrise from Poon Hill is profound.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Poon Hill Sunrise (3,210m)',
          'One of Nepal\'s most famous viewpoints. Watch dawn break over a panorama spanning from Dhaulagiri in the west to Manaslu in the east, with Annapurna South and Machapuchare stealing the show in between.'
        ),
        highlightItem(
          'Ghandruk Village',
          'Explore one of the most picturesque Gurung villages in Nepal. Stone-paved paths wind between traditional houses with stunning mountain backdrops. Visit the Gurung museum and experience authentic local hospitality.'
        ),
        highlightItem(
          'Rhododendron Forests',
          'Walk through some of Nepal\'s finest rhododendron forests, particularly spectacular in spring (March-April) when the hillsides explode in red, pink, and white blooms beneath snow-capped peaks.'
        ),
        highlightItem(
          'Gurung & Magar Culture',
          'Pass through traditional hill villages where life has changed little for centuries. Enjoy dal bhat with local families, learn about traditional customs, and witness the warmth that makes Nepal famous for its hospitality.'
        ),
        highlightItem(
          'Accessible for Beginners',
          'Well-maintained trails, moderate altitude, and comfortable teahouses make this the perfect introductory trek. The maximum elevation of 3,210m means altitude sickness is rarely a concern for acclimatized trekkers.'
        ),
        highlightItem(
          'Stunning Mountain Panorama',
          'Continuous views of over a dozen Himalayan peaks throughout the trek, including three 8,000m+ summits visible on clear days — Dhaulagiri, Annapurna I, and Manaslu on the distant horizon.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu (1,400m)',
          'Airport pickup, hotel transfer, and evening trek briefing with your guide. Gear check and welcome dinner in Thamel.'
        ),
        itineraryItem(
          'Day 2: Drive to Nayapul & Trek to Tikhedhunga (1,540m)',
          'Morning drive to Pokhara then continue to the trailhead at Nayapul. Begin trekking along the Modi Khola through villages and terraced farmland to the village of Tikhedhunga. Distance: 6km, 3-4 hours trekking.'
        ),
        itineraryItem(
          'Day 3: Trek to Ghorepani (2,860m)',
          'The most challenging day — climb the famous stone staircase (over 3,000 steps!) through beautiful forest with increasing mountain views. Arrive at the hillside village of Ghorepani in the afternoon with views of Dhaulagiri. Distance: 10km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 4: Poon Hill Sunrise & Trek to Tadapani (2,630m)',
          'Wake at 4:30am for the 45-minute climb to Poon Hill summit. Watch an unforgettable sunrise paint the Himalayan skyline in gold and pink. Return for breakfast, then trek through dense rhododendron forest to the peaceful village of Tadapani. Distance: 9km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Ghandruk (1,940m)',
          'Descend through beautiful forest with views of Annapurna South and Machapuchare. Ghandruk is one of the most charming villages in Nepal — explore its stone-paved streets, visit the Gurung Museum, and enjoy mountain views from your teahouse. Distance: 7km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 6: Trek to Nayapul & Drive to Pokhara',
          'Final morning on the trail, descending through terraced fields and small villages to Nayapul. Drive to Pokhara and enjoy a celebratory lakeside dinner. Distance: 9km, 4-5 hours trekking.'
        ),
        itineraryItem(
          'Day 7: Pokhara to Kathmandu',
          'Morning at leisure in Pokhara — boat ride on Phewa Lake, visit Davis Falls, or relax. Afternoon transfer to Kathmandu. Farewell dinner with the team.'
        ),
        itineraryItem(
          'Day 8: Departure Day',
          'Airport transfer for your onward journey. Depart Nepal with memories of stunning Himalayan sunrises and warm Nepali hospitality.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '1 night hotel in Kathmandu and 1 night in Pokhara with breakfast',
        'All ground transportation (Pokhara–Nayapul–Pokhara)',
        'All trek permits and ACAP entry fees',
        'Full board meals (breakfast, lunch, dinner) with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) up to 14kg',
        'Teahouse accommodation throughout',
        'Insurance for all Nepalese staff',
        'First aid medical kit',
        'Government taxes and service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Kathmandu–Pokhara transportation (flight or tourist bus)',
        'Personal trekking gear and equipment',
        'Travel insurance (recommended, min US$10,000)',
        'Meals in cities (except breakfast)',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Hot showers and device charging at teahouses',
        'Personal expenses (laundry, souvenirs, snacks)',
        'Tips and gratuities for guide and porters',
        'Costs from natural disasters or route changes',
        'Services not mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Fitness Level',
          'This trek is suitable for beginners with reasonable fitness. The main challenge is Day 3\'s stone staircase — regular walking and stair climbing for 4-6 weeks beforehand will make it much more enjoyable.'
        ),
        tipItem(
          'Poon Hill Morning',
          'The sunrise climb takes about 45 minutes. Bring a headlamp, warm layers, and gloves — it\'s cold and dark at 4:30am. The viewpoint can get busy, so arrive early for the best position. Hot tea is available at the top.'
        ),
        tipItem(
          'Best Season',
          'October-November delivers the clearest skies and most reliable views. March-April offers warmer temperatures and blooming rhododendrons. December-February is cold but uncrowded with excellent visibility. Avoid June-August monsoon.'
        ),
        tipItem(
          'Packing Light',
          'This is a lower-altitude trek so you don\'t need extreme cold weather gear. A good down jacket, waterproof layer, fleece, and broken-in trekking boots cover most needs. A sleeping bag liner can add comfort at teahouses.'
        ),
        tipItem(
          'Family Friendly',
          'This trek is suitable for children aged 10+ with some hiking experience. The teahouses are comfortable, the trails are well-marked, and the daily distances are manageable. It\'s a wonderful introduction to trekking for families.'
        ),
      ],
    },
  },
  {
    // Poon Hill Annapurna Base Camp Trek (13 days)
    id: 'BdOU0U0xFBxFenCTMZUzuH',
    data: {
      title: 'Poon Hill & Annapurna Base Camp Combined Trek',
      helperTitle: '13-Day Ultimate Annapurna Experience',
      rating: 5,
      difficult: 'Moderate to Challenging',
      trekDescription: [
        block(
          'Why choose between Nepal\'s two most iconic Annapurna experiences when you can have both? This 13-day combined trek links the legendary Poon Hill sunrise viewpoint with the awe-inspiring Annapurna Base Camp, creating the ultimate Annapurna adventure. You\'ll witness the sunrise panorama over Dhaulagiri and the Annapurna range from Poon Hill, then journey deep into the Annapurna Sanctuary to stand beneath the towering walls of the mountain amphitheatre at Base Camp.'
        ),
        block(
          'The route takes you through an incredible diversity of landscapes — from subtropical river valleys and terraced farmland, through dense rhododendron forests and traditional Gurung villages, up to the stark glacial world of the Annapurna Sanctuary. This combined itinerary is the most comprehensive way to experience the Annapurna region, covering both the panoramic ridgeline views and the intimate base camp experience in a single trek. With well-placed acclimatization and a logical route that minimizes backtracking, it\'s an efficient yet thorough exploration of one of the world\'s greatest trekking regions.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Two Iconic Destinations in One Trek',
          'Experience both Poon Hill\'s legendary sunrise panorama and the dramatic amphitheatre of Annapurna Base Camp — the best of the Annapurna region combined into a single unforgettable journey.'
        ),
        highlightItem(
          'Poon Hill Sunrise (3,210m)',
          'Watch dawn break over a horizon filled with Himalayan giants — Dhaulagiri, Annapurna South, Machapuchare, Nilgiri, and more. The 360-degree panorama from the summit is widely considered one of Nepal\'s finest views.'
        ),
        highlightItem(
          'Annapurna Sanctuary Amphitheatre',
          'Stand at 4,130m surrounded by a complete circle of peaks exceeding 7,000m — Annapurna I, Machapuchare, Gangapurna, Annapurna South, and Hiunchuli create one of the most dramatic natural arenas on Earth.'
        ),
        highlightItem(
          'Diverse Trail Experience',
          'From lowland paddy fields to alpine glacial moraines, this route covers every ecological zone Nepal has to offer. The variety keeps every day fresh and exciting.'
        ),
        highlightItem(
          'Gurung Village Life',
          'Spend time in authentic hill villages like Ghandruk and Chhomrong, where centuries of Gurung culture come alive through traditional architecture, warm hospitality, and hearty mountain cuisine.'
        ),
        highlightItem(
          'Jhinu Hot Springs',
          'Soak away the trail\'s exertion in natural riverside hot springs — the perfect mid-trek or end-of-trek reward for tired muscles.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu',
          'Airport pickup, hotel transfer, trek briefing, and welcome dinner.'
        ),
        itineraryItem(
          'Day 2: Drive to Nayapul & Trek to Tikhedhunga (1,540m)',
          'Drive from Pokhara to Nayapul and begin trekking through villages along the Modi Khola valley. A gentle introduction to the trail. Distance: 6km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 3: Trek to Ghorepani (2,860m)',
          'Climb the famous stone staircase through oak and rhododendron forest. Arrive at Ghorepani with spectacular views of Dhaulagiri as your reward. Distance: 10km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 4: Poon Hill Sunrise & Trek to Chhomrong (2,170m)',
          'Pre-dawn climb to Poon Hill for a spectacular sunrise. After breakfast, trek through forests and villages to the hillside settlement of Chhomrong — the gateway to the Annapurna Sanctuary. Distance: 14km, 7-8 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Bamboo (2,310m)',
          'Descend to the river and climb through Sinuwa before entering the deep Modi Khola gorge. The bamboo forest section is atmospheric and teeming with birdlife. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 6: Trek to Deurali (3,230m)',
          'Ascend through the narrowing valley as vegetation thins. The gateway to the Sanctuary narrows dramatically with towering cliffs on either side. Distance: 7km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to ABC (4,130m) via MBC (3,700m)',
          'Trek to Machapuchare Base Camp and then continue into the full amphitheatre at Annapurna Base Camp. The sense of scale is overwhelming. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Sunrise at ABC & Descend to Bamboo (2,310m)',
          'Early morning sunrise at ABC — watch the peaks light up in sequence. After breakfast, begin your descent, covering significant ground as you lose altitude. Distance: 15km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to Jhinu Danda (1,780m)',
          'Continue descending through familiar terrain. Reward yourself with a soak in the natural hot springs at Jhinu Danda in the afternoon. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 10: Trek to Nayapul & Drive to Pokhara',
          'Final stretch through terraced farmland back to Nayapul. Drive to Pokhara for a lakeside celebration. Distance: 8km, 3-4 hours trekking.'
        ),
        itineraryItem(
          'Day 11: Pokhara Sightseeing',
          'A full day to explore Pokhara — boat on Phewa Lake, visit the World Peace Pagoda, explore caves and waterfalls, or simply relax with mountain views.'
        ),
        itineraryItem(
          'Day 12: Transfer to Kathmandu',
          'Scenic flight or drive to Kathmandu. Farewell dinner with the team at a traditional Nepali restaurant.'
        ),
        itineraryItem(
          'Day 13: Departure Day',
          'Airport transfer for your onward journey. Take home memories of two of Nepal\'s greatest trekking destinations experienced in a single adventure.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        '2 nights hotel in Kathmandu and 2 nights in Pokhara with breakfast',
        'All ground transportation',
        'All trek permits and ACAP entry fees',
        'Full board meals with tea/coffee during the trek',
        'Experienced, certified English-speaking trekking guide',
        'Porter service (2 trekkers per porter) up to 14kg',
        'Teahouse accommodation throughout',
        'Insurance for all Nepalese staff',
        'First aid medical kit',
        'Government taxes and service charges',
        'Trek completion certificate',
        'Clip Himalaya duffle bag and trekking cap',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Kathmandu–Pokhara transportation',
        'Personal trekking gear',
        'Travel insurance and emergency evacuation (mandatory, min US$15,000)',
        'Meals in cities (except breakfast)',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Hot showers and device charging',
        'Personal expenses',
        'Tips and gratuities for guide and porters',
        'Costs from natural disasters or route changes',
        'Services not in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Combined Trek Fitness',
          'This is a longer trek than either Poon Hill or ABC alone. Expect 6-8 hour trekking days with significant ups and downs. Train for at least 10 weeks with progressive hiking, stair climbing, and cardio workouts.'
        ),
        tipItem(
          'Acclimatization',
          'The route naturally builds altitude — Poon Hill at 3,210m prepares your body for the push to ABC at 4,130m. Stay hydrated, don\'t rush, and communicate with your guide about how you\'re feeling.'
        ),
        tipItem(
          'Packing Strategy',
          'Pack for both warm lowlands and cold highlands. Layers are essential. A sleeping bag rated to -10°C, waterproof jacket, warm hat and gloves, and broken-in boots are must-haves. Keep your daypack under 6kg.'
        ),
        tipItem(
          'Spring vs Autumn',
          'Autumn (October-November) offers the best visibility and stable weather. Spring (March-May) is warmer with rhododendron blooms and fewer trekkers on the Poon Hill section. Both seasons are excellent choices.'
        ),
        tipItem(
          'Energy & Nutrition',
          'Bring energy bars, trail mix, and electrolyte packets to supplement teahouse meals. At higher elevations, appetite decreases but calorie needs increase. Eating well is crucial for maintaining energy and aiding acclimatization.'
        ),
      ],
    },
  },
  {
    // Damodar Kunda Trek (23 days)
    id: 'Gn8jgLeaocYXQpT7iXDsAM',
    data: {
      title: 'Damodar Kunda Trek (4,890m)',
      helperTitle: '23-Day Sacred High-Altitude Pilgrimage',
      rating: 4,
      difficult: 'Challenging',
      trekDescription: [
        block(
          'The Damodar Kunda Trek is one of Nepal\'s most remote and spiritually significant journeys — a 23-day expedition to a sacred glacial lake at 4,890m in the restricted Upper Mustang region. Damodar Kunda holds deep religious importance for both Hindus and Buddhists, who believe that Lord Vishnu resides in its icy waters. The lake is fed by the Damodar Himal glacier and surrounded by barren, wind-sculpted landscapes that feel utterly otherworldly.'
        ),
        block(
          'This trek ventures far beyond the tourist trails into some of Nepal\'s least-visited terrain. You\'ll traverse the rain shadow desert of Upper Mustang with its Tibetan-influenced culture, cross high passes above 5,000m, and camp in locations where the only signs of life are distant yak herds and soaring Himalayan griffon vultures. The journey passes through ancient walled cities, cave monasteries, and settlements where Tibetan traditions have remained unchanged for centuries. This is a trek for experienced adventurers seeking genuine wilderness, cultural depth, and spiritual significance in one of the last truly remote corners of the Himalayas.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Damodar Kunda Sacred Lake (4,890m)',
          'Reach the holy glacial lake considered the source of the Kali Gandaki River. Pilgrims believe a dip in its sacred waters washes away sins. The setting — a dark lake ringed by ice-clad peaks — is hauntingly beautiful.'
        ),
        highlightItem(
          'Upper Mustang Restricted Area',
          'Enter one of Nepal\'s most exclusive trekking regions, requiring a special permit. The preserved medieval Tibetan culture, ancient cave cities, and dramatic desert landscapes here are unlike anywhere else in Nepal.'
        ),
        highlightItem(
          'Tibetan Buddhist Heritage',
          'Visit ancient monasteries, sky caves, and walled settlements including the former kingdom of Lo. The cultural richness of this region — with its painted gompas, chortens, and prayer walls — is extraordinary.'
        ),
        highlightItem(
          'Remote Desert Landscapes',
          'Trek through the dramatic rain shadow desert of the trans-Himalayan zone, where wind-eroded cliffs, red and ochre rock formations, and vast empty valleys create landscapes resembling another planet.'
        ),
        highlightItem(
          'High Passes & Mountain Views',
          'Cross multiple passes above 5,000m with views of Dhaulagiri, Annapurna, Nilgiri, and the Damodar Himal range. The sense of scale and isolation at these heights is profound.'
        ),
        highlightItem(
          'Camping Under Himalayan Skies',
          'This is a camping trek through genuinely remote terrain. Fall asleep beneath some of the clearest, most star-filled skies on Earth, far from any light pollution.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu',
          'Airport pickup, hotel transfer, permit processing, and trek briefing with your expedition leader.'
        ),
        itineraryItem(
          'Day 2: Fly to Pokhara & Prepare',
          'Scenic flight to Pokhara. Final equipment check, meet your full expedition team, and preparation briefing for the remote sections ahead.'
        ),
        itineraryItem(
          'Day 3: Fly to Jomsom (2,720m)',
          'Thrilling mountain flight to Jomsom through the Kali Gandaki valley with Dhaulagiri and Annapurna on either side. Afternoon acclimatization walk around the windy airstrip town.'
        ),
        itineraryItem(
          'Day 4: Trek to Kagbeni (2,810m)',
          'Short trek along the Kali Gandaki to the medieval gateway village of Kagbeni. Explore its narrow alleys, red monastery, and the checkpoint marking the entrance to Upper Mustang. Distance: 5km, 2-3 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Chele (3,050m)',
          'Enter the restricted area. The landscape transforms immediately as you climb above the river into arid, wind-carved terrain with dramatic red and grey cliff formations. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 6: Trek to Syangboche (3,475m)',
          'Cross the Chele La pass and descend into a hidden valley. The trail passes ancient sky caves and eroded badlands that look almost extraterrestrial. Distance: 14km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to Ghami (3,520m)',
          'Cross the Syangboche La and descend to Ghami, one of the largest settlements in Upper Mustang. Visit the impressive mani wall — one of the longest in Nepal — and the local monastery. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Trek to Tsarang (3,560m)',
          'Cross the Nyi La pass with views of the Annapurna range behind you. Tsarang was historically the second capital of Mustang and features an impressive dzong (fortress) and ancient monastery with remarkable murals. Distance: 10km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to Lo Manthang (3,810m)',
          'Arrive at the walled capital of the former Kingdom of Lo — one of the best-preserved medieval Tibetan cities in the world. Enter through the single gate and explore the royal palace, four major monasteries, and labyrinthine streets. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 10: Explore Lo Manthang',
          'Full day exploring the walled city. Visit Jampa Lhakhang (monastery of the future Buddha), Thubchen Gompa with its extraordinary wall paintings, the royal palace, and local artisan workshops. Attend a prayer ceremony if timing allows.'
        ),
        itineraryItem(
          'Day 11: Trek to Yara (3,650m)',
          'Leave Lo Manthang heading east into increasingly remote territory. The trail follows ancient trade routes through barren valleys with distant views of the Damodar Himal. Distance: 14km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 12: Trek to Luri Cave Monastery & Camp (3,900m)',
          'Visit the remarkable Luri Cave monastery — a centuries-old Buddhist shrine carved into a cliff face with well-preserved paintings. Continue to a remote camping spot. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 13: Trek to Damodar Kunda Base (4,320m)',
          'Enter the high alpine zone as the last traces of vegetation disappear. The terrain becomes increasingly stark and glacial. Set up base camp for the approach to the sacred lake. Distance: 12km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 14: Damodar Kunda (4,890m) & Return to Base',
          'The pinnacle of the expedition. Ascend to the sacred lake surrounded by glacial moraines and ice-clad peaks. Spend time at the lake for reflection and photos before returning to base camp. Distance: 12km round trip, 6-7 hours.'
        ),
        itineraryItem(
          'Day 15: Trek to Yara (3,650m)',
          'Begin the return journey, descending from the high camp through the barren upper valley back to Yara. Distance: 16km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 16: Trek to Dhi (3,400m)',
          'Continue south through eroded canyons and hidden villages. Dhi sits dramatically in a side canyon with painted cliffs and ancient ruins. Distance: 10km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 17: Trek to Ghami (3,520m)',
          'Rejoin the main Mustang trail via the Dhi La pass. Revisit familiar landmarks with fresh perspective on the return. Distance: 12km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 18: Trek to Samar (3,290m)',
          'Continue south through the wind-sculpted desert landscape, crossing passes and descending into the Samar valley. Distance: 14km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 19: Trek to Kagbeni (2,810m)',
          'Exit the restricted area and descend back to the medieval village of Kagbeni. Enjoy the relative comfort and celebrate completing the remote section. Distance: 14km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 20: Trek to Jomsom (2,720m)',
          'Short final trek day along the Kali Gandaki back to Jomsom. Rest and resupply. Distance: 5km, 2-3 hours.'
        ),
        itineraryItem(
          'Day 21: Fly to Pokhara',
          'Morning flight from Jomsom back to Pokhara. Afternoon at leisure — massage, lakeside relaxation, or sightseeing.'
        ),
        itineraryItem(
          'Day 22: Pokhara to Kathmandu',
          'Transfer to Kathmandu by flight or scenic drive. Farewell dinner celebrating the completion of an extraordinary expedition.'
        ),
        itineraryItem(
          'Day 23: Departure Day',
          'Airport transfer for your onward journey. Carry home memories of one of Nepal\'s most remote and spiritually profound treks.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        'Hotel accommodation in Kathmandu and Pokhara with breakfast',
        'Domestic flights: Kathmandu–Pokhara–Jomsom–Pokhara–Kathmandu',
        'Upper Mustang restricted area permit (US$500 per person for 10 days)',
        'All trek permits and ACAP entry fees',
        'Full board meals throughout the trek',
        'Experienced expedition leader and assistant guide',
        'Porter/mule service for equipment and luggage',
        'Camping equipment (tents, sleeping mats, kitchen equipment)',
        'Teahouse accommodation where available',
        'Insurance for all Nepalese staff',
        'First aid and emergency medical kit',
        'Satellite phone for emergencies',
        'All government taxes and service charges',
        'Trek completion certificate',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Personal trekking and camping gear',
        'Travel insurance with helicopter evacuation coverage (mandatory, min US$50,000)',
        'Meals in cities (except breakfast)',
        'Personal expenses and tips',
        'Alcoholic beverages and soft drinks',
        'Extra Upper Mustang permit days if trek extends beyond 10 days',
        'Satellite phone usage charges',
        'Any costs from natural disasters, cancellations, or route changes',
        'Services not mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Permit Requirements',
          'Upper Mustang requires a special restricted area permit costing US$500 per person for the first 10 days, plus US$50 per additional day. Permits must be arranged in advance through a registered trekking agency — independent trekking is not allowed.'
        ),
        tipItem(
          'Expedition-Level Fitness',
          'This is a demanding 23-day expedition with multiple days above 4,000m and a high point near 5,000m. Train intensively for at least 4 months with progressive altitude exposure if possible. Previous high-altitude trekking experience is strongly recommended.'
        ),
        tipItem(
          'Extreme Weather Preparedness',
          'The Upper Mustang region is a high-altitude desert with extreme temperature swings — scorching sun during the day and well below freezing at night. Bring a 4-season sleeping bag, comprehensive sun protection, and warm layering for evening camps.'
        ),
        tipItem(
          'Best Season',
          'June-September (monsoon) is actually ideal for Upper Mustang as the region lies in the rain shadow and receives minimal precipitation while the rest of Nepal is wet. May-June and September-October also work well. Winter is extremely cold and windy.'
        ),
        tipItem(
          'Remote Area Considerations',
          'There are no medical facilities, ATMs, or reliable communication beyond Jomsom. Carry all necessary medications, sufficient cash, and ensure your travel insurance includes helicopter evacuation from remote areas.'
        ),
        tipItem(
          'Cultural Sensitivity',
          'Upper Mustang is a preserved cultural area. Always ask permission before photographing people or religious sites. Walk clockwise around Buddhist monuments and mani walls. Respect local customs regarding monastery visits and sacred sites.'
        ),
      ],
    },
  },
  {
    // Tent Peak Climbing (5,850m) (21 days)
    id: 'XejQA1ZUhEQcECOLGt9azD',
    data: {
      title: 'Tent Peak (Tharpu Chuli) Climbing (5,850m)',
      helperTitle: '21-Day Climbing Expedition in Annapurna Sanctuary',
      rating: 4,
      difficult: 'Strenuous',
      trekDescription: [
        block(
          'Tent Peak (Tharpu Chuli) at 5,850m is one of Nepal\'s most accessible climbing peaks, offering a genuine mountaineering experience within the spectacular setting of the Annapurna Sanctuary. This 21-day expedition combines the classic Annapurna Base Camp trek with a summit attempt on a peak that requires basic mountaineering skills — fixed ropes, crampons, ice axes, and glacier travel. It\'s the perfect stepping stone for trekkers looking to transition from high-altitude hiking to actual Himalayan climbing.'
        ),
        block(
          'The route follows the ABC trail through lush forests and Gurung villages before entering the glacial amphitheatre of the Annapurna Sanctuary. From Base Camp at 4,130m, you\'ll establish a high camp on Tent Peak\'s slopes before attempting the summit via the northwest ridge. The summit panorama is breathtaking — Annapurna I, Machapuchare, Gangapurna, Annapurna South, and a sea of Himalayan peaks spread before you in every direction. With proper training, good fitness, and expert guiding, Tent Peak offers an achievable and immensely rewarding Himalayan summit experience.'
        ),
      ],
      keyHighlights: [
        highlightItem(
          'Summit of Tent Peak (5,850m)',
          'Stand on a genuine Himalayan summit with 360-degree views of the Annapurna Sanctuary. The summit experience — roped up with crampons, standing atop a snow peak surrounded by 8,000m giants — is life-changing.'
        ),
        highlightItem(
          'Mountaineering Skills',
          'Learn and practice essential climbing techniques including fixed rope ascent, crampon walking, ice axe use, and glacier safety. This is an ideal "first climb" for aspiring mountaineers.'
        ),
        highlightItem(
          'Annapurna Sanctuary Setting',
          'Your climb takes place within one of the most dramatic natural amphitheatres on Earth. The sanctuary setting adds an extra dimension of beauty and awe to the climbing experience.'
        ),
        highlightItem(
          'ABC Trek Included',
          'The approach includes the full Annapurna Base Camp trek experience — rhododendron forests, Gurung villages, hot springs, and the iconic base camp views.'
        ),
        highlightItem(
          'Professional Climbing Support',
          'Expert climbing Sherpas handle all technical route-setting including fixed ropes, anchors, and safety equipment. You\'ll receive a thorough mountaineering briefing and hands-on training before the summit attempt.'
        ),
        highlightItem(
          'NMA Climbing Peak Certificate',
          'Successfully summiting Tent Peak earns you an official Nepal Mountaineering Association climbing peak certificate — a meaningful credential for future climbing objectives.'
        ),
      ],
      itineraryDetails: [
        itineraryItem(
          'Day 1: Arrival in Kathmandu',
          'Airport pickup, hotel transfer, and expedition briefing. Meet your climbing guide and team. Gear check and final equipment review.'
        ),
        itineraryItem(
          'Day 2: Kathmandu Preparation',
          'Finalize permits and paperwork. Last-minute gear shopping if needed. Climbing skills orientation session with your guide. Welcome dinner with the full expedition team.'
        ),
        itineraryItem(
          'Day 3: Drive to Pokhara',
          'Scenic drive or flight to the lakeside city of Pokhara. Afternoon equipment organization and packing. Enjoy your last evening of city comfort before the expedition begins.'
        ),
        itineraryItem(
          'Day 4: Drive to Nayapul & Trek to Tikhedhunga (1,540m)',
          'Drive to the trailhead and begin trekking through the Modi Khola valley. A gentle start through villages and farmland. Distance: 6km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 5: Trek to Ghorepani (2,860m)',
          'Climb through dense forest with growing mountain views. A strong day of ascent that serves as good training for the challenges ahead. Distance: 11km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 6: Poon Hill & Trek to Chhomrong (2,170m)',
          'Optional Poon Hill sunrise, then continue to Chhomrong — the gateway to the Annapurna Sanctuary. Distance: 12km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 7: Trek to Bamboo (2,310m)',
          'Enter the Modi Khola gorge through dense bamboo forest. The valley narrows dramatically as you approach the Sanctuary. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 8: Trek to Deurali (3,230m)',
          'Ascend through the narrowing valley. The terrain becomes increasingly glacial and the surrounding peaks ever more imposing. Distance: 7km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 9: Trek to ABC (4,130m) via MBC',
          'Enter the Annapurna Sanctuary amphitheatre. The scale of the surrounding peaks is humbling. This will be your base for the climbing phase. Distance: 8km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 10: Acclimatization & Training at ABC',
          'Rest and acclimatize at base camp. Afternoon mountaineering skills session: practice crampon walking, ice axe self-arrest, fixed rope ascent/descent, and knot tying with your climbing guide.'
        ),
        itineraryItem(
          'Day 11: Move to Tent Peak Base Camp (4,600m)',
          'Short trek to the base of Tent Peak. Set up camp and review the climbing route. Evening briefing on summit day strategy, timing, and safety protocols. Distance: 3km, 2-3 hours.'
        ),
        itineraryItem(
          'Day 12: Climb to High Camp (5,200m)',
          'Ascend the lower slopes to establish high camp on a snow shelf. Practice climbing techniques on the actual terrain. Early rest for the summit attempt. Distance: 3km, 4-5 hours.'
        ),
        itineraryItem(
          'Day 13: Summit Day — Tent Peak (5,850m)',
          'Pre-dawn start (2-3am) for the summit push via the northwest ridge. Fixed ropes on the steep upper section lead to the narrow summit ridge. The sunrise panorama from the top — Annapurna I, Machapuchare, Gangapurna — is indescribable. Descend to ABC. Distance: 8km, 10-12 hours total.'
        ),
        itineraryItem(
          'Day 14: Reserve/Weather Day at ABC',
          'Built-in contingency day in case summit attempt is pushed back by weather. If summit was successful, rest and celebrate at ABC. A second summit attempt can be made if the first was unsuccessful.'
        ),
        itineraryItem(
          'Day 15: Descend to Bamboo (2,310m)',
          'Begin the return journey, descending rapidly through the Sanctuary and into the forest zone. The lower altitude feels wonderful after days above 4,000m. Distance: 15km, 6-7 hours.'
        ),
        itineraryItem(
          'Day 16: Trek to Jhinu Danda (1,780m)',
          'Continue the descent. Celebrate your climbing achievement with a well-earned soak in the Jhinu hot springs. Distance: 10km, 5-6 hours.'
        ),
        itineraryItem(
          'Day 17: Trek to Nayapul & Drive to Pokhara',
          'Final morning on the trail back to Nayapul. Drive to Pokhara for a celebratory dinner. Distance: 8km, 3-4 hours.'
        ),
        itineraryItem(
          'Day 18: Pokhara Rest Day',
          'A well-deserved day of rest. Lakeside relaxation, massage, sightseeing, or simply enjoying ground-level comfort after weeks in the mountains.'
        ),
        itineraryItem(
          'Day 19: Pokhara to Kathmandu',
          'Transfer to Kathmandu. Afternoon free for souvenir shopping or sightseeing.'
        ),
        itineraryItem(
          'Day 20: Kathmandu Sightseeing',
          'Explore Kathmandu — Boudhanath, Pashupatinath, Bhaktapur, or Swayambhunath. Farewell dinner and certificate ceremony celebrating your climbing achievement.'
        ),
        itineraryItem(
          'Day 21: Departure Day',
          'Airport transfer for your onward journey. Depart as a Himalayan climber with summit memories that will last a lifetime.'
        ),
      ],
      costInclude: [
        'Airport pickup and drop-off in Kathmandu',
        'Hotel accommodation in Kathmandu and Pokhara with breakfast',
        'All ground and domestic air transportation',
        'Tent Peak climbing permit (NMA fee)',
        'All trek permits and ACAP entry fees',
        'Full board meals throughout trek and climb',
        'Certified climbing guide and assistant climbing Sherpa',
        'Trekking guide and porters for approach',
        'All climbing equipment (group gear: ropes, anchors, snow stakes)',
        'Camping equipment for climb (high-altitude tents, stove, kitchen gear)',
        'Teahouse accommodation during trek portion',
        'Insurance for all Nepalese staff',
        'First aid kit and emergency oxygen',
        'Satellite communication device for emergencies',
        'All government taxes and service charges',
        'NMA climbing peak certificate upon successful summit',
      ],
      costExclude: [
        'Nepal entry visa fee',
        'International airfare',
        'Personal climbing gear (boots, crampons, ice axe, harness — rental available)',
        'Personal trekking gear and equipment',
        'Travel insurance with helicopter evacuation and climbing coverage (mandatory, min US$50,000)',
        'Meals in cities (except breakfast)',
        'Bottled water, alcoholic beverages, and soft drinks',
        'Personal expenses and tips',
        'Extra nights due to weather delays',
        'Costs from natural disasters or route changes',
        'Services not mentioned in inclusions',
      ],
      essentialTips: [
        tipItem(
          'Climbing Experience',
          'While Tent Peak is classified as a "trekking peak," it requires basic mountaineering skills. Prior experience with crampons and ice axe is beneficial but not mandatory — your guide provides training. Previous high-altitude trekking experience (above 5,000m) is strongly recommended.'
        ),
        tipItem(
          'Physical Fitness',
          'This is a 21-day expedition culminating in a strenuous summit day. Train intensively for at least 4 months with cardio, strength training, and ideally some mountaineering practice. Summit day involves 10-12 hours of continuous effort at extreme altitude.'
        ),
        tipItem(
          'Personal Climbing Gear',
          'You\'ll need mountaineering boots compatible with crampons, a climbing harness, helmet, and appropriate layering for extreme cold (-20°C at high camp). Crampons and ice axes can be rented from your guide if you don\'t own them.'
        ),
        tipItem(
          'Weather Windows',
          'Summit attempts are weather-dependent. The reserve day is built in for this reason. March-May and October-November offer the best climbing conditions. Your climbing guide makes the final call on summit day timing.'
        ),
        tipItem(
          'Altitude Strategy',
          'The itinerary builds altitude gradually, but the jump from 4,130m (ABC) to 5,850m (summit) is significant. Listen to your body, communicate with your guide, and don\'t push through severe altitude symptoms. Successful summit is only worthwhile if you return safely.'
        ),
        tipItem(
          'Insurance Requirements',
          'Standard travel insurance is NOT sufficient. You need a policy that specifically covers mountaineering/climbing up to 6,000m and includes helicopter evacuation from remote areas. Confirm coverage details with your insurer before departure.'
        ),
      ],
    },
  },
];

// ─── Seed Function ───────────────────────────────────────────

async function seedAnnapurnaTreks() {
  for (const trek of treks) {
    try {
      await client.patch(trek.id).set(trek.data).commit();
      console.log(`Seeded: ${trek.data.title}`);
    } catch (err) {
      console.error(`Failed: ${trek.data.title}`, err.message);
    }
  }
  console.log('\nAll Annapurna region treks seeded!');
}

seedAnnapurnaTreks().catch(console.error);
