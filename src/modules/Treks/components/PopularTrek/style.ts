'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 60px 0 80px;

  .section-header {
    text-align: center;
    margin-bottom: 40px;

    .section-label {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      text-transform: uppercase;
      letter-spacing: 3px;
      color: ${({ theme }) => theme.color.black['200']};
      font-weight: 500;
      margin-bottom: 8px;
    }

    .section-title {
      font-size: 36px;
      text-transform: uppercase;
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
`;
