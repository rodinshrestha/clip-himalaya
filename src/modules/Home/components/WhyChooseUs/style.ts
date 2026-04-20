'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.color.white['100']};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 50px 0;
  }

  .why-choose-us-header {
    text-align: center;
    margin-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      margin-bottom: 40px;
    }

    .section-label {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      text-transform: uppercase;
      letter-spacing: 3px;
      color: ${({ theme }) => theme.color.black['200']};
      font-weight: 500;
      margin-bottom: 12px;
    }

    .section-heading {
      font-size: 42px;
      text-transform: uppercase;
      letter-spacing: 1px;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
        font-size: 32px;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 26px;
      }
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoints.smallScreen}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  .feature-item {
    text-align: center;
    padding: 32px 20px;
    border-radius: 12px;
    transition: all 0.3s ease;
    animation: fadeInUp 0.5s ease both;

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.3s; }

    &:hover {
      background-color: ${({ theme }) => theme.color.grey['100']};
      transform: translateY(-4px);
    }

    .feature-icon {
      width: 56px;
      height: 56px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.grey['100']};
      color: ${({ theme }) => theme.color.black['100']};
      transition: all 0.3s ease;
    }

    &:hover .feature-icon {
      background-color: ${({ theme }) => theme.color.black['100']};
      color: ${({ theme }) => theme.color.white['100']};
    }

    .feature-title {
      font-size: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .feature-description {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 400;
      color: ${({ theme }) => theme.color.black['200']};
      line-height: 1.7;
    }
  }
`;
