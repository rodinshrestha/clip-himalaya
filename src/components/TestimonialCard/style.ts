'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 32px 28px;
  background-color: ${({ theme }) => theme.color.grey['100']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  width: 340px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }

  .quote-section {
    .quote-mark {
      font-size: 40px;
      line-height: 1;
      color: ${({ theme }) => theme.color.black['200']};
      opacity: 0.25;
      font-family: Georgia, serif;
      margin-bottom: 16px;
      letter-spacing: -4px;
    }

    .review-text {
      font-size: 15px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      line-height: 1.75;
      color: ${({ theme }) => theme.color.black['200']};
      font-weight: 400;
    }
  }

  .author-section {
    margin-top: 28px;
    border-top: none;

    .author-name {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.black['100']};
    }

    .author-trek {
      font-size: 13px;
      font-family: ${({ theme }) => theme.fonts.poppins};
      color: ${({ theme }) => theme.color.black['200']};
      font-weight: 400;
      margin-top: 2px;
    }
  }
`;
