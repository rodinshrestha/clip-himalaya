import React from 'react';

import Button from '../Button';
import ImageWithFallback from '../ImageWithFallBack';

import { StyledDiv } from './style';

type Props = {
  imageUrl: string;
  textInfo: string[];
  alt?: string;
};

const Card = ({ imageUrl = '', textInfo = [], alt }: Props) => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <ImageWithFallback fill alt={alt || textInfo[0] || 'Trek'} src={imageUrl} />
      </div>

      <ul className="card-information-list">
        {textInfo.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>

      <Button size="full-width" variant="outline" href="/contact-us">
        BOOK NOW
      </Button>
    </StyledDiv>
  );
};

export default Card;
