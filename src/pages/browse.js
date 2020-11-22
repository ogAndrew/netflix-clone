import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  // we need the series and films
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(useContent('series'));
  // we need slides
  // pass it to browse container

  return (
    <div>
      <h2>Hello from Browse</h2>
    </div>
  );
}
