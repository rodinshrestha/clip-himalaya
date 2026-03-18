'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-bottom: 80px;

  .region-header {
    padding: 40px 0;

    .region-title {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 1px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 26px;
      }
    }
  }

  .trek-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .no-results {
    text-align: center;
    padding: 40px 0;

    .p {
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      color: ${({ theme }) => theme.color.black['200']};
    }
  }
`;
