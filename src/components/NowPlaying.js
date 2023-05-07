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
import { AiOutlineStar } from 'react-icons/ai';
import useNowPlaying from '../hooks/useNowPlyaing';
import { formatDate, posterImagePath } from '../utility/util';

const NowPlaying = () => {
  const data = useNowPlaying();

  return (
    <Container className="main-body">
      <Heading fontSize={'2xl'} fontWeight={'md'} color={'filmy.heading'}>
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
            <Card m={5} shadow={'lg'} key={data?.id}>
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
                    <AiOutlineStar color="#FDDA0D" />
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
          ))}
      </Box>
    </Container>
  );
};

export default NowPlaying;
