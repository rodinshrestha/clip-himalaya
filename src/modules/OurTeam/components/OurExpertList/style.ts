'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  .expert-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-wrap: wrap;

    .expert-card-wrapper {
      flex: 1 0 calc(25% - 20px);
      min-width: 400px;
      max-width: 495px;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallMobile}) {
        min-width: 360px;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        min-width: 300px;
      }

      flex: 1;
    }
  }
`;
