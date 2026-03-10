import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { AnnapuranCircuitType } from '../../aanapurna-circuit-type';

type Props = {
  data: AnnapuranCircuitType;
};

const AnnapurnaBookWithUs = ({ data }: Props) => {
  const { whyBookWithUs = [] } = data || {};
  if (!whyBookWithUs.length) {
    return null;
  }
  return (
    <StyledDiv className="annapurna-book-with-us-wrapper">
      <Typography as="body1">
        Here&apos;s several reasons why you should book with us:
      </Typography>
      <ul>
        {whyBookWithUs.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
    </StyledDiv>
  );
};

export default AnnapurnaBookWithUs;
