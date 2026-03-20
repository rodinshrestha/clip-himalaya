'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  .journey-bread-crumbs {
    background-color: ${({ theme }) => theme.color.white['100']};
  }

  .text-wrapper {
    padding: 40px 0;
    text-align: center;

    .p {
      font-size: 28px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black['100']};
      margin-bottom: 16px;
    }

    .body1 {
      font-size: 15px;
      line-height: 1.7;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 400;
      color: ${({ theme }) => theme.color.black['200']};
      max-width: 800px;
      margin: 0 auto;
    }
  }
`;
