import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';
type Props = {
  day: string;
  elevation: string;
  description: string;
  time?: string;
};

const AnnapurnaTrekingDetails = ({
  day,
  elevation,
  description,
  time,
}: Props) => {
  return (
    <StyledDiv>
      {day && <Typography as="body1">{day}</Typography>}
      {elevation && <Typography as="body1">Eevation: {elevation}</Typography>}
      {time && <Typography as="body1">Approximate Time: {time}</Typography>}

      {description && <Typography as="body2">{description}</Typography>}
    </StyledDiv>
  );
};

export default AnnapurnaTrekingDetails;
