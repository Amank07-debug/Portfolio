import { type ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ScrollProvider } from './ScrollProvider';

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>
    <ScrollProvider>{children}</ScrollProvider>
  </ThemeProvider>
);
