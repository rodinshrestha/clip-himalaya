'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  flex: 1;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 400px;
  padding: 10px;

  .image-wrapper {
    width: 100%;
    height: 300px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 24px;
    }

    .rating-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      margin-top: 5px;

      .difficult-text {
        font-family: ${({ theme }) => theme.fonts.poppins};
      }
    }

    .trek-description {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 16px;
      line-height: 31px;
    }

    .trek-btn {
      margin-top: 20px;
    }
  }
`;
