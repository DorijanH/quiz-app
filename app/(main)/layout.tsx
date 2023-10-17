import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/nextauth';

type MainLayoutProps = {
  children: React.ReactNode;
};

/**
 * Function representing the MainLayout component.
 *
 * @returns MainLayout component
 */
export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await getAuthSession();

  // Protect the main routes
  if (!session?.user) {
    redirect('/');
  }

  return (
    <>
      {children}
    </>
  );
}