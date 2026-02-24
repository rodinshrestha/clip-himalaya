import React from 'react';

import { Waypoints } from 'lucide-react';

import Accordion from '@/components/Accordion';

import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';

const ItineraryDetails = () => {
  const items = [
    {
      title: 'Day 1',
      children: [
        { label: 'Trekking', description: 'test' },
        { label: 'Trekking', description: 'test' },
      ],
      description:
        'The excitement of spotting Everest for the first time while sipping tea at a Namche Bazaar viewpoint is surreal.',
    },
    {
      title: 'Day 2',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
    {
      title: 'Day 3',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
    {
      title: 'Day 4',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
    {
      title: 'Day 5',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
    {
      title: 'Day 6',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
    {
      title: 'Day 7',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
  ];
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
