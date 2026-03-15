'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 80px 0 100px;
  overflow: hidden;

  .section-title-wrapper {
    text-align: center;
    margin-bottom: 48px;
    padding: 0 1rem;

    .section-label {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      text-transform: uppercase;
      letter-spacing: 3px;
      color: ${({ theme }) => theme.color.black['200']};
      font-weight: 500;
      margin-bottom: 12px;
    }

    .section-heading {
      font-size: 38px !important;
      font-family: ${({ theme }) => theme.fonts.poppins} !important;
      font-weight: 300 !important;
      color: ${({ theme }) => theme.color.black['200']};
      letter-spacing: 0.5px;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 26px !important;
      }
    }
  }

  .marquee-container {
    position: relative;
    width: 100%;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 80px;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, white, transparent);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, white, transparent);
    }
  }

  .marquee-track {
    display: flex;
    gap: 24px;
    width: max-content;
    animation: marquee 40s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
