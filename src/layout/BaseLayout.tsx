import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
