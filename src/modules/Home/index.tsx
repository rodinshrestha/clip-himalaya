import React from 'react';

import AdventureSpecialist from './components/AdventureSpecialist';
import HeroSection from './components/HeroSection';
import Testimonial from './components/Testimonial';
import TopTrekSection from './components/TopTrekSection';
import { StyledDiv } from './style';
import { HomePageType } from './home-page.types';

type Props = {
  data: HomePageType;
};

const Home = ({ data }: Props) => {
  return (
    <StyledDiv>
      <HeroSection data={data} />
      <TopTrekSection data={data} />
      <AdventureSpecialist data={data} />
      <Testimonial />
    </StyledDiv>
  );
};

export default Home;
