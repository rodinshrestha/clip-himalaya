'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 60px 0 80px;

  .section-header {
    margin-bottom: 40px;

    .section-title {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 1px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 26px;
      }
    }
  }

  .region-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .region-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

      img {
        transform: scale(1.05);
      }
    }

    img {
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .region-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.1) 60%,
        transparent 100%
      );
      z-index: 1;
    }

    .region-info {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 20px;
      z-index: 2;

      .region-count {
        font-size: 13px;
        font-family: ${({ theme }) => theme.fonts.poppins};
        color: ${({ theme }) => theme.color.primary};
        font-weight: 500;
        margin-bottom: 4px;
      }

      .region-name {
        font-size: 20px;
        color: ${({ theme }) => theme.color.white['100']};
        font-weight: 600;
        letter-spacing: 0.5px;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          font-size: 18px;
        }
      }
    }
  }
`;
