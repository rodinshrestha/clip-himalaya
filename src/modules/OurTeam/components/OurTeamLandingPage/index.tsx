import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurTeamType } from '../../our-team.type';
import { urlFor } from '@/sanity/client';

type Props = {
  data: OurTeamType;
};

const OurTeamLandingPage = ({ data }: Props) => {
  const { bannerImage = '', bannerText = [] } = data || {};
  return (
    <StyledDiv>
      <ImageWithFallback
        src={urlFor(bannerImage).url()}
        alt="our team image"
        fill
      />
      <div className="text-content">
        {bannerText.map((x, i) => {
          const { text = '' } = x?.children?.[0] || {};
          if (!text) return;
          return (
            <Typography as="h1" key={i}>
              {text}
            </Typography>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default OurTeamLandingPage;
