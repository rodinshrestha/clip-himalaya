'use client';

import styled, { keyframes, css } from 'styled-components';

// --- Animations ---

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- Styled Components ---

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Item = styled.div<{ $isOpen: boolean }>`
  border: 1px solid ${({ $isOpen }) => ($isOpen ? '#2563eb' : '#e2e8f0')};
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s ease;
  background: #fff;
`;

export const Header = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  background: ${({ $isOpen }) => ($isOpen ? '#eff6ff' : '#fff')};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: #f8faff;
  }
`;

export const DotTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Dot = styled.div<{ $isOpen: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.color.black['100'] : '#94a3b8'};
  border: 1px solid
    ${({ $isOpen, theme }) => ($isOpen ? theme.color.black['200'] : '#cbd5e1')};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
`;

export const Title = styled.span<{ $isOpen: boolean }>`
  font-size: 21px;
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.color.black['100'] : theme.color.black['200']};
  transition: color 0.2s ease;
  height: 22px;
  font-family: ${({ theme }) => theme.fonts.magra};
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $isOpen }) => ($isOpen ? '#dbeafe' : '#f1f5f9')};
  transition:
    transform 0.25s ease,
    background 0.2s ease;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});

  svg {
    width: 14px;
    height: 14px;
    stroke: ${({ $isOpen }) => ($isOpen ? '#2563eb' : '#64748b')};
    transition: stroke 0.2s ease;
  }
`;

export const Body = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  padding: 10px 16px; /* left padding aligns with title (dot width + gap) */
  animation: ${({ $isOpen }) =>
    $isOpen
      ? css`
          ${slideDown} 0.2s ease
        `
      : 'none'};

  .trekking-info-wrapper {
    padding-left: 30px;
    &:last-child {
      .connector {
        display: none;
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: #475569;
  margin: 10px 0;
`;
