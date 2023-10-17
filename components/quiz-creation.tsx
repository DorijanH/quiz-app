'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { BookOpen, CopyCheck } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { quizCreationSchema } from '@/schemas/form/quiz';

import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

type QuizCreationProps = {};

type Input = z.infer<typeof quizCreationSchema>;

/**
 * Function representing the QuizCreation component.
 *
 * @returns QuizCreation component
 */
export default function QuizCreation(props: QuizCreationProps) {
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      amount: 3,
      topic: '',
      type: 'mcq'
    }
  });

  const handleSubmit = (input: Input) => {
    alert(JSON.stringify(input, null, 2));
  };

  form.watch();

  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>

          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>

                    <FormControl>
                      <Input placeholder="Enter a topic..." {...field} />
                    </FormControl>

                    <FormDescription>
                      Please provide a quiz topic
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Enter an amount..."
                        onChange={(e) => form.setValue('amount', parseInt(e.target.value))}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  onClick={() => form.setValue('type', 'mcq')}
                  variant={form.getValues('type') === 'mcq' ? 'default' : 'secondary'}
                  className="flex-1 rounded-r-none py-7"
                >
                  <CopyCheck className="mr-2 h-4 w-4" />
                  Multiple Choice
                </Button>

                <Separator orientation="vertical" />

                <Button
                  type="button"
                  onClick={() => form.setValue('type', 'open_ended')}
                  variant={form.getValues('type') === 'open_ended' ? 'default' : 'secondary'}
                  className="flex-1 rounded-l-none py-7"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Open Ended
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}