import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.top-trek-section {
    padding: 60px 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.grey['100']};

    .section-title-wrapper {
      .section-label {
        font-size: 14px;
        font-family: ${({ theme }) => theme.fonts.poppins};
        text-transform: uppercase;
        letter-spacing: 3px;
        color: ${({ theme }) => theme.color.black['200']};
        font-weight: 500;
        text-align: center;
        margin-bottom: 8px;
      }
    }

    .top-trek-card-wrapper {
      position: relative;

      .mySwiper {
        padding-bottom: 40px;

        .swiper-slide {
          height: auto;
        }

        .swiper-button-prev,
        .swiper-button-next {
          top: 35%;
          color: ${({ theme }) => theme.color.black['100']};
        }

        .swiper-pagination {
          bottom: 0;
        }
      }
    }

    .view-all-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
`;
