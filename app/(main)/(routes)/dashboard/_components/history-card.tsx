'use client';

import { useRouter } from 'next/navigation';
import { History } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type HistoryCardProps = {}

/**
 * Function representing the HistoryCard component.
 *
 * @returns HistoryCard component
 */
export default function HistoryCard(props: HistoryCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/history');
  };

  return (
    <Card
      onClick={handleClick}
      className="hover:cursor-pointer hover:opacity-75"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">History</CardTitle>
        <History size={28} strokeWidth={2.5} />
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          View your past quiz attempts
        </p>
      </CardContent>
    </Card>
  );
}