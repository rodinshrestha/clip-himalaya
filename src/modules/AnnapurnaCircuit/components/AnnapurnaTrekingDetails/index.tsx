import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { BlockType } from '@/types/block.type';
type Props = {
  day: string;
  elevation: string;
  description: BlockType[];
  time?: string;
};

const AnnapurnaTrekingDetails = ({
  day,
  elevation,
  description = [],
  time,
}: Props) => {
  return (
    <StyledDiv>
      {day && <Typography as="body1">{day}</Typography>}
      {elevation && <Typography as="body1">Eevation: {elevation}</Typography>}
      {time && <Typography as="body1">Approximate Time: {time}</Typography>}
      {description.map((x, i) => {
        const { text = '' } = x?.children?.[0] || {};
        return (
          <Typography as="body2" key={i}>
            {text}
          </Typography>
        );
      })}
    </StyledDiv>
  );
};

export default AnnapurnaTrekingDetails;
