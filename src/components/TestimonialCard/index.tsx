'use client';
import React from 'react';

import { Rating } from 'react-simple-star-rating';

import ImageWithFallback from '../ImageWithFallBack';
import Typography from '../Typography';

import { StyledDiv } from './style';

const TestimonialCard = () => {
  return (
    <StyledDiv>
      <Typography as="p" className="rating-content">
        Boost your product and service&apos;s credibility by adding testimonials
        from your clients. People love recommendations so feedback from others
        who&apos;ve tried it is invaluable.
      </Typography>
      <div className="rating-section">
        <div className="image-wrapper">
          <ImageWithFallback
            src="/images/expert.jpeg"
            alt="rating-image"
            fill
          />
        </div>
        <div className="rating-information-content">
          <Typography as="p">Noah Schumacher</Typography>
          <Rating readonly initialValue={5} size={18} fillColor="#000" />
        </div>
      </div>
    </StyledDiv>
  );
};

export default TestimonialCard;
