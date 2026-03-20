'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
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

  /* Contact Info Cards */
  .info-section {
    padding: 60px 0;

    .info-grid {
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

    .info-card {
      background: ${({ theme }) => theme.color.white['100']};
      border: 1px solid ${({ theme }) => theme.color.grey['100']};
      border-radius: 12px;
      padding: 28px 24px;
      text-align: center;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      }

      .info-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: ${({ theme }) => theme.color.grey['100']};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        color: ${({ theme }) => theme.color.black['100']};
      }

      .h4 {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.black['100']};
        margin-bottom: 8px;
      }

      .p {
        font-size: 14px;
        line-height: 1.6;
        color: ${({ theme }) => theme.color.black['200']};
        font-family: ${({ theme }) => theme.fonts.poppins};

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

  /* Form Section */
  .form-section {
    padding: 0 0 80px;

    .form-wrapper {
      max-width: 700px;
      margin: 0 auto;
    }

    .form-header {
      text-align: center;
      margin-bottom: 40px;

      .form-label {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.color.black['200']};
        font-family: ${({ theme }) => theme.fonts.poppins};
        margin-bottom: 8px;
      }

      .form-heading {
        font-size: 28px;
        font-weight: 700;
        color: ${({ theme }) => theme.color.black['100']};
        margin-bottom: 12px;
      }

      .form-description {
        font-size: 15px;
        line-height: 1.7;
        color: ${({ theme }) => theme.color.black['200']};
        font-family: ${({ theme }) => theme.fonts.poppins};
        max-width: 550px;
        margin: 0 auto;
      }
    }

    .form-fields {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          grid-template-columns: 1fr;
          gap: 4px;
        }
      }

      .btn {
        height: 50px;
        font-size: 16px;
        letter-spacing: 0.5px;
        margin-top: 16px;
        border-radius: 8px;
      }
    }
  }
`;
