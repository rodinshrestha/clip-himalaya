import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import TermsAndConditionLandingPage from './components/TermAndConditionLandingPage';
import TermsAndConditionList from './components/TermAndConditionList';
import { StyledDiv } from './style';

const TermsAndCondition = () => {
  return (
    <StyledDiv>
      <TermsAndConditionLandingPage />
      <BreadCrumbs crumbTitle="Term & Conditions" />
      <TermsAndConditionList />
    </StyledDiv>
  );
};

export default TermsAndCondition;
