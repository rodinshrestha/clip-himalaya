'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.hero-section-wrapper {
    height: 100vh;
    border: 1px solid black;
    overflow: hidden;
    position: relative;

    .bg-video {
      width: 100%;
      height: 100%;
      filter: grayscale(100%) brightness(0.7);
      object-fit: cover;
      display: block;
    }

    .text-content {
      top: 50%;
      z-index: 10;
      position: absolute;
      display: flex;
      align-items: center;
      transform: translateY(-50%);
      padding-left: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      .h1 {
        font-size: 45px;
        color: ${({ theme }) => theme.color.black['200']};

        .auto-text {
          color: ${({ theme }) => theme.color.grey['100']} !important;
        }
      }
      .body2 {
        font-size: 45px;
      }
    }
    .scroll-indicator {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      width: 120px;
      height: 50px;
      z-index: 10;
      animation:
        dropDown 1.2s ease-out forwards,
        bounce 1.8s 1.2s infinite;

      cursor: pointer;

      img {
        object-fit: contain;
      }
    }

    @keyframes dropDown {
      0% {
        transform: translateX(-50%) translateY(-200px);
        opacity: 0;
      }
      100% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
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
