import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

import useNowPlaying from '../hooks/useNowPlyaing';
import { nowPlayingAPI } from '../utility/util';
import MovieCards from './MovieCards';
import Skeletons from './Skeletons';

const NowPlaying = () => {
  const data = useNowPlaying(nowPlayingAPI);

  if (!data?.results) {
    return <Skeletons />;
  }
  return (
    <Container className="main-body">
      <Heading
        textTransform={'uppercase'}
        letterSpacing={'2px'}
        fontSize={'3xl'}
        fontWeight={'md'}
        color={'filmy.heading'}
        textAlign={'center'}
      >
        Now Playing
      </Heading>
      {data && <MovieCards data={data} />}
    </Container>
  );
};

export default NowPlaying;
