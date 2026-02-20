'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 120px;
  height: 90vh;
  position: relative;

  img {
    object-fit: cover;
  }

  .text-content {
    position: absolute;
    padding-left: 12px;
    left: 0;
    bottom: 100px;
  }
`;
