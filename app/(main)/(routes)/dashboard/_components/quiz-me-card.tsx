'use client';

import { useRouter } from 'next/navigation';
import { BrainCircuit } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type QuizMeCardProps = {}

/**
 * Function representing the QuizMeCard component.
 *
 * @returns QuizMeCard component
 */
export default function QuizMeCard(props: QuizMeCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quiz');
  };

  return (
    <Card
      onClick={handleClick}
      className="hover:cursor-pointer hover:opacity-75"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Quiz Me!</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Challenge yourself with a quiz!
        </p>
      </CardContent>
    </Card>
  );
}