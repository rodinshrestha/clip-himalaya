import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';

import { StyledDiv } from './style';

const AnnapurnaLandingPage = () => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <ImageWithFallback
          src="/images/annapurna-img.png"
          alt="annuparna image"
          fill
        />
      </div>
    </StyledDiv>
  );
};

export default AnnapurnaLandingPage;
