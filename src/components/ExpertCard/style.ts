'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.expert-card-wrapper {
    flex: 1;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-6px);
    }

    &:hover .image-wrapper img {
      transform: scale(1.05);
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      height: 420px;
      border-radius: 12px;
      overflow: hidden;

      img {
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        height: 350px;
      }
    }

    .expert-title {
      margin-top: 16px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }

    .expert-desigination {
      text-align: center;
      margin-top: 4px;
      font-size: 14px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.poppins};
      color: ${({ theme }) => theme.color.black['200']};
      font-weight: 400;
    }
  }
`;
