'use client';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

type ProvidersProps = {
  children: React.ReactNode;
};

/**
 * Function representing the Providers component.
 *
 * @returns Providers component
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="quz-app-theme"
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}