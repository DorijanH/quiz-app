'use client';

import { signOut } from 'next-auth/react';
import { User } from 'next-auth';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

import UserAvatar from './user-avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

type UserButtonProps = {
  user: User;
}

/**
 * Function representing the UserButton component.
 *
 * @returns UserButton component
 */
export default function UserButton({ user }: UserButtonProps) {
  const handleSignOut = () => {
    signOut().catch(console.error);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col gap-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}

            {user.email && <p className="w-[200px] truncate text-sm text-zinc-700">{user.email}</p>}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/">
            Meow
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer text-red-600"
        >
          Sign out
          <LogOut className="ml-2 h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}