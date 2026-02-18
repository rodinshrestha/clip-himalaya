'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  flex: 1;
  padding: 10px;
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    filter: grayscale(100%) brightness(0.7);

    img {
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .card-information-list {
    padding-inline-start: 20px;

    li {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 400;
    }
  }
`;
