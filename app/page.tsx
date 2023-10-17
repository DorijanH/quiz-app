import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/nextauth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SignInButton from '@/components/sign-in-button';

/**
 * Function representing the Home component.
 *
 * @returns Home component
 */
export default async function Home() {
  const session = await getAuthSession();

  // If the user is logged in
  if (session?.user) {
    redirect('/dashboard');
  };

  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to QuizApp!</CardTitle>

          <CardDescription>
            This is a quiz app that allows you to create and share quizzes with your friends.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignInButton text="Sign In with Google!" />
        </CardContent>
      </Card>
    </div>
  );
}
