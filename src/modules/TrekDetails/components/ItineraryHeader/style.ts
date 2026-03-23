'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;

  .vertical-line {
    display: none;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.smallMobile}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .itinerary-header-item {
      display: flex;
      gap: 15px;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-align: center;

        svg {
          width: 24px;
          height: 24px;
        }

        .body1 {
          font-size: 12px;
          margin-top: 0;
        }
      }

      .body1 {
        display: flex;
        cursor: pointer;
      }
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
