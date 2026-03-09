import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';

import { StyledDiv } from './style';
import { TermConditionType } from '../../term-condition.type';
import { urlFor } from '@/sanity/client';
type Props = {
  data: TermConditionType;
};

const TermsAndConditionLandingPage = ({ data }: Props) => {
  const { bannerImage = '' } = data || {};
  return (
    <StyledDiv>
      <ImageWithFallback
        src={urlFor(bannerImage).url()}
        alt="term and condition landing page"
        fill
      />
    </StyledDiv>
  );
};

export default TermsAndConditionLandingPage;
