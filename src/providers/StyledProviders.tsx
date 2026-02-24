'use client';

import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme';
import { GlobalStyle } from '@/theme/global-style';

import HeaderProviders from './HeaderProviders';

type Props = {
  children: React.ReactNode;
};

export default function StyledProviders({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderProviders>
        <GlobalStyle />
        {children}
      </HeaderProviders>
    </ThemeProvider>
  );
}
