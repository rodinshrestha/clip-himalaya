'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .body1 {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 3px;
  }

  .body2 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    margin-top: 1cqb;
    text-align: center;
  }
`;
