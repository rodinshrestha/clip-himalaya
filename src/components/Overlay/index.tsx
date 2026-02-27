import React from 'react';
import { StyledDiv } from './style';
import clsx from 'clsx';

type Props = {
  className?: string;
  overlayValue?: number;
};

const Overlay = ({ className, overlayValue = 0.6 }: Props) => {
  return (
    <StyledDiv
      className={clsx('overlay-wrapper', className)}
      $overlayValue={overlayValue}
    />
  );
};

export default Overlay;
