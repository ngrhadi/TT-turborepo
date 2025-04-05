'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ThemeRegistry({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
