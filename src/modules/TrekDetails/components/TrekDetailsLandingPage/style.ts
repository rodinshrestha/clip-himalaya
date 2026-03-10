'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    object-fit: cover;
  }

  .information-content {
    position: absolute;
    top: 50%;
    padding-left: 15px;
    transform: translateY(-50%);
    z-index: 2;

    .h1 {
      font-size: 49px;
      color: ${({ theme }) => theme.color.white['100']};
    }
    .body2 {
      font-size: 31px;
      color: ${({ theme }) => theme.color.white['100']};
    }
  }
`;
