import ContactUs from '@/modules/ContactUs';
import { ContactUsPageQuery } from '@/query';
import { client } from '@/sanity/client';

const ContactUsPage = async () => {
  const data = await client.fetch(ContactUsPageQuery);
  return <ContactUs data={data} />;
};

export default ContactUsPage;
