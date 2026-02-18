import React from 'react';

import Button from '../Button';
import ImageWithFallback from '../ImageWithFallBack';

import { StyledDiv } from './style';

const Card = () => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <ImageWithFallback fill alt="trek-image" src="/images/trek.jpeg" />
      </div>

      <ul className="card-information-list">
        <li>Round trip airfare</li>
        <li>4D/3N Twin share room</li>
        <li>Half board meals</li>
        <li>Guided nature tour</li>
        <li>Welcome</li>
      </ul>

      <Button size="full-width">BOOK NOW</Button>
    </StyledDiv>
  );
};

export default Card;
