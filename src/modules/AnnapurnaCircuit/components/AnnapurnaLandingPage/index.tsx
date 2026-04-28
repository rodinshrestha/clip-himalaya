import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';

import { StyledDiv } from './style';
import Overlay from '@/components/Overlay';

const AnnapurnaLandingPage = () => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <Overlay overlayValue={0.4} />
        <ImageWithFallback
          src="/images/annapurna-img.jpg"
          alt="Annapurna Circuit trek landscape"
          fill
        />
      </div>
    </StyledDiv>
  );
};

export default AnnapurnaLandingPage;
