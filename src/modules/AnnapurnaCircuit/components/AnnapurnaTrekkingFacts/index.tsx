import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const AnnapurnaTrekkingFacts = () => {
  return (
    <StyledDiv>
      <div className="title-wrapper">Trekking Facts</div>
      <Typography as="body2">
        Best Season: Autumn (Sep to Dec) & Spring (Feb to May)
      </Typography>
      <Typography as="body2">
        Transportation: By tourist Vehicles (bus, Car, Van)
      </Typography>
      <Typography as="body2">Accommodation: Tea house /Camping</Typography>
      <Typography as="body2">Grade: Strenuous Trek</Typography>
      <Typography as="body2">Highest Point: 5416m</Typography>
      <Typography as="body2">Duration: 18 Days</Typography>
      <Typography as="body2">Group Size: Min 1 to Max 10</Typography>
      <Typography as="body2">Culture: Gurung, Magar, Thakali</Typography>
      <Typography as="body2">
        Himalayan Sights: Annapurna, Dhaulagiri and Fishtail
      </Typography>
      <Typography as="body2">
        Attraction: Close Mountain View, Villages
      </Typography>
    </StyledDiv>
  );
};

export default AnnapurnaTrekkingFacts;
