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
import { formatDate, nowPlayingAPI, posterImagePath } from '../utility/util';
import { Link } from 'react-router-dom';

const NowPlaying = () => {
  const data = useNowPlaying(nowPlayingAPI);

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
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'row'}
        flexWrap={'wrap'}
      >
        {data?.results &&
          data?.results.map(data => (
            <Link key={data?.id} to={`movie/${data?.id}`}>
              <Card m={5} shadow={'lg'}>
                <CardHeader>
                  <Box borderRadius={'md'} className="parent-img">
                    <Img
                      transition={'all 0.3s'}
                      _hover={{ transform: 'scale(1.1)' }}
                      className="card-image"
                      borderRadius={'md'}
                      src={posterImagePath + data?.poster_path}
                    />
                  </Box>
                  <Text
                    w={200}
                    variant={'unstyled'}
                    textAlign={'center'}
                    mt={2}
                    color={'filmy.text'}
                  >
                    {data?.title}
                  </Text>

                  <Box
                    mt={2}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      <Text mr={1} fontWeight={'bold'} color={'filmy.text'}>
                        {data?.vote_average}
                      </Text>
                      <AiFillStar color="#FDDA0D" />
                    </Box>
                    <Box>
                      <Text
                        fontWeight={'light'}
                        fontSize={'sm'}
                        color={'filmy.text'}
                      >
                        {formatDate(data?.release_date)}
                      </Text>
                    </Box>
                  </Box>
                </CardHeader>
              </Card>
            </Link>
          ))}
      </Box>
    </Container>
  );
};

export default NowPlaying;
