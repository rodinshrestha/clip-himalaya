import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';

import TermsAndConditionLandingPage from './components/TermAndConditionLandingPage';
import TermsAndConditionList from './components/TermAndConditionList';
import { StyledDiv } from './style';
import { TermConditionType } from './term-condition.type';

type Props = {
  data: TermConditionType;
};

const TermsAndCondition = ({ data }: Props) => {
  return (
    <StyledDiv>
      <TermsAndConditionLandingPage data={data} />
      <BreadCrumbs crumbs={[{ label: 'Term & Conditions' }]} />
      <TermsAndConditionList data={data} />
    </StyledDiv>
  );
};

export default TermsAndCondition;
