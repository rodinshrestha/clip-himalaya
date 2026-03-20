const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
});

async function updateFooter() {
  const existing = await client.fetch(`*[_type == "siteSettings"][0]`);

  if (!existing) {
    console.log('No site settings found');
    return;
  }

  console.log('Updating site settings with footer fields...');

  await client
    .patch(existing._id)
    .setIfMissing({
      footerDescription:
        'Your trusted partner for unforgettable Himalayan adventures. We craft personalized trekking experiences that connect you with the beauty of Nepal.',
      phoneNumber: '+977-9826756544',
      instagramUrl: 'https://instagram.com/cliphimalaya',
      facebookUrl: 'https://facebook.com/cliphimalaya',
      tiktokUrl: 'https://tiktok.com/@cliphimalaya',
      whatsappNumber: '+977-9826756544',
    })
    .commit();

  console.log('Done! Footer fields updated.');
}

updateFooter().catch(console.error);
