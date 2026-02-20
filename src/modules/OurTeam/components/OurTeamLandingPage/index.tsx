import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const OurTeamLandingPage = () => {
  return (
    <StyledDiv>
      <ImageWithFallback
        src="/images/our-team.jpeg"
        alt="our team image"
        fill
      />
      <div className="text-content">
        <Typography as="h1">Meet Our Experts</Typography>
        <Typography as="h1">Our Travel Specialists</Typography>
        <Typography as="h1">The People Behind Your Journey</Typography>
      </div>
    </StyledDiv>
  );
};

export default OurTeamLandingPage;
