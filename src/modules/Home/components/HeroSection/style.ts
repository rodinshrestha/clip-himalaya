'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.hero-section-wrapper {
    height: 100vh;
    overflow: hidden;
    position: relative;

    .bg-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .text-content {
      top: 50%;
      z-index: 10;
      position: absolute;
      transform: translateY(-50%);
      padding-left: 40px;
      padding-right: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      max-width: 800px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        padding-left: 16px;
        padding-right: 16px;
      }

      .h1 {
        font-size: 56px;
        color: ${({ theme }) => theme.color.white['100']};
        line-height: 1.1;
        letter-spacing: -0.5px;

        .auto-text {
          color: ${({ theme }) => theme.color.grey['100']} !important;
          font-style: italic;
        }

        @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
          font-size: 42px;
        }
        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          font-size: 32px;
        }
      }

      .body2 {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 400;
        max-width: 550px;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          font-size: 16px;
        }
      }

      .hero-cta-wrapper {
        display: flex;
        gap: 16px;
        margin-top: 12px;

        .btn.black {
          background-color: ${({ theme }) => theme.color.white['100']};
          border-color: ${({ theme }) => theme.color.white['100']};
          color: ${({ theme }) => theme.color.black['100']};
          font-size: 14px;
          letter-spacing: 1.5px;
          padding: 14px 32px;

          &:hover {
            background-color: transparent;
            color: ${({ theme }) => theme.color.white['100']};
          }
        }

        .btn.outline {
          border-color: rgba(255, 255, 255, 0.6);
          color: ${({ theme }) => theme.color.white['100']};
          font-size: 14px;
          letter-spacing: 1.5px;
          padding: 14px 32px;

          &:hover {
            background-color: ${({ theme }) => theme.color.white['100']};
            color: ${({ theme }) => theme.color.black['100']};
            border-color: ${({ theme }) => theme.color.white['100']};
          }
        }

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          flex-direction: column;
          width: 100%;
        }
      }
    }

    .scroll-indicator {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 24px;
      width: 60px;
      height: 40px;
      z-index: 10;
      animation:
        dropDown 1.2s ease-out forwards,
        bounce 1.8s 1.2s infinite;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    @keyframes dropDown {
      0% {
        transform: translateX(-50%) translateY(-400px);
        opacity: 0;
      }
      100% {
        transform: translateX(-50%) translateY(0);
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, 12px);
      }
    }
  }
`;
