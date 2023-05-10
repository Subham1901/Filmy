import React from 'react';
import { movieDetailsAPI, params } from '../utility/util';
import useNowPlaying from '../hooks/useNowPlyaing';
import { Container, Heading } from '@chakra-ui/react';
import MovieCards from './MovieCards';
const Recommendation = ({ movieid, type }) => {
  const url =
    `https://api.themoviedb.org/3/movie/${movieid}/${type}?language=en-US&page=1&api_key=` +
    params.api_key;
  const recomendedData = useNowPlaying(url);

  return (
    <Container className="main-body">
      {recomendedData?.results?.length > 0 && (
        <>
          <Heading
            textTransform={'uppercase'}
            letterSpacing={'2px'}
            textAlign={'center'}
            margin={'auto'}
            fontSize={'3xl'}
            fontWeight={'md'}
            color={'filmy.heading'}
          >
            {type} movies
          </Heading>
          <MovieCards data={recomendedData} />
        </>
      )}
    </Container>
  );
};

export default Recommendation;
