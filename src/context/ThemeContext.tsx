// src/context/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string | null>(null); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 

    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(systemPreference.matches ? 'dark' : 'light');

        const handleChange = (e: MediaQueryListEvent) => {
          setTheme(e.matches ? 'dark' : 'light');
        };
        systemPreference.addEventListener('change', handleChange);
        return () => systemPreference.removeEventListener('change', handleChange);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme) {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      if (isClient) localStorage.setItem('theme', newTheme);
    }
  };

  if (theme === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
