import React from 'react';
import CarouselHeader from './CarouselHeader';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import Popular from './Popular';

const HomeContainer = () => {
  return (
    <>
      <CarouselHeader />
      <NowPlaying />
      <TopRated />
      <Popular />
    </>
  );
};

export default HomeContainer;
