'use client';

import D3WordCloud from 'react-d3-cloud';
import { useTheme } from 'next-themes';

type CustomWordCloudProps = {};

const data = [
  {
    text: 'Hey',
    value: 3
  },
  {
    text: 'Hi',
    value: 5
  },
  {
    text: 'Computer',
    value: 10
  },
  {
    text: 'NextJS',
    value: 8
  },
  {
    text: 'Live',
    value: 7
  }
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

/**
 * Function representing the CustomWordCloud component.
 *
 * @returns CustomWordCloud component
 */
export default function CustomWordCloud(props: CustomWordCloudProps) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        font="Inter"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={resolvedTheme === 'dark' ? 'white' : 'black'}
      />
    </>
  );
}