'use client';
import React from 'react';

import Typography from '../Typography';

import { StyledDiv } from './style';

type Props = {
  name?: string;
  trek?: string;
  rating?: number;
  review?: string;
};

const TestimonialCard = ({
  name = 'Noah Schumacher',
  trek = 'Everest Base Camp 2024',
  review = 'An incredible experience from start to finish. The team was professional, knowledgeable, and genuinely cared about making our trek unforgettable.',
}: Props) => {
  return (
    <StyledDiv>
      <div className="quote-section">
        <div className="quote-mark">&ldquo;&ldquo;</div>
        <Typography as="p" className="review-text">
          {review}
        </Typography>
      </div>
      <div className="author-section">
        <Typography as="p" className="author-name">
          {name}
        </Typography>
        <Typography as="p" className="author-trek">
          {trek}
        </Typography>
      </div>
    </StyledDiv>
  );
};

export default TestimonialCard;
