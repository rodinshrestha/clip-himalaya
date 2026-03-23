'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;

  .vertical-line {
    display: none;
    position: absolute;
    height: 100%;
    background-color: #000;
    width: 2px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      display: block;
    }
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
    }

    .itinerary-header-item {
      display: flex;
      gap: 15px;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        svg {
          width: 36px;
          height: 36px;
          background-color: #fff;
          z-index: 2;
          padding: 10px;
          /* box-sizing: border-box; */
        }

        &.left {
          flex-direction: row-reverse;
          justify-content: flex-end;
          padding-left: calc(50% - 225px);
          &:first-child {
            padding-left: calc(50% - 234px);
          }
        }

        &.right {
          flex-direction: row; // icon | text
          justify-content: flex-start;
          padding-left: calc(50% - 28px);
        }

        .body1 {
          margin-top: 10px;
          @media (max-width: ${({ theme }) => theme.breakPoints.smallMobile}) {
            width: 140px;
          }
          @media (min-width: 409px) and (max-width: 445px) {
            width: 156px;
          }

          @media (min-width: 395px) and (max-width: 408px) {
            width: 142px;
          }
          @media (max-width: 394px) {
            width: 138px;
          }
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
