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

  /* Story Content */
  .story-section {
    padding: 60px 0;

    .story-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .section-label {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.color.black['200']};
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.poppins};
      margin-bottom: 8px;
    }

    .section-heading {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      color: ${({ theme }) => theme.color.black['100']};
      margin-bottom: 32px;
    }

    .story-text {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .p {
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 16px;
        line-height: 1.8;
        color: ${({ theme }) => theme.color.black['200']};
        text-align: center;
      }
    }
  }

  /* Photo Gallery */
  .gallery-section {
    padding: 0 0 80px;

    .section-label {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.color.black['200']};
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.poppins};
      margin-bottom: 8px;
    }

    .gallery-heading {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      color: ${({ theme }) => theme.color.black['100']};
      margin-bottom: 40px;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        grid-template-columns: 1fr;
      }
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 4 / 3;
      border-radius: 12px;
      overflow: hidden;

      img {
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }
  }
`;
