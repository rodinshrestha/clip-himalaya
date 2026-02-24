'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.grey['100']};
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
