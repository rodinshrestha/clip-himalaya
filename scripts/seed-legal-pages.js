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
    children: [{ _type: 'span', _key: Math.random().toString(36).slice(2, 10), marks: [], text }],
    markDefs: [],
  };
}

function section(title, ...paragraphs) {
  return {
    _type: 'section',
    _key: Math.random().toString(36).slice(2, 10),
    title,
    content: paragraphs.map(block),
  };
}

async function seedTermsAndConditions() {
  // Find existing document
  const existing = await client.fetch('*[_type == "termConditionpage"][0]._id');
  const id = existing || 'termConditionpage';

  const data = {
    _type: 'termConditionpage',
    bannerTitle: 'Terms & Conditions',
    lastUpdated: 'March 20, 2026',
    sections: [
      section(
        '1. Acceptance of Terms',
        'By accessing and using the Clip Himalaya website (cliphimalaya.com) and booking any of our trekking, climbing, or adventure services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.',
        'These terms apply to all visitors, users, and clients who access or use our services.'
      ),
      section(
        '2. Booking & Reservations',
        'All bookings are subject to availability and confirmation by Clip Himalaya. A deposit of 30% of the total trip cost is required to secure your booking, with the remaining balance due at least 30 days before the trip departure date.',
        'Bookings are confirmed only upon receipt of the deposit and a signed booking form. Clip Himalaya reserves the right to decline any booking at our discretion.'
      ),
      section(
        '3. Payments',
        'Payments can be made via bank transfer, credit card, or other methods specified at the time of booking. All prices are quoted in US Dollars (USD) unless otherwise stated.',
        'Any additional costs incurred during the trip due to personal requests, route changes, or unforeseen circumstances are the responsibility of the client.'
      ),
      section(
        '4. Cancellation & Refund Policy',
        'Cancellations made more than 60 days before departure: Full refund minus a $100 administrative fee. Cancellations 30-60 days before departure: 50% refund. Cancellations less than 30 days before departure: No refund.',
        'If Clip Himalaya cancels a trip due to insufficient participants, unsafe conditions, or government restrictions, clients will receive a full refund or the option to reschedule at no additional cost.',
        'Refunds do not cover any costs incurred by the client for flights, visas, gear, or other personal expenses.'
      ),
      section(
        '5. Travel Insurance',
        'All clients are required to have comprehensive travel insurance that covers high-altitude trekking, emergency helicopter evacuation, medical treatment, trip cancellation, and personal belongings. Minimum coverage of US$50,000 is recommended for climbing expeditions and US$15,000 for standard treks.',
        'Clip Himalaya will not be held responsible for any costs arising from inadequate insurance coverage. Proof of insurance must be provided before the trip departure.'
      ),
      section(
        '6. Health & Fitness',
        'Trekking and climbing at high altitudes involves inherent risks. Clients are responsible for ensuring they are in adequate physical and mental health to undertake their chosen trip. We recommend consulting a doctor before booking, particularly for trips above 4,000m.',
        'Clip Himalaya reserves the right to refuse participation or alter itineraries if a client\'s health or fitness poses a risk to themselves or the group. No refund will be given in such cases.'
      ),
      section(
        '7. Itinerary Changes',
        'Itineraries are provided as guidelines and may be modified due to weather conditions, natural disasters, road or trail conditions, government regulations, or safety concerns. Clip Himalaya will make every effort to follow the published itinerary but cannot guarantee it.',
        'Any additional costs resulting from itinerary changes beyond our control (such as extra accommodation, transportation, or meals) are the responsibility of the client.'
      ),
      section(
        '8. Liability & Risk Acknowledgment',
        'Trekking, climbing, and adventure activities involve inherent risks including but not limited to altitude sickness, adverse weather, natural disasters, accidents, injury, and in extreme cases, loss of life. By booking with Clip Himalaya, you acknowledge and accept these risks.',
        'Clip Himalaya, its guides, staff, and partners shall not be held liable for any injury, illness, death, loss, or damage to personal property arising during the trip, except in cases of proven negligence on our part.',
        'We act as an intermediary between travelers and third-party service providers (hotels, airlines, domestic transport operators). We are not responsible for delays, cancellations, or service quality issues caused by third parties.'
      ),
      section(
        '9. Code of Conduct',
        'Clients are expected to behave respectfully toward local communities, fellow trekkers, guides, and porters. Any fraudulent, abusive, disruptive, or unlawful behavior will result in immediate termination of services without refund.',
        'Clients must follow the instructions of their guide at all times, particularly regarding safety decisions. Failure to do so releases Clip Himalaya from all liability.'
      ),
      section(
        '10. Privacy',
        'We respect your privacy and protect your personal information as outlined in our Privacy Policy. By using our services, you consent to the collection and use of your data as described in that policy.'
      ),
      section(
        '11. Force Majeure',
        'Clip Himalaya is not responsible for disruptions caused by unforeseen events including but not limited to natural disasters, earthquakes, avalanches, political unrest, pandemics, strikes, or government restrictions. In such cases, we will work with clients to reschedule or find alternative arrangements, but refunds are not guaranteed.'
      ),
      section(
        '12. Governing Law',
        'These Terms and Conditions are governed by and construed in accordance with the laws of Nepal. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Kathmandu, Nepal.'
      ),
      section(
        '13. Contact Us',
        'If you have any questions about these Terms and Conditions, please contact us at cliphimalaya@gmail.com or call +977-9818708883. Our office is located at Boudha 06, Kathmandu, Nepal.'
      ),
    ],
  };

  await client.createOrReplace({ _id: id, ...data });
  console.log('Terms & Conditions seeded!');
}

