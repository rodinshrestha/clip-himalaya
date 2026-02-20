'use client';

import styled from 'styled-components';

export const StyledDiv = styled.ul`
  background-color: ${({ theme }) => theme.color.grey['100']};
  margin-block-end: 0;

  li {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 16px;
    padding-bottom: 10px;
    line-height: 29px;
  }
`;
