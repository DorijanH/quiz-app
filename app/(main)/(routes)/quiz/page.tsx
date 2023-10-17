import { Metadata } from 'next';

import QuizCreation from '@/components/quiz-creation';

export const metadata: Metadata = {
  title: 'Quiz'
};

type QuizPageProps = {};

/**
 * Function representing the QuizPage component.
 *
 * @returns QuizPage component
 */
export default function QuizPage(props: QuizPageProps) {
  return (
    <QuizCreation />
  );
}