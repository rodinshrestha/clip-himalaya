'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-bottom: 80px;

  /* Hero Banner */
  .hero-section {
    width: 100%;
    height: 50vh;
    min-height: 350px;
    position: relative;
    display: flex;
    align-items: flex-end;

    img {
      object-fit: cover;
      object-position: center 30%;
    }

    .hero-gradient {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.65) 100%
      );
    }

    .hero-text {
      z-index: 2;
      position: relative;
      padding-bottom: 50px;
      width: 100%;

      .hero-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .h1 {
          color: ${({ theme }) => theme.color.white['100']};
          font-size: 42px;
          letter-spacing: 1.5px;
          text-align: center;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            font-size: 28px;
          }
        }

        .p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-family: ${({ theme }) => theme.fonts.poppins};
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  /* Content */
  .content-wrapper {
    padding: 40px 0;
    max-width: 900px;
    margin: 0 auto;
  }

  .legal-section {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: 0.5px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 18px;
    }
  }

  .section-content {
    .p {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 15px;
      line-height: 1.8;
      color: ${({ theme }) => theme.color.black['200']};
      margin-bottom: 8px;
    }
  }
`;
