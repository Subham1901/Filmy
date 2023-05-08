import {
  AspectRatio,
  Box,
  Code,
  Container,
  Heading,
  Image,
  Img,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import { backdropImagePath, formatDate } from '../utility/util';
import { posterImagePath } from '../utility/util';
import { AiFillStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import Credits from './Credits';
const MovieDetails = () => {
  const { movieid } = useParams();
  const searchData = useSearch(movieid);
  console.log(searchData);
  return (
    <Container mt={2} className="main-body">
      <Img
        height={['20rem', '40rem']}
        objectFit={'cover'}
        borderRadius={'md'}
        shadow={'lg'}
        className="carousel"
        src={backdropImagePath + searchData?.backdrop_path}
      />
      <Container mt={2} maxW={'container.lg'}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
        >
          <Img
            m={4}
            h={330}
            w={220}
            className="movie-details-img"
            borderRadius={'lg'}
            shadow={'dark-lg'}
            src={posterImagePath + searchData?.poster_path}
          />
          <Box m={4}>
            <Text fontWeight={'bold'} fontSize={'3xl'} color={'filmy.text'}>
              {searchData?.title}
            </Text>
            {searchData?.genres &&
              searchData?.genres.map(data => (
                <Text
                  mr={2}
                  borderRadius={'md'}
                  display={'inline'}
                  bgColor={'gray.700'}
                  letterSpacing={1}
                  p={1}
                  fontSize={'xs'}
                  color={'filmy.text'}
                  key={data?.id}
                >
                  {data?.name}
                </Text>
              ))}
            <Text textAlign={'left'} mt={2} fontSize={'md'} color={'gray.500'}>
              {searchData?.overview}
            </Text>

            <Box display={'flex'} alignItems={'center'}>
              {searchData?.release_date && (
                <Text
                  textAlign={'left'}
                  mt={2}
                  fontSize={'xs'}
                  color={'gray.200'}
                >
                  {formatDate(searchData?.release_date)}
                </Text>
              )}
              <BsDot style={{ marginTop: '7px' }} size={25} color="gray" />
              <Text
                textAlign={'left'}
                mt={2}
                fontSize={'xs'}
                color={'gray.200'}
              >
                {searchData?.runtime} minutes
              </Text>
              <BsDot style={{ marginTop: '7px' }} size={25} color="gray" />
              <Text
                textAlign={'left'}
                mt={2}
                fontSize={'xs'}
                color={'gray.200'}
              >
                {searchData?.vote_average}
              </Text>
              <AiFillStar
                color="green"
                style={{ marginTop: '6px', marginLeft: '2px' }}
              />
              <BsDot style={{ marginTop: '7px' }} size={25} color="gray" />
              <Text
                textAlign={'left'}
                mt={2}
                fontSize={'xs'}
                color={'gray.200'}
              >
                {searchData?.vote_count} votes
              </Text>
            </Box>
            <Box>
              <Text mt={2} className="tagline" color={'filmy.yellow'}>
                "{searchData?.tagline}"
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className="video" w={['sm', 'md', 'xl', '2xl', '5xl']}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            width="1000"
            height="715"
            src={`https://autoembed.to/trailer/movie/${searchData?.id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      {searchData?.credits && <Credits credits={searchData?.credits?.cast} />}
    </Container>
  );
};

export default MovieDetails;
