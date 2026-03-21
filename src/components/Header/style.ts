'use client';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  z-index: 100;
  padding: 20px 0;
  box-sizing: border-box;
  transition: all 0.4s ease;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  /* Default state: transparent header over hero */
  .logo-content .title-content .h1,
  .logo-content .title-content .body1 {
    color: ${({ theme }) => theme.color.white['100']};
    transition: color 0.3s ease;
  }

  .header-navigation-wrapper .navigation-link {
    color: ${({ theme }) => theme.color.white['100']};
    transition: color 0.3s ease;

    &::after {
      background-color: ${({ theme }) => theme.color.white['100']};
    }
  }

  .hamburger-menu-wrapper svg {
    color: ${({ theme }) => theme.color.white['100']} !important;
    transition: color 0.3s ease;
  }

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 0;
    animation: slideDown 0.4s ease forwards;
    background-color: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);

    .logo-wrapper {
      height: 60px !important;
      width: 60px !important;
      opacity: 1 !important;

      img {
        object-fit: contain;
      }
    }

    .logo-content .title-content .h1 {
      color: ${({ theme }) => theme.color.black['100']} !important;
      font-size: 20px !important;
    }
    .logo-content .title-content .body1 {
      color: ${({ theme }) => theme.color.black['200']} !important;
      font-size: 12px !important;
    }

    .header-navigation-wrapper .navigation-link {
      color: ${({ theme }) => theme.color.black['100']} !important;
      font-size: 15px;

      &::after {
        background-color: ${({ theme }) => theme.color.black['100']} !important;
      }
    }
    .hamburger-menu-wrapper {
      .hamburgerMenu {
        span {
          background-color: ${({ theme }) =>
            theme.color.black['100']} !important;
        }
      }
    }
  }

  .hamburger-menu-wrapper {
    .hamburgerMenu {
      span {
        background-color: ${({ theme }) => theme.color.white['100']};
      }
    }
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-content {
      display: flex;
      align-items: center;
      .logo-wrapper {
        position: relative;
        height: 65px;
        width: 65px;
        flex-shrink: 0;
        transition: all 0.3s ease;
        opacity: 1;
        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          height: 42px;
          width: 42px;
        }
        img {
          object-fit: contain;
        }
      }
      .title-content {
        margin-left: 14px;
        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          margin-left: 10px;
        }
        .h1 {
          font-family: ${({ theme }) => theme.fonts.magra};
          font-weight: 600;
          font-size: 22px !important;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;

          @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
            font-size: 18px !important;
          }
        }
        .body1 {
          text-transform: uppercase;
          font-size: 11px !important;
          line-height: 16px;
          font-weight: 400;
          letter-spacing: 3px;
          opacity: 0.75;
          transition: all 0.3s ease;

          @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
            font-size: 10px !important;
            letter-spacing: 2px;
          }
        }
      }
    }

    .header-navigation-wrapper {
      display: flex;
      align-items: center;
      gap: 28px;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        display: none;
      }

      .navigation-link {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        display: inline-block;
        font-weight: 500;
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 0.8;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
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

        .drawer {
          position: fixed;
          box-sizing: border-box;
          top: 0;
          left: 0;
          width: 100%;
          height: 100dvh;
          background-color: #fff;
          z-index: 99;
          padding: 40px 0;
          overflow: hidden;

          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

          // 👇 slide from top
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

          &.open {
            transform: translateY(0); // 👈 slides down
          }

          .drawer-header {
            display: flex;
            justify-content: space-between;
            padding-left: 26px;
            padding-right: 25px;
            box-sizing: border-box;
            border-bottom: 1px solid #000;
            padding-bottom: 20px;

            .p {
              font-size: 21px;
            }
            .drawer-close {
              display: flex;
              justify-content: flex-end;
              font-size: 45px;

              .hamburgerMenu {
                span {
                  background-color: ${({ theme }) => theme.color.black['100']};
                }
              }
            }
          }

          .drawer-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .navigation-mobile-link {
              display: flex;
              align-items: center;
              gap: 20px;
              font-size: 28px;
              padding: 0 24px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.4);

              .content-wrapper {
                display: flex;
                gap: 20px;
                padding: 25px 0;

                .icon-wrapper {
                  display: flex;
                  align-items: center;
                }

                .p {
                  font-size: 16px;
                  margin-top: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
