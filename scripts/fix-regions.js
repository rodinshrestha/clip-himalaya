const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: '3fx7vnw0',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.NEXT_PUBLIC_SANITY_API,
  useCdn: false,
});

async function run() {
  const results = await client.fetch('*[_type == "trekkingRegion" && name == "Other Region"]{ _id, name }');
  console.log('Other Region docs:', results.map(r => r._id));

  for (const r of results) {
    if (r._id !== 'region-other') {
      await client.delete(r._id);
      console.log('Deleted duplicate:', r._id);
    }
  }

  const all = await client.fetch('*[_type == "trekkingRegion"] | order(order asc) { _id, name, "trekCount": count(*[_type == "trekDetails" && region._ref == ^._id]) }');
  console.log('\nFinal regions:');
  all.forEach(r => console.log(r.name, '-', r.trekCount, 'packages'));
}

run().catch(e => console.error(e));
