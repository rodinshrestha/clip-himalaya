import React from 'react';
import { Metadata } from 'next';

import ContactUs from '@/modules/ContactUs';
import { ContactUsPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Clip Himalaya. Reach out for trek bookings, custom itineraries, or any questions about your Nepal adventure.',
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: 'Contact Us | Clip Himalaya',
    description: 'Plan your Nepal trek. Reach out for bookings, custom itineraries, or questions about Himalayan trekking.',
  },
};

const ContactUsPage = async () => {
  const data = await client.fetch(ContactUsPageQuery);
  return <ContactUs data={data} />;
};

export default ContactUsPage;
