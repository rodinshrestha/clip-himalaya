import React from 'react';

import AdventureSpecialist from './components/AdventureSpecialist';
import HeroSection from './components/HeroSection';
import Testimonial from './components/Testimonial';
import TopTrekSection from './components/TopTrekSection';
import { StyledDiv } from './style';

const Home = () => {
  return (
    <StyledDiv>
      <HeroSection />
      <TopTrekSection />
      <AdventureSpecialist />
      <Testimonial />
    </StyledDiv>
  );
};

export default Home;
