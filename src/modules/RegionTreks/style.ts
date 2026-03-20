'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-bottom: 80px;

  /* Hero Banner */
  .hero-section {
    width: 100%;
    height: 60vh;
    min-height: 420px;
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
      padding-bottom: 60px;
      width: 100%;

      .hero-inner {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        gap: 12px;

        .h1 {
          color: ${({ theme }) => theme.color.white['100']};
          font-size: 46px;
          letter-spacing: 1.5px;
          text-align: center;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            font-size: 28px;
          }
        }

        .p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-family: ${({ theme }) => theme.fonts.poppins};
          font-weight: 400;
          text-align: center;
          max-width: 500px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .region-header {
    padding: 40px 0;

    .region-title {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 22px;
      }
    }
  }

  .trek-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .no-results {
    text-align: center;
    padding: 40px 0;

    .p {
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      color: ${({ theme }) => theme.color.black['200']};
    }
  }
`;
