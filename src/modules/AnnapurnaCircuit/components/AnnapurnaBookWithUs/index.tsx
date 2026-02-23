import React from 'react';

import Link from 'next/link';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const AnnapurnaBookWithUs = () => {
  return (
    <StyledDiv>
      <Typography as="body1">
        Here&apos;s several reasons why you should book with us:
      </Typography>
      <ul>
        <li>Best Price & Value for Money</li>
        <li>Experienced Guides & Porters</li>
        <li>Have a Big Group? We can Help.</li>
        <li>Top Notch Customer Service</li>
        <li>Local Knowledge Counts</li>
        <li>
          Every Departure Date is Guaranteed. <Link href="#">Readmore...</Link>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default AnnapurnaBookWithUs;
