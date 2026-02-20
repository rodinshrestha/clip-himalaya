'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-top: 20px;
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
