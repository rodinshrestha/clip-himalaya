'use client';

import styled from 'styled-components';

export const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;

  .essential-tip-wrapper {
    .trekking-info-wrapper:last-child {
      .connector {
        display: none;
      }
    }
  }
`;
