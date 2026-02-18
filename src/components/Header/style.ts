'use client';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  z-index: 100;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    .logo-content {
      display: flex;
      align-items: center;
      .logo-wrapper {
        position: relative;
        height: 120px;
        width: 130px;
        img {
          object-fit: cover;
        }
      }
      .title-content {
        .h1 {
          font-family: ${({ theme }) => theme.fonts.magra};
          font-weight: 500;
        }
        .body1 {
          font-weight: normal;
          text-transform: uppercase;
          font-size: 21px;
          line-height: 21px;
          font-weight: 400;
          opacity: 0.8;
        }
      }
    }

    .header-navigation-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;

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
  }
`;
