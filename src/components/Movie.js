import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Stack,
  Box,
  useToast,
  Progress,
} from '@chakra-ui/react';

import axios from 'axios';
function Movie() {
  const { id } = useParams();
  const toast = useToast();
  const [movieData, setmovieData] = useState({});
  const [loading, setloading] = useState(false);
  const getMovieDetails = async () => {
    setloading(true);
    await axios
      .get(
        `https://www.omdbapi.com/?t=${encodeURIComponent(
          id
        )}&plot=full&apikey=6cac098a`
      )
      .then(
        success => {
          setmovieData(success.data);
          setloading(false);
        },
        err => {
          setloading(false);
          return toast({
            description: err.message,
            status: 'error',
          });
        }
      );
  };
  useEffect(() => {
    getMovieDetails();
  }, [id]);
  if (loading) {
    return <Progress size="lg" isIndeterminate />;
  }

  return (
    <Box
      className="movie-container"
      display={'flex'}
      justifyContent="center"
      alignItems={'center'}
      mt={['0', '150']}
      p={[2, 50]}
    >
      {movieData.Title ? (
        <Card
          background={'white'}
          opacity={0.9}
          color={'black'}
          p={[2, 30]}
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
        >
          <Image src={movieData.Poster} alt={movieData.Title} />
          <Stack>
            <CardBody>
              <Heading size="lg">{movieData.Title}</Heading>
              <Text>{movieData.Genre}</Text>
              <Text>
                {movieData.Country}, Language : {movieData.Language}
              </Text>
              <Text py="2" fontWeight={'medium'}>
                {movieData.Plot}
              </Text>

              <Text fontWeight={'bold'} color="yellow.900">
                IMDb Rating : {movieData.imdbRating}
              </Text>
              <Text>Relased on {movieData.Released}</Text>
              <Text>Duration : {movieData.Runtime}</Text>
            </CardBody>
            <CardFooter display={'flex'} flexDirection="column">
              <Text>
                <Text fontWeight={'bold'}>Actors : </Text> {movieData.Actors}
              </Text>
              <Text>
                <Text fontWeight={'bold'}>Director : </Text>{' '}
                {movieData.Director}
              </Text>
              <Text>
                <Text fontWeight={'bold'}>Writers : </Text> {movieData.Writer}
              </Text>
            </CardFooter>
          </Stack>
        </Card>
      ) : (
        <>
          <Heading mt={['50%', '20%']}>Movie Not Found!!</Heading>
        </>
      )}
    </Box>
  );
}

export default Movie;
