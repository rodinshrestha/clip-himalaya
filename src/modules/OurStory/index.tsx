import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import OurStoryImageBanner from './components/OurStoryImageBanner';
import StoryDescription from './components/StoryDescription';
import { StyledDiv } from './style';

const OurStory = () => {
  return (
    <StyledDiv>
      <OurStoryImageBanner />
      <BreadCrumbs crumbTitle="Our Story" />
      <StoryDescription />
    </StyledDiv>
  );
};

export default OurStory;
