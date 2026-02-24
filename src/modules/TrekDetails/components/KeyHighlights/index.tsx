import React from 'react';

import { Sun } from 'lucide-react';

import TrekkingInfo from '../TrekkingInfo';
import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';

const KeyHighlights = () => {
  return (
    <StyledDiv className="key-highlights-container" id="key-highlights">
      <TrekkingTitleSection icon={Sun} title="KEY HIGHLIGHTS" />
      <div className="key-hightlights-wrapper">
        <TrekkingInfo
          title="First Glimpse of Everest from Namche Bazaar"
          description="The excitement of spotting Everest for the first time while sipping tea at a Namche Bazaar viewpoint is surreal."
        />
        <TrekkingInfo
          title="Acclimatization Hike to Everest View Hotel"
          description="A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam."
        />
        <TrekkingInfo
          title="Crossing High Suspension Bridges"
          description="Adrenaline rushes as you walk across swaying suspension bridges over deep gorges, prayer flags fluttering in the wind."
        />
        <TrekkingInfo
          title="Reaching the Everest Base Camp"
          description="The thrill of standing at the foot of Everest, surrounded by climbers, colorful tents, and the mighty Khumbu Icefall."
        />
        <TrekkingInfo
          title="CSunrise at Kala Patthar"
          description="The awesomeness will drive you next level."
        />
        <TrekkingInfo
          title="Duration"
          description="10 Days, Best Time: (Sep-Oct-Nov) and (March-Aprill-May)"
        />
        <TrekkingInfo title="Difficuilt" description="Challenging, Grade : 7" />
        <TrekkingInfo
          title="Altitude"
          description="Start: 2610M, Highest: 5545M"
        />
        <TrekkingInfo
          title="Journey"
          description="From: Kathmandu, To: Lukla"
        />
      </div>
    </StyledDiv>
  );
};

export default KeyHighlights;
