'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-top: 20px;
  .crumb-wrapper {
    display: flex;
    gap: 10px;

    a {
      &:hover {
        text-decoration: underline;
      }
    }

    .bread-crumb-text {
      font-size: 24px;
      line-height: 36px;
      font-weight: 500;

      &.disabled {
        pointer-events: none;
      }
    }
  }
`;
