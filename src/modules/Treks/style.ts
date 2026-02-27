'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.white['100']};

  .trek-description {
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
`;
