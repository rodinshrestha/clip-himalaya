'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  .description-section {
    padding: 40px 0;
    text-align: center;

    .h3 {
      font-size: 24px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black['100']};
      margin-bottom: 16px;
    }

    .p {
      font-size: 15px;
      line-height: 1.7;
      color: ${({ theme }) => theme.color.black['200']};
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .activities-section {
    padding: 0 0 60px;
  }

  .section-title {
    margin-bottom: 24px;

    .h3 {
      font-size: 28px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black['100']};
    }
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  .activity-card {
    position: relative;
    width: 100%;
    height: 280px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    background-color: ${({ theme }) => theme.color.grey['100']};

    &:hover {
      transform: translateY(-4px);
    }

    img {
      object-fit: cover;
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.55) 100%
      );
    }

    .card-content {
      position: absolute;
      bottom: 24px;
      left: 24px;
      z-index: 2;

      .p {
        color: ${({ theme }) => theme.color.white['100']};
        font-size: 18px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
