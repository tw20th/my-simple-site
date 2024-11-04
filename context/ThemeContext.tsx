import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
} | null;

const ThemeContext = createContext<ThemeContextType>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
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
