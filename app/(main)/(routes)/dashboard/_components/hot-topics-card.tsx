import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CustomWordCloud from '@/components/custom-word-cloud';

type HotTopicsCardProps = {}

/**
 * Function representing the HotTopicsCard component.
 *
 * @returns HotTopicsCard component
 */
export default function HotTopicsCard(props: HotTopicsCardProps) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>

        <CardDescription>
          Click on a topic to start a quiz on it!
        </CardDescription>
      </CardHeader>

      <CardContent className="pl-2">
        <CustomWordCloud />
      </CardContent>
    </Card>
  );
};