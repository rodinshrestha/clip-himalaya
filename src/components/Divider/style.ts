'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.black['100']};
`;
