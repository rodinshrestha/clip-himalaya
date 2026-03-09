import React from 'react';

import { Sun } from 'lucide-react';

import TrekkingInfo from '../TrekkingInfo';
import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';
import { sanitizeBlockData } from '@/utils/sanitize-block-data';

type Props = {
  data: TrekDetailsType;
};

const KeyHighlights = ({ data }: Props) => {
  const { keyHighlights } = data || {};

  const items = keyHighlights.map((x) => ({
    title: x.title,
    children: sanitizeBlockData(x.description),
  }));
  return (
    <StyledDiv className="key-highlights-container" id="key-highlights">
      <TrekkingTitleSection icon={Sun} title="KEY HIGHLIGHTS" />
      <div className="key-hightlights-wrapper">
        {items.map((x, i) => {
          return (
            <TrekkingInfo title={x.title} description={x.children} key={i} />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default KeyHighlights;
