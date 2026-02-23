'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  border: 2px solid ${({ theme }) => theme.color.grey['100']};
  padding-bottom: 20px;

  .body1 {
    font-size: 21px;
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 4px dotted ${({ theme }) => theme.color.grey['100']};
    text-align: center;
    margin-bottom: 10px;
  }

  ul {
    li {
      font-size: 16px;
      margin-bottom: 5px;
      font-family: ${({ theme }) => theme.fonts.poppins};

      a {
        margin-left: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
