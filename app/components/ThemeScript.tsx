'use client';

import Script from 'next/script';

export default function ThemeScript() {
  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = storedTheme || (prefersDark ? 'dark' : 'light');
              document.documentElement.classList.add(theme);
            } catch (e) {
              console.error('Error setting theme:', e);
            }
          })();
        `,
      }}
    />
  );
}