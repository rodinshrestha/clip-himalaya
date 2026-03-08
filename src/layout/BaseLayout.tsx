import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { client } from '@/sanity/client';
import { siteSettingQuery } from '@/query';

type Props = {
  children: React.ReactNode;
};

const BaseLayout = async ({ children }: Props) => {
  const siteSettings = await client.fetch(siteSettingQuery);
  return (
    <div>
      <Header siteSettings={siteSettings} />
      {children}
      <Footer siteSettings={siteSettings} />
    </div>
  );
};

export default BaseLayout;
