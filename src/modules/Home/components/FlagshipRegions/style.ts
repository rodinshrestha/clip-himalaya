'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 80px 0;

  .regions-header {
    text-align: center;
    margin-bottom: 48px;

    .section-label {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.color.black['200']};
      margin-bottom: 12px;
    }

    .section-heading {
      font-size: 32px;
      font-weight: 700;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 24px;
      }
    }
  }

  .regions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }

    .region-card {
      text-decoration: none;
      color: inherit;
      display: block;
      overflow: hidden;
      border-radius: 4px;
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-4px);

        .region-image img {
          transform: scale(1.05);
        }
      }

      .region-image {
        position: relative;
        width: 100%;
        aspect-ratio: 4 / 3;
        overflow: hidden;

        img {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .region-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 1;
        }
      }

      .region-info {
        padding: 20px;
        background: ${({ theme }) => theme.color.white['100']};
        border: 1px solid ${({ theme }) => theme.color.grey['100']};
        border-top: none;

        .region-name {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .region-tagline {
          font-family: ${({ theme }) => theme.fonts.poppins};
          font-size: 14px;
          line-height: 1.6;
          color: ${({ theme }) => theme.color.black['200']};
          margin-bottom: 12px;
        }

        .region-meta {
          display: flex;
          gap: 16px;

          .meta-item {
            font-family: ${({ theme }) => theme.fonts.poppins};
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: ${({ theme }) => theme.color.black['200']};
            opacity: 0.7;
          }
        }
      }
    }
  }
`;
