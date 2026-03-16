'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  .cost-exclude-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .connector {
      display: none;
    }
  }
`;
