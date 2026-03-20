'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 40px 0 60px;
  background-color: ${({ theme }) => theme.color.grey['100']};

  .our-team-faq-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .faq-label {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.color.black['200']};
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.poppins};
    }

    .faq-title {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      color: ${({ theme }) => theme.color.black['100']};
      margin-top: -20px;
    }

    .faq-wrapper {
      max-width: 800px;
      margin: 0 auto;
      width: 100%;
    }
  }
`;
