'use client';

import styled from 'styled-components';

export const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 60px;

  /* ─── Gallery Hint ─── */
  .gallery-hint {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.color.grey['200']};
    font-size: 13px;
    font-family: ${({ theme }) => theme.fonts.poppins};

    svg {
      opacity: 0.7;
    }
  }

  /* ─── Photo Grid ─── */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
    }
  }

  .grid-item {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    aspect-ratio: 3 / 2;

    img {
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: background 0.3s ease;
    z-index: 1;

    svg {
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .overlay-text {
      color: white;
      font-size: 12px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      opacity: 0;
      transition: opacity 0.3s ease;
      letter-spacing: 0.5px;
    }
  }

  .grid-item:hover .grid-overlay {
    background: rgba(0, 0, 0, 0.35);

    svg,
    .overlay-text {
      opacity: 1;
    }
  }
`;
