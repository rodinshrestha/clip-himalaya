import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import OurStoryImageBanner from './components/OurStoryImageBanner';
import StoryDescription from './components/StoryDescription';
import { StyledDiv } from './style';
import { OurStoryType } from './our-story.type';
import { theme } from '@/theme';

type Props = {
  data: OurStoryType;
};

const OurStory = ({ data }: Props) => {
  return (
    <>
      <style>
        {`
              .logo-content .title-content .h1 {
                color: ${theme.color.black['100']} !important;
                font-size: 20px !important;
              }
              .logo-content .title-content .body1 {
                color: ${theme.color.black['200']} !important;
                font-size: 12px !important;
              }
              .header-navigation-wrapper {
                .navigation-link {
                  color: ${theme.color.black['100']} !important;
                  font-size: 15px;
    
                  &::after {
                    background-color: ${theme.color.black['100']} !important;
                  }
              }
              
            `}
      </style>
      <StyledDiv>
        <OurStoryImageBanner data={data} />
        <BreadCrumbs crumbs={[{ label: 'Our Story' }]} />
        <StoryDescription data={data} />
      </StyledDiv>
    </>
  );
};

export default OurStory;
