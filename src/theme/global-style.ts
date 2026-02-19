'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.magra};
    width: 100vw;
    &.modal-open{
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  }


 .container {
    /* max-width: 1600px; optional: adjust for your breakpoint */
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100%;
}

.container-fluid {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100%;

}

.row {
    margin-left: -1rem;  /* compensate for .col padding */
    margin-right: -1rem;
    height: 100%;
    width: 100%;
   
}


.col {
    flex: 1 0 0%;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100%;
    width: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2); 
}
a{
  color: inherit;
  text-decoration: none;
}

 .section-title-wrapper {
      padding: 40px 0;
      .section-title {
        text-align: center;
        font-size: 42px !important;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

 .mySwiper{
  width: 100%;
  height: 100%;

  .swiper-button-prev, .swiper-button-next{
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.grey['100']};
  }

  .swiper-pagination{
    bottom: -5px;
      .swiper-pagination-bullet-active{
        background: ${({ theme }) => theme.color.black['100']};
    }
  }
 }   
`;