async function seedPrivacyPolicy() {
  const data = {
    _id: 'privacyPolicyPage',
    _type: 'privacyPolicyPage',
    bannerTitle: 'Privacy Policy',
    lastUpdated: 'March 20, 2026',
    sections: [
      section(
        '1. Introduction',
        'Clip Himalaya ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cliphimalaya.com and use our trekking and adventure services.',
        'Please read this policy carefully. By using our website or services, you consent to the practices described in this Privacy Policy.'
      ),
      section(
        '2. Information We Collect',
        'Personal Information: When you book a trek, submit an inquiry, or create an account, we may collect your name, email address, phone number, nationality, passport details, emergency contact information, dietary requirements, and health/fitness information relevant to your trip.',
        'Payment Information: We collect payment details necessary to process your bookings. Payment processing is handled by secure third-party payment providers, and we do not store your full credit card details on our servers.',
        'Automatically Collected Information: When you visit our website, we may automatically collect certain information including your IP address, browser type, device information, pages visited, and the date and time of your visit through cookies and similar technologies.'
      ),
      section(
        '3. How We Use Your Information',
        'We use the information we collect to process and manage your trek bookings and reservations, communicate with you about your trips, inquiries, and customer support requests, send important updates about your booked services (itinerary changes, safety information, etc.), improve our website, services, and customer experience, comply with legal obligations and government requirements for trekking permits, and send promotional materials and newsletters (only with your consent, and you can opt out at any time).'
      ),
      section(
        '4. Information Sharing',
        'We may share your personal information with trusted third parties only as necessary to provide our services. This includes local guides, porters, and trekking staff who need relevant information to ensure your safety and comfort, hotels, lodges, and transportation providers involved in your trip, government authorities for trekking permits, visa processing, and regulatory compliance, and insurance providers in the event of an emergency claim.',
        'We do not sell, trade, or rent your personal information to third parties for marketing purposes.'
      ),
      section(
        '5. Data Security',
        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
        'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.'
      ),
      section(
        '6. Cookies',
        'Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you use our website and improve its functionality.',
        'You can control cookie settings through your browser. Disabling cookies may affect some features of our website.'
      ),
      section(
        '7. Third-Party Links',
        'Our website may contain links to third-party websites (such as travel insurance providers, airline booking sites, or social media platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.'
      ),
      section(
        '8. Your Rights',
        'You have the right to access the personal information we hold about you, request correction of inaccurate or incomplete information, request deletion of your personal information (subject to legal retention requirements), withdraw consent for marketing communications at any time, and request a copy of your data in a portable format.',
        'To exercise any of these rights, please contact us at cliphimalaya@gmail.com.'
      ),
      section(
        '9. Children\'s Privacy',
        'Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.'
      ),
      section(
        '10. Changes to This Policy',
        'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.'
      ),
      section(
        '11. Contact Us',
        'If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at cliphimalaya@gmail.com, call +977-9818708883, or visit us at Boudha 06, Kathmandu, Nepal.'
      ),
    ],
  };

  await client.createOrReplace(data);
  console.log('Privacy Policy seeded!');
}

async function run() {
  await seedTermsAndConditions();
  await seedPrivacyPolicy();
  console.log('\nDone!');
}

run().catch(console.error);
