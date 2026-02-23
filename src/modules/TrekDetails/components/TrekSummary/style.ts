'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-top: 20px;
  .body1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 16px;
    font-weight: 400;
  }
`;
