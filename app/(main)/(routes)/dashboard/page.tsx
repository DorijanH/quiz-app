import { Metadata } from 'next';

import RecentActivitiesCard from './_components/recent-activities-card';
import QuizMeCard from './_components/quiz-me-card';
import HotTopicsCard from './_components/hot-topics-card';
import HistoryCard from './_components/history-card';

export const metadata: Metadata = {
  title: 'Dashboard'
};

type DashboardPageProps = {};

/**
 * Function representing the DashboardPage component.
 *
 * @returns DashboardPage component
 */
export default function DashboardPage(props: DashboardPageProps) {
  return (
    <div className="mx-auto max-w-7xl p-8">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">
          Dashboard
        </h2>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivitiesCard />
      </div>
    </div>
  );
}