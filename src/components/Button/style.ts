'use client';
import styled, { DefaultTheme, css } from 'styled-components';

const defaultBtnStyle = (theme: DefaultTheme) => css`
  text-decoration: none;
  outline: none;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  color: ${theme.color.black['100']};
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 500;

  &.contained {
    background-color: ${theme.color.grey['100']};
    border: 1px solid ${theme.color.grey['100']};
    &:hover {
      background-color: ${theme.color.grey['100']};
      border: 1px solid ${theme.color.grey['100']};
    }
  }
  &.outline {
    background-color: transparent;
    border: 1px solid ${theme.color.black['200']};
    &:hover {
      background-color: ${theme.color.black['100']};
      color: ${({ theme }) => theme.color.white['100']};
    }
  }
  &.black {
    background-color: ${theme.color.black['100']};
    border: 1px solid ${theme.color.black['100']};
    color: ${({ theme }) => theme.color.grey['100']};
  }

  &.sm {
    min-width: 100px;
  }

  &.md {
    min-width: 300px;
  }
  &.full-width {
    width: 100%;
  }
`;

export const StyledLink = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  ${({ theme }) => css`
    ${defaultBtnStyle(theme)}
  `}
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    ${defaultBtnStyle(theme)}
  `}

  &.btn-loader {
    min-height: 33px;
    position: relative;
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.grey['100']};
    border: 1px solid ${({ theme }) => theme.color.grey['100']};

    .loader {
      border: 2px solid #fff; /* circle border color */
      border-top: 2px solid transparent; /* top is transparent to create spinning effect */
      border-radius: 50%;
      width: 16px; /* circle size */
      height: 16px;
      animation: spin 1s linear infinite;
      position: absolute;
    }
  }

  &:disabled {
    cursor: not-allowed !important;
    background-color: ${({ theme }) => theme.color.grey['100']} !important;
    border: 1px solid ${({ theme }) => theme.color.grey['100']} !important;
    color: ${({ theme }) => theme.color.black['100']} !important;

    &:hover {
      background-color: ${({ theme }) => theme.color.grey['100']} !important;
      border: 1px solid ${({ theme }) => theme.color.grey['100']} !important;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
