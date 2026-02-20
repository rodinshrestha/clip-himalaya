'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.our-story-image-banner-wrapper {
    padding-top: 120px;
    background-color: ${({ theme }) => theme.color.grey['100']};
    .first-row {
      display: flex;
      gap: 10px;
      height: 500px;

      .first-row-left-column-image-wrapper {
        flex: 1;
        width: 100%;
        position: relative;
        img {
          object-fit: cover;
        }
      }
      .first-row-center-column-image-wrapper {
        flex: 2;
        display: flex;
        gap: 10px;
        .first-row-center-image-1 {
          height: 300px;
          width: 100%;
          position: relative;
          display: flex;
          align-self: flex-end;
          img {
            object-fit: cover;
          }
        }
        .first-row-center-image-2 {
          width: 100%;
          position: relative;
          img {
            object-fit: cover;
          }
        }
        .first-row-center-image-3 {
          height: 300px;
          width: 100%;
          position: relative;
          display: flex;
          align-self: flex-end;
          img {
            object-fit: cover;
          }
        }
      }
      .first-row-right-column-image-wrapper {
        flex: 1;
        width: 100%;
        position: relative;
        img {
          object-fit: cover;
        }
      }
    }

    .second-row {
      display: flex;
      margin-top: 10px;
      gap: 10px;
      height: 300px;

      .second-row-left-column-image-wrapper {
        flex: 1;
        position: relative;

        img {
          object-fit: cover;
        }
      }
      .second-row-center-column-image-wrapper {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        .h1 {
          font-size: 120px;
          font-weight: 600;
        }
      }
      .second-row-right-column-image-wrapper {
        flex: 1;
        position: relative;
      }
    }
    .third-row {
      display: flex;
      height: 500px;
      margin-top: 10px;

      .third-row-left-column-image-wrapper {
        flex: 1;
      }

      .third-row-center-column-image-wrapper {
        flex: 2;
        display: flex;
        gap: 10px;
        height: 100%;

        .third-row-center-image-1 {
          position: relative;
          width: 100%;
          height: 300px;
          img {
            object-fit: cover;
          }
        }
        .third-row-center-image-2 {
          position: relative;
          width: 100%;
          height: 100%;
          img {
            object-fit: cover;
          }
        }
        .third-row-center-image-3 {
          position: relative;
          width: 100%;
          height: 300px;
          img {
            object-fit: cover;
          }
        }
      }
      .third-row-right-column-image-wrapper {
        flex: 1;
      }
    }
  }
`;
