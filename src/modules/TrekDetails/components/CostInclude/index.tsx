import React from 'react';

import { CheckCheck } from 'lucide-react';

import TrekkingInfo from '../TrekkingInfo';
import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';

type Props = {
  data: TrekDetailsType;
};

const CostInclude = ({ data }: Props) => {
  const { costInclude = [] } = data || {};
  return (
    <StyledDiv className="cost-include-container">
      <TrekkingTitleSection icon={CheckCheck} title="COST INCLUDE" />
      <div className="cost-include-wrapper">
        {costInclude.map((x, i) => {
          return <TrekkingInfo title={x} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default CostInclude;
