import React from 'react';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';

type Props = {
  title: string;
  description?: string | string[];
};

const TrekkingInfo = ({ title, description }: Props) => {
  return (
    <StyledDiv className="trekking-info-wrapper">
      <div className="dot-column">
        <div className="dot" />
        <div className="connector" />
      </div>
      <div className="content-wrapper">
        {title && <Typography as="body1">{title}</Typography>}
        {Array.isArray(description) && description.length ? (
          description.map((x) => {
            return <Typography as="body2">{description}</Typography>;
          })
        ) : (
          <Typography as="body2">{description}</Typography>
        )}
      </div>
    </StyledDiv>
  );
};

export default TrekkingInfo;
