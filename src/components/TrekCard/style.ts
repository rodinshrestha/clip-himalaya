'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.white['100']};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  &:hover .image-wrapper img {
    transform: scale(1.05);
  }

  .image-wrapper {
    width: 100%;
    aspect-ratio: 16 / 10;
    position: relative;
    overflow: hidden;

    img {
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex: 1;

    .title {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .rating-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 8px 0 12px;

      .difficult-text {
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 13px;
        color: ${({ theme }) => theme.color.black['200']};
      }
    }

    .trek-description {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 14px;
      line-height: 1.7;
      color: ${({ theme }) => theme.color.black['200']};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .trek-btn {
      margin-top: 16px;
    }
  }
`;
