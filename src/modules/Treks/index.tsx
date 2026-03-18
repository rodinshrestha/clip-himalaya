import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import TrekInformation from './components/TrekInformation';
import TrekLandingPage from './components/TrekLandingPage';
import TrekkingRegions from './components/TrekkingRegions';
import { StyledDiv } from './style';
import { TrekPageType } from './treks.type';

type Props = {
  data: TrekPageType;
};

const Treks = ({ data }: Props) => {
  return (
    <StyledDiv>
      <TrekLandingPage data={data} />
      <BreadCrumbs crumbs={[{ label: 'Treks' }]} />
      <TrekInformation data={data} />
      <TrekkingRegions regions={data.regionList} />
    </StyledDiv>
  );
};

export default Treks;
