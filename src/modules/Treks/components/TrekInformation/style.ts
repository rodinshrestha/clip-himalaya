'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 20px 0 0;

  .trek-description {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 16px;
    line-height: 1.8;
    color: ${({ theme }) => theme.color.black['200']};
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
`;
