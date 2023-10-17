import Link from 'next/link';

import { getAuthSession } from '@/lib/nextauth';

import UserButton from './user-button';
import SignInButton from './sign-in-button';
import ModeToggle from './mode-toggle';

/**
 * Function representing the Navbar component.
 *
 * @returns Navbar component
 */
export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-zinc-300 bg-white py-2 dark:bg-gray-950">
      <div className="mx-auto flex min-h-full max-w-7xl items-center justify-between gap-2 px-8">
        {/* Logo */}
        <Link href="/">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-0.5 dark:border-white">
            QuizApp
          </p>
        </Link>

        <div className="flex items-center gap-x-4">
          <ModeToggle />

          <div className="flex items-center">
            {session?.user ? (
              <UserButton user={session.user} />
            ) : (
              <SignInButton text="Sign In" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}