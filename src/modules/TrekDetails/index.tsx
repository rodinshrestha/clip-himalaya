import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import TrekDetailslandingPage from './components/TrekDetailsLandingPage';
import TrekItinerary from './components/TrekItinerary';
import TrekSummary from './components/TrekSummary';
import { StyledDiv } from './style';

const TrekDetails = () => {
  const crumbs = [
    { label: 'Trek', href: '/treks' },
    { label: 'Everest Base Camp' },
  ];

  return (
    <StyledDiv>
      <TrekDetailslandingPage />
      <BreadCrumbs crumbs={crumbs} />
      <TrekSummary />
      <TrekItinerary />
    </StyledDiv>
  );
};

export default TrekDetails;
