import React from 'react';

import { StyledDiv } from './style';
import { TermConditionType } from '../../term-condition.type';

type Props = {
  data: TermConditionType;
};

const TermsAndConditionList = ({ data }: Props) => {
  const { termConditionList = [] } = data || {};
  return (
    <StyledDiv>
      {termConditionList.map((x, i) => {
        return <li key={i}>{x}</li>;
      })}
    </StyledDiv>
  );
};

export default TermsAndConditionList;
