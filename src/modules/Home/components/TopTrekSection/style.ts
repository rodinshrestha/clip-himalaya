import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.top-trek-section {
    padding: 40px 0;
    overflow: hidden;
    .top-trek-card-wrapper {
      height: 560px;
      position: relative;
      .mySwiper {
        .swiper-button-prev,
        .swiper-button-next {
          top: 30%;
        }
      }
    }
  }
`;
