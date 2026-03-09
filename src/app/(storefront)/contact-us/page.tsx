import { REVALIDATE } from '@/constants/revalidate.constant';
import ContactUs from '@/modules/ContactUs';
import { ContactUsPageQuery } from '@/query';
import { client } from '@/sanity/client';

export const revalidate = 30;

const ContactUsPage = async () => {
  const data = await client.fetch(ContactUsPageQuery);
  return <ContactUs data={data} />;
};

export default ContactUsPage;
