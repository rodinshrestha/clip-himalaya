const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_READ_WRITE_TOKEN,
});

async function updateOurStory() {
  // Find existing Our Story page
  const existing = await client.fetch(`*[_type == "ourStoryPage"][0]`);

  if (!existing) {
    console.log('No Our Story page found. Creating one...');
    await client.create({
      _type: 'ourStoryPage',
      bannerTitle: 'Our Story',
      bannerHelperText: 'Learn about our journey and passion for the Himalayas',
      ourStoryDescription: [
        {
          _type: 'block',
          _key: 'desc1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: 'Clip Himalaya was born from a deep love for the mountains and a desire to share the magic of the Himalayas with the world. What started as a small group of passionate trekkers has grown into a trusted adventure company, guiding hundreds of explorers through some of the most breathtaking landscapes on Earth.',
            },
          ],
        },
        {
          _type: 'block',
          _key: 'desc2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span2',
              text: 'Our team consists of experienced local guides, seasoned mountaineers, and travel enthusiasts who know these trails like the back of their hands. We believe that every journey should be more than just reaching a destination — it should be a transformative experience that connects you with nature, culture, and yourself.',
            },
          ],
        },
        {
          _type: 'block',
          _key: 'desc3',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span3',
              text: 'From the iconic Annapurna Circuit to hidden gems off the beaten path, we craft itineraries that balance adventure with comfort, challenge with safety. We work closely with local communities, ensuring that tourism benefits the people and places that make Nepal so special.',
            },
          ],
        },
        {
          _type: 'block',
          _key: 'desc4',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span4',
              text: 'Whether you are a first-time trekker or a seasoned adventurer, we are here to make your Himalayan dream a reality. Join us, and let the mountains tell their story.',
            },
          ],
        },
      ],
    });
    console.log('Created Our Story page with description.');
    return;
  }

  console.log('Found existing Our Story page:', existing._id);

  // Update with new banner fields (keep existing gallery images and description)
  const patch = client.patch(existing._id);

  // Only set banner fields if they don't already exist
  if (!existing.bannerTitle) {
    patch.set({ bannerTitle: 'Our Story' });
  }
  if (!existing.bannerHelperText) {
    patch.set({
      bannerHelperText:
        'Learn about our journey and passion for the Himalayas',
    });
  }

  // If no description exists, seed it
  if (
    !existing.ourStoryDescription ||
    existing.ourStoryDescription.length === 0
  ) {
    patch.set({
      ourStoryDescription: [
        {
          _type: 'block',
          _key: 'desc1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: 'Clip Himalaya was born from a deep love for the mountains and a desire to share the magic of the Himalayas with the world. What started as a small group of passionate trekkers has grown into a trusted adventure company, guiding hundreds of explorers through some of the most breathtaking landscapes on Earth.',
            },
          ],
        },
        {
          _type: 'block',
          _key: 'desc2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span2',
              text: 'Our team consists of experienced local guides, seasoned mountaineers, and travel enthusiasts who know these trails like the back of their hands. We believe that every journey should be more than just reaching a destination — it should be a transformative experience that connects you with nature, culture, and yourself.',
            },
          ],
        },
        {
          _type: 'block',
          _key: 'desc3',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span3',
              text: 'From the iconic Annapurna Circuit to hidden gems off the beaten path, we craft itineraries that balance adventure with comfort, challenge with safety. We work closely with local communities, ensuring that tourism benefits the people and places that make Nepal so special.',
            },
          ],
        },
        {
          _type: 'block',
          _key: 'desc4',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span4',
              text: 'Whether you are a first-time trekker or a seasoned adventurer, we are here to make your Himalayan dream a reality. Join us, and let the mountains tell their story.',
            },
          ],
        },
      ],
    });
  }

  await patch.commit();
  console.log('Updated Our Story page with banner fields.');
}

updateOurStory().catch(console.error);
