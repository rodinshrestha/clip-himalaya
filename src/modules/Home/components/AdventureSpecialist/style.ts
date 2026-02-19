'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 40px 0;
  padding-bottom: 0;

  .section-title-wrapper {
    margin-top: 10px;
  }

  .adventure-specialist-content {
    display: flex;
    margin-bottom: 40px;
    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      flex-direction: column;
      gap: 60px;
    }

    .adventure-expert-list {
      width: 60%;
      display: flex;
      gap: 20px;
      height: 530px;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        width: 100%;
        height: 510px;
      }

      .mySwiper {
        .swiper-button-prev,
        .swiper-button-next {
          top: 40%;
        }
      }
    }

    .adventure-contact-us {
      width: 40%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        width: 100%;
      }

      .call-us-text {
        font-size: 24px;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 400;
      }

      .contact-us {
        margin-top: 20px;
        font-size: 24px;
        font-family: ${({ theme }) => theme.fonts.poppins};

        &:hover {
          text-decoration: underline;
        }
      }
      .call-btn {
        margin-top: 20px;
      }
    }
  }
`;
