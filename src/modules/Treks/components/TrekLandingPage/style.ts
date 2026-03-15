'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 360px;
  position: relative;
  display: flex;
  align-items: flex-end;

  img {
    object-fit: cover;
  }

  .text-content {
    z-index: 2;
    position: relative;
    padding-bottom: 50px;
    width: 100%;

    .text-inner-content {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 12px;

      .h1 {
        color: ${({ theme }) => theme.color.white['100']};
        font-size: 42px;
        letter-spacing: 1px;
        text-align: center;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          font-size: 28px;
        }
      }
      .p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 400;
        text-align: center;
        max-width: 500px;
      }
    }
  }
`;
