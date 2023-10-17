'use client';

import { signIn } from 'next-auth/react';

import { Button } from './ui/button'

type SignInButtonProps = {
  text: string;
}

/**
 * Function representing the SignInButton component.
 *
 * @returns SignInButton component
 */
export default function SignInButton({ text }: SignInButtonProps) {
  const handleSignIn = () => {
    signIn('google')
      .catch(console.error);
  };

  return (
    <Button onClick={handleSignIn}>
      {text}
    </Button>
  );
}