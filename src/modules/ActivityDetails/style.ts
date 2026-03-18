'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.white['100']};
  padding-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-top: 80px;
  }

  .activity-content {
    padding: 40px 0 60px;

    .activity-title {
      .h2 {
        font-size: 32px;
        font-weight: 700;
        color: ${({ theme }) => theme.color.black['100']};
        margin-bottom: 16px;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          font-size: 24px;
        }
      }
    }

    .activity-short-description {
      margin-bottom: 32px;

      .p {
        font-size: 16px;
        line-height: 1.7;
        color: ${({ theme }) => theme.color.black['200']};
      }
    }

    .activity-description {
      margin-bottom: 40px;

      p {
        font-size: 15px;
        line-height: 1.8;
        color: ${({ theme }) => theme.color.black['200']};
        margin-bottom: 12px;
      }

      h3 {
        font-size: 22px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.black['100']};
        margin: 24px 0 12px;
      }

      h4 {
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.black['100']};
        margin: 20px 0 10px;
      }

      ul,
      ol {
        padding-left: 24px;
        margin-bottom: 16px;

        li {
          font-size: 15px;
          line-height: 1.8;
          color: ${({ theme }) => theme.color.black['200']};
          margin-bottom: 4px;
        }
      }
    }
  }

  .highlights-section {
    padding: 40px 0 60px;
    background-color: ${({ theme }) => theme.color.grey['100']};

    .highlights-title {
      margin-bottom: 24px;

      .h3 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.color.black['100']};
      }
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        grid-template-columns: 1fr;
      }
    }

    .highlight-card {
      background: ${({ theme }) => theme.color.white['100']};
      border-radius: 12px;
      padding: 24px;

      .h4 {
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.black['100']};
        margin-bottom: 8px;
      }

      .p {
        font-size: 14px;
        line-height: 1.7;
        color: ${({ theme }) => theme.color.black['200']};
      }
    }
  }
`;
