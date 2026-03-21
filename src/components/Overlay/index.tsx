import React from 'react';
import { StyledDiv } from './style';
import clsx from 'clsx';

type Props = {
  className?: string;
  overlayValue?: number;
};

const Overlay = ({ className, overlayValue = 0.5 }: Props) => {
  return (
    <StyledDiv
      className={clsx('overlay-wrapper', className)}
      style={{ backgroundColor: `rgba(0, 0, 0, ${overlayValue})` }}
    />
  );
};

export default Overlay;
