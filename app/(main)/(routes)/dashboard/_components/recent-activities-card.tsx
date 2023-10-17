import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type RecentActivitiesCardProps = {}

/**
 * Function representing the RecentActivitiesCard component.
 *
 * @returns RecentActivitiesCard component
 */
export default function RecentActivitiesCard(props: RecentActivitiesCardProps) {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recent Activities</CardTitle>

        <CardDescription>
          You have played a total of 7 games.
        </CardDescription>
      </CardHeader>

      <CardContent className="max-h-[580px] overflow-auto">
        Histories
      </CardContent>
    </Card>
  );
}