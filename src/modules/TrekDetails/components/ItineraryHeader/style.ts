'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  .header-wrapper {
    display: flex;
    justify-content: space-between;

    &.show {
      position: fixed;
      box-sizing: border-box;
      top: 0;
      left: 0;
      padding: 10px 12px;
      width: 100%;
      animation: slideDown 0.4s ease forwards;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      z-index: 10;

      .itinerary-header-item {
        align-items: center;

        .body1 {
          margin-top: 10px;
          display: flex;
          position: relative;
          font-size: 18px;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 100%;
            height: 1px;
            background-color: ${({ theme }) => theme.color.black['200']};
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;
          }
          &:hover::after {
            transform: scaleX(1);
          }

          &.active::after {
            transform: scaleX(1);
          }
        }
      }
    }

    .itinerary-header-item {
      display: flex;
      gap: 15px;

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
