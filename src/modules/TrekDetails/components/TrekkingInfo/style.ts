'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  gap: 16px;
  /* padding-bottom: 20px; */

  .dot-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 16px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) =>
        theme.color.black['100']}; /* your brand color */
      border: 1px solid ${({ theme }) => theme.color.black['200']};
      flex-shrink: 0;
      margin-top: 7px; /* aligns dot with the title text baseline */
      z-index: 1;
    }
    .connector {
      flex: 1;
      width: 2px;
      background-color: ${({ theme }) => theme.color.black['100']};
      margin-top: 4px;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .body1 {
      font-size: 21px;
    }

    .body2 {
      font-size: 16px;
      font-weight: 400;
      font-family: ${({ theme }) => theme.fonts.poppins};
      padding-bottom: 40px;
    }
  }
`;
