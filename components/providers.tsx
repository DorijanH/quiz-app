'use client';

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
      {children}
    </SessionProvider>
  );
}