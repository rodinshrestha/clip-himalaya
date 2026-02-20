'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 99vh;
  position: relative;
  filter: grayscale(100%) brightness(0.7);
  display: flex;
  align-items: center;

  img {
    object-fit: cover;
  }

  .text-content {
    z-index: 5px;
    position: relative;
    margin-top: 200px;

    .text-inner-content {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      z-index: 20;
      .h1 {
        color: ${({ theme }) => theme.color.white['100']};
        font-size: 28px;
      }
      .p {
        color: ${({ theme }) => theme.color.white['100']};
        font-size: 28px;
        margin-top: 40px;
      }
    }
  }
`;
