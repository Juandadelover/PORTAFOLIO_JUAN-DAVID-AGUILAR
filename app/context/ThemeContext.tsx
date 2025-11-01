'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isReady: boolean;
}

const defaultContext: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {},
  isReady: false,
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    try {
      // Intentar obtener el tema guardado
      const stored = localStorage.getItem('theme');
      let initialTheme: Theme;

      if (stored && (stored === 'light' || stored === 'dark')) {
        initialTheme = stored;
      } else {
        // Si no hay tema guardado, usar la preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        initialTheme = prefersDark ? 'dark' : 'light';
        localStorage.setItem('theme', initialTheme);
      }

      // Aplicar el tema
      setTheme(initialTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(initialTheme);
      
      // Escuchar cambios en las preferencias del sistema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          setTheme(newTheme);
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(newTheme);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      setIsReady(true);

      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {
      console.error('Error initializing theme:', e);
      setIsReady(true);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      console.error('Error toggling theme:', e);
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isReady }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}