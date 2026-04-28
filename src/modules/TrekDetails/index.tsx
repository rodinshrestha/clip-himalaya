'use client';
import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import StickyButton from './components/StickyButton';
import TrekDetailslandingPage from './components/TrekDetailsLandingPage';
import TrekItinerary from './components/TrekItinerary';
import TrekSummary from './components/TrekSummary';
import QuickFacts from './components/QuickFacts';
import TrekExtras from './components/TrekExtras';
import { StyledDiv } from './style';
import { TrekDetailsType } from './trek-details.types';

type Props = {
  data: TrekDetailsType;
};

const TrekDetails = ({ data }: Props) => {
  const [stickyBtn, setStickyBtn] = React.useState(false);

  const crumbs = [
    { label: 'Treks', href: '/treks' },
    { label: data.title },
  ];

  return (
    <StyledDiv>
      <StickyButton stickyBtn={stickyBtn} />

      <TrekDetailslandingPage setStickyBtn={setStickyBtn} data={data} />
      <BreadCrumbs crumbs={crumbs} />
      <QuickFacts data={data} />
      <TrekSummary data={data} />
      <TrekItinerary data={data} />
      <TrekExtras data={data} />
    </StyledDiv>
  );
};

export default TrekDetails;
