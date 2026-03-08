import React from 'react';
import { magra, poppins } from '@/theme/fonts';

type Props = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${magra.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
