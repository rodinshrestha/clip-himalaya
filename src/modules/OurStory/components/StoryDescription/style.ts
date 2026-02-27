'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 60px;
  .story-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .p {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
