import React from 'react';

import { StyledDiv } from './style';

const HeroSection = () => {
  return (
    <StyledDiv className="hero-section-wrapper">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </StyledDiv>
  );
};

export default HeroSection;
