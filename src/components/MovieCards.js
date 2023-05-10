import React from 'react';
import { Box, Card, CardHeader, Img, Text } from '@chakra-ui/react';
import { formatDate, posterImagePath } from '../utility/util';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Skeletons from './Skeletons';
const MovieCards = ({ data }) => {
  if (!data) {
    return <Skeletons />;
  }
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'row'}
      flexWrap={'wrap'}
    >
      {data?.results &&
        data?.results.map(
          data =>
            data?.poster_path && (
              <Link
                key={data?.id}
                to={
                  window.location.pathname === '/movie/movie/'
                    ? `/movie/?q=${data?.id}`
                    : `/movie/?q=${data?.id}`
                }
              >
                <Card w={['200px']} m={5} shadow={'lg'}>
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
                      textAlign={'center'}
                      variant={'unstyled'}
                      mt={2}
                      p={2}
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
            )
        )}
    </Box>
  );
};

export default MovieCards;
