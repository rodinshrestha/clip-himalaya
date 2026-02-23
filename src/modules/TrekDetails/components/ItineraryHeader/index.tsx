import React from 'react';

import {
  CheckCheck,
  CircleX,
  Images,
  Info,
  Sun,
  Waypoints,
} from 'lucide-react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const ItineraryHeader = () => {
  const headerList = [
    { label: 'KEY HIGHLIGHTS', icon: <Sun /> },
    { label: 'ITINERARY', icon: <Waypoints /> },
    { label: 'COSTS INCLUDE', icon: <CheckCheck /> },
    { label: 'COST EXCLUDE', icon: <CircleX /> },
    { label: 'ESSENTIAL TIPS', icon: <Info /> },
    { label: 'GALLERY', icon: <Images /> },
  ];

  return (
    <StyledDiv>
      <div className="header-wrapper">
        {headerList.map(({ label, icon }, i) => {
          return (
            <div className="itinerary-header-item" key={i}>
              {icon}
              <Typography as="body1">{label}</Typography>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default ItineraryHeader;
