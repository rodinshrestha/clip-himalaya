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
        src={urlFor(bannerImage).width(1920).quality(85).url()}
        alt="Terms and conditions"
        priority
        fill
      />
    </StyledDiv>
  );
};

export default TermsAndConditionLandingPage;
