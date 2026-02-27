'use client';

import styled from 'styled-components';

type Props = {
  $overlayValue: number;
};

export const StyledDiv = styled.div<Props>`
  &.overlay-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, ${({ $overlayValue }) => $overlayValue});
  }
`;
