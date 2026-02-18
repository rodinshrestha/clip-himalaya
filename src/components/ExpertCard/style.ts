'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.expert-card-wrapper {
    flex: 1;
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 400px;
      border-radius: 8px;
      overflow: hidden;
      filter: grayscale(100%) brightness(0.7);

      img {
        object-fit: cover;
      }
    }
    .expert-title {
      margin-top: 10px;
      text-align: center;
      font-size: 18px;
    }
    .expert-desigination {
      text-align: center;
      margin-top: 5px;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
`;
