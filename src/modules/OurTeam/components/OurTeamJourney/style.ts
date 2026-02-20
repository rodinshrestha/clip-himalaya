'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  .journey-bread-crumbs {
    background-color: ${({ theme }) => theme.color.white['100']};
  }
  .text-wrapper {
    .p {
      font-size: 29px;
      margin-top: 30px;
      font-weight: bold;
      text-align: center;
    }

    .body1 {
      font-size: 18px;
      margin-top: 10px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: normal;
      line-height: 31px;
    }
  }
`;
