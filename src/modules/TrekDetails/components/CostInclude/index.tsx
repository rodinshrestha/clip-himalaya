import React from 'react';

import { CheckCheck } from 'lucide-react';

import TrekkingInfo from '../TrekkingInfo';
import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';

const CostInclude = () => {
  return (
    <StyledDiv className="cost-include-container">
      <TrekkingTitleSection icon={CheckCheck} title="COST INCLUDE" />
      <div className="cost-include-wrapper">
        <TrekkingInfo title="Transfer from airport to your hotel during both arrival and departure." />
        <TrekkingInfo title="Stay three nights in Kathmandu with a BB plan." />
        <TrekkingInfo title="Go sightseeing around Kathmandu on a private vehicle." />
        <TrekkingInfo title="All entrance fees during Kathmandu Day Tour." />
        <TrekkingInfo title="Ground 4x4 luxury transportation through the private vehicle as referred to in the itinerary." />
        <TrekkingInfo title="All mandatory permit fees, including entry permit, national park permit, and restricted area permit." />
        <TrekkingInfo title="Accommodation in tea houses or lodges during the trekking." />
        <TrekkingInfo title="Three-course meals (breakfast, lunch, and dinner) during the trekking period." />
        <TrekkingInfo title="A skillful trekking guide with excellent communication skills." />
        <TrekkingInfo title="Insurance for the guide and porters." />
        <TrekkingInfo title="Farewell dinner at Kathmandu." />
        <TrekkingInfo title="All applicable VAT, Tax, and needed paperwork." />
      </div>
    </StyledDiv>
  );
};

export default CostInclude;
