import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';

type Props = {
  icon: React.ElementType;
  title: string;
};

const TrekkingTitleSection = ({ icon: Icon, title }: Props) => {
  return (
    <StyledDiv>
      {<Icon />}
      <Typography as="body2">{title}</Typography>
    </StyledDiv>
  );
};

export default TrekkingTitleSection;
