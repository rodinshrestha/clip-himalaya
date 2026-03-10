'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;

  .testimonial-list-wrapper {
    display: flex;
    gap: 30px;
    margin-top: 20px;
    height: 400px;
    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      height: 350px;
    }

    .mySwiper {
      .swiper-button-prev,
      .swiper-button-next {
        color: ${({ theme }) => theme.color.black['100']};
        top: 40%;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        .swiper-pagination {
          bottom: -5px;
        }
      }
    }
  }
`;
