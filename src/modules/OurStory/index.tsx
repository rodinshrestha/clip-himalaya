import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import OurStoryImageBanner from './components/OurStoryImageBanner';
import StoryDescription from './components/StoryDescription';
import { StyledDiv } from './style';
import { OurStoryType } from './our-story.type';

type Props = {
  data: OurStoryType;
};

const OurStory = ({ data }: Props) => {
  return (
    <StyledDiv>
      <OurStoryImageBanner data={data} />
      <BreadCrumbs crumbs={[{ label: 'Our Story' }]} />
      <StoryDescription data={data} />
    </StyledDiv>
  );
};

export default OurStory;
