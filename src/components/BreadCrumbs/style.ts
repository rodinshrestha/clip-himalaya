'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-top: 20px;
  .crumb-wrapper {
    display: flex;
    gap: 10px;
  }
`;
