'use client';

import styled from 'styled-components';

export const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 60px;

  /* ─── Photo Grid ─── */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 180px;
    gap: 8px;
    border-radius: 12px;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 160px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 150px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 140px;
    }
  }

  .grid-item {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 6px;

    img {
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.08);
    }

    &--large {
      grid-column: span 2;
      grid-row: span 2;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        grid-column: span 2;
        grid-row: span 1;
      }
    }
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
    z-index: 1;

    svg {
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  .grid-item:hover .grid-overlay {
    background: rgba(0, 0, 0, 0.3);

    svg {
      opacity: 1;
    }
  }

  /* ─── Lightbox ─── */
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: background 0.2s;
    z-index: 10;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  .lightbox-content {
    position: relative;
    width: 80vw;
    height: 75vh;
    max-width: 1100px;

    img {
      object-fit: contain;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      width: 92vw;
      height: 60vh;
    }
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    cursor: pointer;
    padding: 12px;
    border-radius: 50%;
    transition: background 0.2s;
    z-index: 10;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }

  .lightbox-prev {
    left: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      left: 8px;
    }
  }

  .lightbox-next {
    right: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      right: 8px;
    }
  }

  .lightbox-counter {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.poppins};
    letter-spacing: 2px;
  }
`;
