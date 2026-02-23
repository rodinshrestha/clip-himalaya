'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid ${({ theme }) => theme.color.grey['100']};
  padding-bottom: 20px;

  .title-wrapper {
    font-size: 21px;
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 4px dotted ${({ theme }) => theme.color.grey['100']};
    text-align: center;
    margin-bottom: 10px;
  }

  .body2 {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.poppins};
    text-align: center;
  }
`;
