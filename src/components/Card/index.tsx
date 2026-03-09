import React from 'react';

import Button from '../Button';
import ImageWithFallback from '../ImageWithFallBack';

import { StyledDiv } from './style';

type Props = {
  imageUrl: string;
  textInfo: string[];
};

const Card = ({ imageUrl = '', textInfo = [] }: Props) => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <ImageWithFallback fill alt="trek-image" src={imageUrl} />
      </div>

      <ul className="card-information-list">
        {textInfo.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>

      <Button size="full-width" variant="outline">
        BOOK NOW
      </Button>
    </StyledDiv>
  );
};

export default Card;
