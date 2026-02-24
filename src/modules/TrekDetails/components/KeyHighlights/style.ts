'use client';

import styled from 'styled-components';

export const StyledDiv = styled.section`
  &.key-highlights-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 60px;

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
