'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.hero-section-wrapper {
    height: 900px;
    border: 1px solid black;
    overflow: hidden;

    .bg-video {
      width: 100%;
      height: 100%;
      filter: grayscale(100%) brightness(0.7);
      object-fit: cover;
      display: block;
    }
  }
`;
