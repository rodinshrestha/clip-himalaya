import React from 'react';

import { Waypoints } from 'lucide-react';

import Accordion from '@/components/Accordion';

import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';
import { sanitizeBlockData } from '@/utils/sanitize-block-data';

type Props = {
  data: TrekDetailsType;
};

const ItineraryDetails = ({ data }: Props) => {
  const { itineraryDetails = [] } = data || {};

  const items = itineraryDetails?.map((x) => ({
    title: x.itineraryTitle,
    children: sanitizeBlockData(x.itineraryDescription),
  }));

  return (
    <StyledDiv className="itinerary-details-wrapper" id="itinerary">
      <TrekkingTitleSection icon={Waypoints} title="ITINERARY DETAILS" />

      <div className="ininerary-list-wrapper">
        <Accordion items={items} allowMultiple />;
      </div>
    </StyledDiv>
  );
};

export default ItineraryDetails;
