'use client';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }

  &:hover .image-wrapper img {
    transform: scale(1.05);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
    border-radius: 8px;

    img {
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.4s ease;
    }
  }

  .card-information-list {
    padding-inline-start: 20px;
    flex: 1;
    margin: 12px 0;

    li {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 400;
      font-size: 15px;
      line-height: 1.6;
    }
  }

  .btn {
    margin-top: auto;
  }
`;
