import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectedFilter from '../utils/selection-filter';

export default function Browse() {
  // we need the series and films
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectedFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
