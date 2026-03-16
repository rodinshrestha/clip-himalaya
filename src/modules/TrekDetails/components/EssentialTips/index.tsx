import React from 'react';

import { Info } from 'lucide-react';

import TrekkingInfo from '../TrekkingInfo';
import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';
import { sanitizeBlockData } from '@/utils/sanitize-block-data';

type Props = {
  data: TrekDetailsType;
};

const EssentialTips = ({ data }: Props) => {
  const { essentialTips = [] } = data || {};

  const items = essentialTips?.map((x) => ({
    title: x.title,
    children: sanitizeBlockData(x.description),
  }));
  return (
    <StyledDiv className="essential-tips-container" id="essential-tips">
      <TrekkingTitleSection icon={Info} title="ESSENTIAL TIPS" />

      <div className="essential-tip-wrapper">
        {items?.map((x, i) => {
          return (
            <TrekkingInfo key={i} title={x.title} description={x.children} />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default EssentialTips;
