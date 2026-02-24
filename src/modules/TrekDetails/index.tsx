'use client';
import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import StickyButton from './components/StickyButton';
import TrekDetailslandingPage from './components/TrekDetailsLandingPage';
import TrekItinerary from './components/TrekItinerary';
import TrekSummary from './components/TrekSummary';
import { StyledDiv } from './style';

const TrekDetails = () => {
  const [stickyBtn, setStickyBtn] = React.useState(false);

  const crumbs = [
    { label: 'Trek', href: '/treks' },
    { label: 'Everest Base Camp' },
  ];

  return (
    <StyledDiv>
      <StickyButton stickyBtn={stickyBtn} />

      <TrekDetailslandingPage setStickyBtn={setStickyBtn} />
      <BreadCrumbs crumbs={crumbs} />
      <TrekSummary />
      <TrekItinerary />
    </StyledDiv>
  );
};

export default TrekDetails;
