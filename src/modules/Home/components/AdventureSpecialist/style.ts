'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 40px 0 0;

  .specialist-section {
    padding: 40px 0;
  }

  .specialist-heading {
    text-align: center;
    font-size: 24px;
    line-height: 1.4;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 400;
    margin-bottom: 36px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 20px;
      margin-bottom: 28px;
    }
  }

  .specialist-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      flex-direction: column;
      gap: 36px;
    }
  }

  .member-list {
    display: flex;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      gap: 16px;
    }
  }

  .member-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .member-image {
      position: relative;
      width: 120px;
      height: 140px;
      border-radius: 8px;
      overflow: hidden;

      img {
        object-fit: cover;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        width: 90px;
        height: 110px;
      }
    }

    .member-name {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 500;
      text-align: center;
    }
  }

  .contact-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      align-items: center;
    }

    .call-us-text {
      font-size: 15px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 400;
      color: ${({ theme }) => theme.color.black['200']};
    }

    .phone-number {
      font-size: 24px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 700;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.7;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 20px;
      }
    }

    .call-btn {
      margin-top: 10px;
      border-radius: 6px;
      padding: 12px 28px;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
  }
`;
