'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  .trek-cost-include-exclude-wrapper {
    display: flex;
    gap: 20px;
    margin-top: 60px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      flex-direction: column;
      gap: 60px;
    }
  }
`;
