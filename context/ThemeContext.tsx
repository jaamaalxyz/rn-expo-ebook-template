
import React, { createContext, useContext } from 'react';
import { useTheme } from '@/hooks/useTheme';

const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void; }>({ theme: 'dark', setTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
