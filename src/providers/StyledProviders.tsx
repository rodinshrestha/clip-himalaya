'use client';

import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme';
import { GlobalStyle } from '@/theme/global-style';

type Props = {
  children: React.ReactNode;
};

export default function StyledProviders({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
