'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.grey['100']};
  padding-top: 60px;
  padding-bottom: 20px;

  .footer-wrapper {
    display: flex;
    flex-direction: column;

    .footer-logo-wrapper {
      position: relative;
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        margin-bottom: 40px;
      }

      img {
        object-fit: cover;
      }
    }

    .footer-items-list {
      display: flex;
      justify-content: space-between;

      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        flex-direction: column;
        gap: 40px;
      }

      .footer-item-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
          flex-direction: column;
          gap: 5px;
        }
        .footer-item-title {
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .footer-items-inner-wrapper {
          display: flex;
          flex-direction: column;
          gap: 5px;
          a:hover {
            text-decoration: underline;
          }
          .footer-item {
            font-family: ${({ theme }) => theme.fonts.poppins};
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }

    .copy-right-trade-mark {
      margin-top: 80px;
      display: flex;
      justify-content: center;

      .p {
        font-size: 16px;
      }
    }
  }
`;
