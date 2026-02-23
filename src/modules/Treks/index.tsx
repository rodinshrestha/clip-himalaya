import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import TrekInformation from './components/TrekInformation';
import TrekLandingPage from './components/TrekLandingPage';
import { StyledDiv } from './style';

const Treks = () => {
  return (
    <StyledDiv>
      <TrekLandingPage />
      <BreadCrumbs crumbs={[{ label: 'Treks' }]} />
      <TrekInformation />
    </StyledDiv>
  );
};

export default Treks;
