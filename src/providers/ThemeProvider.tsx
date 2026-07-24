import { createContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextProps {
  theme: 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useState<'dark'>('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};
