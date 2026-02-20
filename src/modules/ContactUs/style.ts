'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-top: 120px;
  .contact-wrapper {
    display: flex;
    justify-content: space-between;
    height: 800px;

    .image-wrapper {
      position: relative;
      flex: 1;
      border-radius: 8px;
      overflow: hidden;

      img {
        object-fit: cover;
        filter: grayscale(100%) brightness(0.7);
      }

      .contact-us-info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        z-index: 20;
        padding: 0 20px;
        gap: 10px;

        .location-info {
          display: flex;
          gap: 10px;
          align-items: flex-end;

          .icon-wrapper {
            position: relative;
            width: 28px;
            height: 28px;
          }

          .p {
            color: ${({ theme }) => theme.color.white['100']};
            font-size: 22px;
            z-index: 2;
            letter-spacing: 1px;
            display: flex;
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

              a {
                &:hover {
                  text-decoration: underline !important;
                }
              }
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
      gap: 20px;
      justify-content: center;

      .btn {
        height: 50px;
        font-size: 16px;
        letter-spacing: 1px;
      }
    }
  }
`;
