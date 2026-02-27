'use client';

import styled from 'styled-components';

export const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 60px;

  .gallery-wrapper {
    height: 550px;

    .swiper-slide {
      width: 100% !important;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.color.black['100']};
    }
    .swiper-pagination {
      bottom: 0px;
      .swiper-pagination-bullet-active {
        background: ${({ theme }) => theme.color.black['100']};
      }
    }
    .slide-image {
      position: relative;
      width: 100%;
      height: 500px;

      img {
        object-fit: cover;
      }
    }
  }
`;
