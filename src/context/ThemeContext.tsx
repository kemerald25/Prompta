'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'void' | 'aurora' | 'solaris';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('void');

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('prompta-theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('prompta-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('void');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
