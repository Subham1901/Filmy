import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Img,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import useNowPlaying from '../hooks/useNowPlyaing';
import { formatDate, posterImagePath, popularAPI } from '../utility/util';
import { Link } from 'react-router-dom';
import MovieCards from './MovieCards';
import Skeletons from './Skeletons';

const Popular = () => {
  const data = useNowPlaying(popularAPI);
  if (!data?.results) {
    return <Skeletons />;
  }
  return (
    <Container className="main-body">
      <Heading
        textTransform={'uppercase'}
        letterSpacing={'2px'}
        fontSize={'3xl'}
        textAlign={'center'}
        fontWeight={'md'}
        color={'filmy.heading'}
      >
        Popular Movies
      </Heading>
      <MovieCards data={data} />
    </Container>
  );
};

export default Popular;
