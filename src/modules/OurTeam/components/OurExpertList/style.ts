'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 20px 0 60px;

  .section-label {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.color.black['200']};
    text-align: center;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }

  .section-heading {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.color.black['100']};
    margin-bottom: 40px;
  }

  .expert-list-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      grid-template-columns: 1fr;
    }

    .expert-card-wrapper {
      width: 100%;
    }
  }
`;
