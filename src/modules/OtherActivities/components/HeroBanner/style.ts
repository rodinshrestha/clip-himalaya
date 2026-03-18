'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
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

  .text-content {
    z-index: 2;
    position: relative;
    padding-bottom: 60px;
    width: 100%;

    .text-inner-content {
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
`;
