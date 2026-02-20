'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  .expert-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .expert-card-wrapper {
      flex: 0 0 calc(25% - 20px);
    }
  }
`;
