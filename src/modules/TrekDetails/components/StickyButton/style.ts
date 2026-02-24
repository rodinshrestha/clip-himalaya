'use client';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100;
  border: 1px solid ${({ theme }) => theme.color.black['100']};
  padding: 15px 10px;
  writing-mode: vertical-rl; /* top to bottom */
  text-orientation: mixed;
  letter-spacing: 1px;
  cursor: pointer;
  transform: translateX(100px);
  transition: transform 0.3s ease;

  &.active {
    transform: translateX(0);
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.black['100']};
    color: ${({ theme }) => theme.color.grey['100']};
  }
`;
