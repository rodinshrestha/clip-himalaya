'use client';

import styled from 'styled-components';

import { breakPoints } from '@/theme/break-points';

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  &.error {
    input {
      border: 1px solid ${({ theme }) => theme.color.red['100']} !important;
    }
  }

  &.flex-2 {
    flex: 2;
  }

  @media (max-width: ${breakPoints.mobile}) {
    flex: 0 0 100% !important;
  }

  .input-label {
    font-size: 21px;
    color: ${({ theme }) => theme.color.black['100']};
    font-weight: 500;
    .label-required-indicator {
      cursor: pointer;
      margin-left: 3px;
    }
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    .spinner-loader-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 48%;
      .spinner-loader {
        width: 15px;
        height: 15px;
        border-width: 2px;
        position: absolute;
      }
    }
    input {
      box-sizing: border-box;
      border-radius: 8px;
      background-color: transparent;
      padding: 15px 12px;
      font-size: 14px;
      border: 1px solid ${({ theme }) => theme.color.black['200']};
      width: 100%;
      color: ${({ theme }) => theme.color.black['100']};

      &:focus {
        border: 1px solid ${({ theme }) => theme.color.black['100']};
        outline: ${({ theme }) => theme.color.black['100']};
      }
      &:disabled {
        cursor: not-allowed;
        background-color: #f3f3f5 !important;
        opacity: 0.5;
      }
    }
    .password-toggle-icon {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
`;
