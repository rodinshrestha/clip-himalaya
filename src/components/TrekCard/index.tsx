'use client';
import React from 'react';

import { Rating } from 'react-simple-star-rating';

import Button from '../Button';
import ImageWithFallback from '../ImageWithFallBack';
import Typography from '../Typography';

import { StyledDiv } from './style';

const TrekCard = () => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <ImageWithFallback src="/images/everest.jpeg" alt="image" fill />
      </div>
      <div className="content-wrapper">
        <Typography as="body2" className="title">
          Everest Base Camp
        </Typography>
        <div className="rating-wrapper">
          <Rating initialValue={4} readonly size={18} />
          <Typography as="body2" className="difficult-text">
            Difficult: Moderate
          </Typography>
        </div>

        <Typography as="body1" className="trek-description">
          With Clip Himalaya, embark on safe, expertly guided, and deeply
          authentic treks. Years of experience and a friendly team ensure your
          dream adventure becomes a reality...
        </Typography>

        <Button variant="outline" className="trek-btn" href="/treks/abc">
          VIEW DETAILS
        </Button>
      </div>
    </StyledDiv>
  );
};

export default TrekCard;
