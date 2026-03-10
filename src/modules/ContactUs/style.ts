'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 120px;
  padding-bottom: 80px;

  .contact-wrapper {
    display: flex;
    justify-content: space-between;
    height: 800px;
    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      flex-direction: column;
      gap: 60px;
      height: unset;
    }

    .image-wrapper {
      position: relative;
      flex: 1;
      border-radius: 8px;
      overflow: hidden;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        min-height: 600px;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        min-height: 800px;
      }

      img {
        object-fit: cover;
      }

      .contact-us-info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        z-index: 20;
        padding: 0 20px;
        gap: 10px;
        position: relative;
        @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
          position: absolute;
        }

        .location-info {
          display: flex;
          gap: 10px;
          align-items: center;

          .icon-wrapper {
            position: relative;
            width: 21px;
            height: 21px;
          }

          .p {
            color: ${({ theme }) => theme.color.white['100']};
            font-size: 22px;
            z-index: 2;
            letter-spacing: 1px;
            display: flex;
            margin-top: 10px;
          }
        }
        .plan-text {
          color: ${({ theme }) => theme.color.white['100']};
          font-size: 41px;
          z-index: 2;
        }
        .contact-info-wrapper {
          display: flex;
          z-index: 2;
          position: relative;
          @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
            flex-direction: column;
            gap: 30px;
          }

          .contact-info-left {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 5px;

            .p {
              color: ${({ theme }) => theme.color.white['100']};
              font-size: 21px;
              margin-bottom: 10px;
            }

            .body2 {
              color: ${({ theme }) => theme.color.white['100']};
              font-size: 18px;
              font-family: ${({ theme }) => theme.fonts.poppins};
            }
          }
          .contact-info-right {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 5px;

            .p {
              color: ${({ theme }) => theme.color.white['100']};
              font-size: 21px;
              margin-bottom: 10px;
            }

            .body2 {
              color: ${({ theme }) => theme.color.white['100']};
              font-size: 18px;
              font-family: ${({ theme }) => theme.fonts.poppins};
            }
          }
        }

        .office-hour-wrapper {
          margin-top: 10px;
          z-index: 2;
          max-width: 70%;
          @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
            max-width: 100%;
          }

          .p {
            color: ${({ theme }) => theme.color.white['100']};
            font-size: 21px;
            margin-bottom: 10px;
          }

          .body2 {
            color: ${({ theme }) => theme.color.white['100']};
            font-family: ${({ theme }) => theme.fonts.poppins};
            font-size: 18px;
            line-height: 28px;
          }
        }
      }
    }
    .contact-us-form {
      flex: 1;
      padding: 0 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        padding: unset;
        padding: 0 10px;
      }

      .btn {
        height: 50px;
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 20px;
      }
    }
  }
`;
