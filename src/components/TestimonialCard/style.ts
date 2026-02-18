'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  flex: 1;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.color.grey['100']};
  border-radius: 8px;
  .rating-content {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }

  .rating-section {
    margin-top: 100px;
    display: flex;

    .image-wrapper {
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    .rating-information-content {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .p {
        font-size: 18px;
      }
    }
  }
`;
