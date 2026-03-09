import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import PopularTrek from './components/PopularTrek';
import TrekInformation from './components/TrekInformation';
import TrekLandingPage from './components/TrekLandingPage';
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
      <PopularTrek data={data} />
    </StyledDiv>
  );
};

export default Treks;
