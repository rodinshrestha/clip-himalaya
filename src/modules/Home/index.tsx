import React from 'react';

import AdventureSpecialist from './components/AdventureSpecialist';
import HeroSection from './components/HeroSection';
import Testimonial from './components/Testimonial';
import TopTrekSection from './components/TopTrekSection';
import WhyChooseUs from './components/WhyChooseUs';
import { StyledDiv } from './style';
import { HomePageType } from './home-page.types';

type Props = {
  data: HomePageType;
};

const Home = ({ data }: Props) => {
  return (
    <StyledDiv>
      <HeroSection data={data} />
      <WhyChooseUs data={data} />
      <TopTrekSection data={data} />
      <Testimonial data={data} />
      <AdventureSpecialist data={data} />
    </StyledDiv>
  );
};

export default Home;
