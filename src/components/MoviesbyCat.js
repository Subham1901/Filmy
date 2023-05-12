import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import useNowPlaying from '../hooks/useNowPlyaing';
import { MovieByGenere, movieGenere, params } from '../utility/util';
import '../style.css';
import axios from 'axios';
import MovieCards from './MovieCards';
const MoviesbyCat = () => {
  const [genre, setGenre] = useState('Action');
  const [genreId, setGenreId] = useState();
  const [movie, setMovies] = useState({});
  const data = useNowPlaying(movieGenere);
  const carouselRef = useRef(null);
  const buttonRef = useRef(null);
  const selectData = data => {
    setGenre(data?.name);
    setGenreId(data?.id);
  };

  const scrollLeft = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - width;
  };
  const scrollRight = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + width;
  };

  const getMovieData = async () => {
    try {
      const { data } = await axios.get(MovieByGenere, {
        params: {
          with_genres: genreId,
          api_key: params.api_key,
        },
      });
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieData();
  }, [genre, genreId]);

  return (
    <Container className="main-body-class">
      <Center>
        <Button
          _hover={{ backgroundColor: 'none' }}
          borderRadius={'full'}
          p={0}
          m={2}
          onClick={() => scrollLeft()}
          colorScheme={'blue'}
        >
          {'<<'}
        </Button>
        <Box className="carousel-container" ref={carouselRef}>
          {data?.genres &&
            data?.genres.map(data => (
              <Button
                _hover={{ backgroundColor: 'none' }}
                color={'white'}
                bgColor={genre === data?.name ? 'gray.700' : 'red.500'}
                onClick={() => selectData(data)}
                ref={buttonRef}
                id={data}
                className="button-list"
                m={2}
                fontWeight={'medium'}
                key={data?.id}
              >
                {data?.name}
              </Button>
            ))}
        </Box>
        <Button
          colorScheme={'blue'}
          onClick={() => scrollRight()}
          m={2}
          borderRadius={'full'}
          _hover={{ backgroundColor: 'none' }}
        >
          {'>>'}
        </Button>
      </Center>
      {movie && <MovieCards data={movie} />}
    </Container>
  );
};

export default MoviesbyCat;
