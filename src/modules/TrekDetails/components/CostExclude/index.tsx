import { CircleX } from 'lucide-react';

import TrekkingInfo from '../TrekkingInfo';
import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';

type Props = {
  data: TrekDetailsType;
};

const CostExclude = ({ data }: Props) => {
  const { costExclude } = data || {};
  return (
    <StyledDiv className="cost-exclude-container">
      <TrekkingTitleSection icon={CircleX} title="COST EXCLUDE" />
      <div className="cost-exclude-wrapper">
        {costExclude.map((x, i) => {
          return <TrekkingInfo title={x} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default CostExclude;
