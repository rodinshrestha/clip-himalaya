'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    object-fit: cover;
    filter: grayscale(100%) brightness(0.7);
  }

  .information-content {
    position: absolute;
    top: 50%;
    padding-left: 15px;
    transform: translateY(-50%);

    .h1 {
      font-size: 49px;
    }
    .body2 {
      font-size: 31px;
    }
  }
`;
