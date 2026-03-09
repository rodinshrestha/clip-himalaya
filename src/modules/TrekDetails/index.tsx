'use client';
import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import StickyButton from './components/StickyButton';
import TrekDetailslandingPage from './components/TrekDetailsLandingPage';
import TrekItinerary from './components/TrekItinerary';
import TrekSummary from './components/TrekSummary';
import { StyledDiv } from './style';
import { TrekDetailsType } from './trek-details.types';

type Props = {
  data: TrekDetailsType;
};

const TrekDetails = ({ data }: Props) => {
  const [stickyBtn, setStickyBtn] = React.useState(false);

  const crumbs = [
    { label: 'Trek', href: '/treks' },
    { label: 'Everest Base Camp' },
  ];

  return (
    <StyledDiv>
      <StickyButton stickyBtn={stickyBtn} />

      <TrekDetailslandingPage setStickyBtn={setStickyBtn} data={data} />
      <BreadCrumbs crumbs={crumbs} />
      <TrekSummary data={data} />
      <TrekItinerary data={data} />
    </StyledDiv>
  );
};

export default TrekDetails;
