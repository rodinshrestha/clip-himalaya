import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import ActivityCard from './components/ActivityCard';
import HeroBanner from './components/HeroBanner';
import { StyledDiv } from './style';
import { OtherActivitiesPageType } from './otherActivities.type';

type Props = {
  data: OtherActivitiesPageType;
};

const OtherActivities = ({ data }: Props) => {
  const { bannerImage, bannerTitle, bannerHelperText } = data?.pageData || {};

  return (
    <StyledDiv>
      <HeroBanner
        bannerImage={bannerImage}
        title={bannerTitle}
        helperText={bannerHelperText}
      />
      <BreadCrumbs crumbs={[{ label: 'Other Activities' }]} />
      <ActivityCard data={data} />
    </StyledDiv>
  );
};

export default OtherActivities;
