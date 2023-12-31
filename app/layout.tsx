import { Inter } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css'
import Providers from '@/components/providers';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'QuizApp',
    template: '%s | QuizApp'
  },
  description: 'Quiz app that allows you to create and share quizzes with your friends.'
};

type RootLayoutProps = {
  children: React.ReactNode
};

/**
 * Function representing the RootLayout component.
 *
 * @returns RootLayout component
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
