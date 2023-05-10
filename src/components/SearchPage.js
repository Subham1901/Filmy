import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { params } from '../utility/util';
import useNowPlaying from '../hooks/useNowPlyaing';
import MovieCards from './MovieCards';
import Skeletons from './Skeletons';
import Header from './Header';

const SearchPage = () => {
  const [searhQuery] = useSearchParams();
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURI(
    searhQuery.get('q')
  )}&include_adult=false&language=en-US&page=1&api_key=${params.api_key}`;

  const data = useNowPlaying(url);

  if (!data?.results) {
    return <Skeletons />;
  }
  return (
    <Container className="main-body" bgColor={'filmy.bg'}>
      <Header source="searchpage" />
      <MovieCards data={data} />
    </Container>
  );
};

export default SearchPage;
