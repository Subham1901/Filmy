import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import useNowPlaying from '../hooks/useNowPlyaing';
import { topRatedAPI } from '../utility/util';
import MovieCards from './MovieCards';
import Skeletons from './Skeletons';

const TopRated = () => {
  const data = useNowPlaying(topRatedAPI);
  if (!data?.results) {
    return <Skeletons />;
  }
  return (
    <Container className="main-body">
      <Heading
        textTransform={'uppercase'}
        letterSpacing={'2px'}
        textAlign={'center'}
        fontSize={'3xl'}
        fontWeight={'md'}
        color={'filmy.heading'}
      >
        Top Rated
      </Heading>
      <MovieCards data={data} />
    </Container>
  );
};

export default TopRated;
