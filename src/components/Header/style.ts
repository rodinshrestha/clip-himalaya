'use client';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  z-index: 100;
  padding: 20px 0;
  box-sizing: border-box;
  transition: transform 0.4s ease;
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    padding: 5px 0;
    /* slide animation */
    animation: slideDown 0.4s ease forwards;

    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.95);

    .logo-wrapper {
      height: 65px !important;
      width: 65px !important;
    }

    .title-content {
      .h1 {
        font-size: 24px !important;
      }
      .body1 {
        font-size: 16px !important;
      }
    }
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    .logo-content {
      display: flex;
      align-items: center;
      .logo-wrapper {
        position: relative;
        height: 80px;
        width: 80px;
        img {
          object-fit: cover;
        }
      }
      .title-content {
        margin-left: 20px;
        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          margin-left: 10px;
        }
        .h1 {
          font-family: ${({ theme }) => theme.fonts.magra};
          font-weight: 500;
          @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
            font-size: 24px !important;
          }
        }
        .body1 {
          font-weight: normal;
          text-transform: uppercase;
          font-size: 21px;
          line-height: 21px;
          font-weight: 400;
          opacity: 0.8;
          @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
            font-size: 16px !important;
          }
        }
      }
    }

    .header-navigation-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        display: none;
      }

      .navigation-link {
        font-size: 21px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.black['200']};
        position: relative;
        display: inline-block;
        font-weight: 400;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1.5px;
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

    .hamburger-menu-wrapper {
      align-items: center;
      display: none;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        display: flex;
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
