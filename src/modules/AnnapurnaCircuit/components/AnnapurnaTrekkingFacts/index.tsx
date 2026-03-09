import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { AnnapuranCircuitType } from '../../aanapurna-circuit-type';

type Props = {
  data: AnnapuranCircuitType;
};

const AnnapurnaTrekkingFacts = ({ data }: Props) => {
  const {
    bestSeason = '',
    transportation = '',
    accommodation = '',
    grade = '',
    highestPoint = '',
    duration = '',
    groupSize = '',
    culture = '',
    himalayanSight = '',
    attraction = '',
  } = data || {};
  return (
    <StyledDiv>
      <div className="title-wrapper">Trekking Facts</div>
      {bestSeason && (
        <Typography as="body2">Best Season: {bestSeason}</Typography>
      )}
      {transportation && (
        <Typography as="body2">Transportation: {transportation}</Typography>
      )}
      {accommodation && (
        <Typography as="body2">Accommodation: {accommodation}</Typography>
      )}
      {grade && <Typography as="body2">Grade: {grade}</Typography>}
      {highestPoint && (
        <Typography as="body2">Highest Point: {highestPoint}</Typography>
      )}
      {duration && <Typography as="body2">Duration: {duration}</Typography>}
      {groupSize && <Typography as="body2">Group Size: {groupSize}</Typography>}
      {culture && <Typography as="body2">Culture: {culture}</Typography>}
      {himalayanSight && (
        <Typography as="body2">Himalayan Sights: {himalayanSight}</Typography>
      )}
      {attraction && (
        <Typography as="body2">Attraction: {attraction}</Typography>
      )}
    </StyledDiv>
  );
};

export default AnnapurnaTrekkingFacts;
