'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 60px;
  .body1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 16px;
    font-weight: 400;
  }
`;
