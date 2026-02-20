import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';

import { StyledDiv } from './style';

const TermsAndConditionLandingPage = () => {
  return (
    <StyledDiv>
      <ImageWithFallback
        src="/images/termandcondition.jpeg"
        alt="term and condition landing page"
        fill
      />
    </StyledDiv>
  );
};

export default TermsAndConditionLandingPage;
