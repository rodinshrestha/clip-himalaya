import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const TrekDetailslandingPage = () => {
  return (
    <StyledDiv>
      <ImageWithFallback
        src="/images/termandcondition.jpeg"
        fill
        alt="background image"
      />

      <div className="information-content">
        <Typography as="h1">Everest Base Camp</Typography>
        <Typography as="body2">Wander Where Wifi Is Weak</Typography>
      </div>
    </StyledDiv>
  );
};

export default TrekDetailslandingPage;
