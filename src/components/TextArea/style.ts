'use client';

import styled from 'styled-components';

import { breakPoints } from '@/theme/break-points';

export const TextAreaContainer = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  min-height: 160px;

  &.error {
    textarea {
      border: 1px solid ${({ theme }) => theme.color.red['100']} !important;
    }
  }
  .red {
    color: red;
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

    textarea {
      box-sizing: border-box;
      border-radius: 8px;
      padding: 10px 12px;
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
  }
  .input-error {
    /* margin-top: 2px; */
  }
`;
