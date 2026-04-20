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
          max-width: 600px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        .elevation-badge {
          font-size: 14px;
          opacity: 0.8;
          letter-spacing: 1px;
        }
      }
    }
  }

  /* Region Content */
  .region-content {
    padding: 50px 0 20px;

    .region-description {
      max-width: 800px;
      margin-bottom: 40px;

      p {
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 16px;
        line-height: 1.8;
        color: ${({ theme }) => theme.color.black['200']};
        margin-bottom: 16px;
      }

      h3 {
        font-size: 22px;
        font-weight: 600;
        margin: 28px 0 12px;
      }
    }

    .region-info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 20px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        grid-template-columns: 1fr;
      }

      .info-card {
        background: ${({ theme }) => theme.color.white['100']};
        padding: 28px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.color.grey['100']};
        animation: fadeInUp 0.5s ease both;
        transition: box-shadow 0.3s ease;

        &:nth-child(1) { animation-delay: 0s; }
        &:nth-child(2) { animation-delay: 0.1s; }
        &:nth-child(3) { animation-delay: 0.2s; }

        &:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .h3 {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .p {
          font-family: ${({ theme }) => theme.fonts.poppins};
          font-size: 14px;
          line-height: 1.7;
          color: ${({ theme }) => theme.color.black['200']};
        }
      }
    }
  }

  .region-header {
    padding: 40px 0 24px;
    display: flex;
    align-items: baseline;
    gap: 16px;

    .region-title {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 22px;
      }
    }

    .trek-count {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 14px;
      color: ${({ theme }) => theme.color.black['200']};
      opacity: 0.7;
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
