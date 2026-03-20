'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding: 60px 0 0;

  .footer-top {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    gap: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  /* Brand Column */
  .footer-brand {
    .footer-logo-wrapper {
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 16px;

      img {
        object-fit: contain;
      }
    }

    .footer-description {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 14px;
      line-height: 1.7;
      color: ${({ theme }) => theme.color.black['200']};
      margin-bottom: 20px;
      max-width: 280px;
    }

    .social-links {
      display: flex;
      gap: 10px;

      .social-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.color.black['200']};
        transition: all 0.3s ease;

        &:hover {
          background: ${({ theme }) => theme.color.black['100']};
          color: ${({ theme }) => theme.color.white['100']};
          border-color: ${({ theme }) => theme.color.black['100']};
        }
      }
    }
  }

  /* Footer Columns */
  .footer-column {
    .footer-column-title {
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.color.black['100']};
      margin-bottom: 20px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 14px;
        color: ${({ theme }) => theme.color.black['200']};
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 14px;
        color: ${({ theme }) => theme.color.black['200']};

        svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        a {
          color: ${({ theme }) => theme.color.black['200']};
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }

  /* Bottom Bar */
  .footer-bottom {
    padding: 24px 0;
    text-align: center;

    .p {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 13px;
      color: ${({ theme }) => theme.color.black['200']};
    }
  }
`;
