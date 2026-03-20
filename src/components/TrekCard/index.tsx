'use client';
import React from 'react';

import Link from 'next/link';
import { Rating } from 'react-simple-star-rating';

import Button from '../Button';
import ImageWithFallback from '../ImageWithFallBack';
import Typography from '../Typography';

import { StyledDiv } from './style';
import { BlockType } from '@/types/block.type';
import { truncate } from '@/utils/string-turncate';

type Props = {
  title: string;
  description: BlockType[];
  difficult: string;
  rating: number;
  slug: string;
  imgUrl: string;
};

const TrekCard = ({
  imgUrl = '',
  title = '',
  description = [],
  rating = 0,
  slug = '',
  difficult = '',
}: Props) => {
  return (
    <Link href={`/treks/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <StyledDiv>
        <div className="image-wrapper">
          <ImageWithFallback src={imgUrl} alt="image" fill />
        </div>
        <div className="content-wrapper">
          {title && (
            <Typography as="body2" className="title">
              {title}
            </Typography>
          )}
          <div className="rating-wrapper">
            <Rating initialValue={rating} readonly size={18} fillColor="#000" />

            <Typography as="body2" className="difficult-text">
              Difficult: {difficult}
            </Typography>
          </div>

          {description.map((x, i) => {
            const { text = '' } = x?.children?.[0] || {};

            if (!text) return null;
            return (
              <Typography as="body1" className="trek-description" key={i}>
                {truncate(text)}
              </Typography>
            );
          })}

          <Button variant="outline" className="trek-btn">
            VIEW DETAILS
          </Button>
        </div>
      </StyledDiv>
    </Link>
  );
};

export default TrekCard;
