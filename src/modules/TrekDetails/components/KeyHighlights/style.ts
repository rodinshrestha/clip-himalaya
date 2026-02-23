'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.key-highlights-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    .key-hightlights-wrapper {
      display: flex;
      flex-direction: column;

      .trekking-info-wrapper:last-child {
        .connector {
          display: none;
        }
      }
    }
  }
`;
