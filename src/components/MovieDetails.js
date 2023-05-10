import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Code,
  Container,
  Heading,
  Image,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import { backdropImagePath, formatDate } from '../utility/util';
import { posterImagePath } from '../utility/util';
import { AiFillStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import Credits from './Credits';
import Recommendation from './Recommendation';
import Skeletons from './Skeletons';
import useNowPlaying from '../hooks/useNowPlyaing';

const MovieDetails = () => {
  const [read, setReadMore] = useState(false);

  const [movieParams] = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchData = useSearch(movieParams.get('q'));
  const url = `https://api.themoviedb.org/3/movie/${movieParams.get(
    'q'
  )}/reviews?language=en-US&page=1&api_key=7f3b56995772caf3c4ab77353b47e57b`;
  const reviews = useNowPlaying(url);

  if (!searchData?.id) {
    return <Skeletons />;
  }
  return (
    <Container position={'relative'} mt={2} className="main-body-details">
      {searchData?.backdrop_path && (
        <Img
          height={['20rem', '35rem']}
          objectFit={'cover'}
          borderRadius={'md'}
          shadow={'lg'}
          className="carousel"
          src={backdropImagePath + searchData?.backdrop_path}
        />
      )}

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
            <Button
              _hover={{ backgroundColor: 'none' }}
              mt={2}
              p={2}
              fontWeight={'light'}
              variant={'unstyled'}
              color={'white'}
              onClick={onOpen}
              backgroundColor={'gray.700'}
            >
              Reviews
            </Button>
            {searchData?.tagline && (
              <Box>
                <Text mt={2} className="tagline" color={'filmy.yellow'}>
                  "{searchData?.tagline}"
                </Text>
              </Box>
            )}
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
      <Recommendation type="recommendations" movieid={movieParams.get('q')} />
      <Recommendation type="similar" movieid={movieParams.get('q')} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={'semibold'}>Reviews</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {reviews?.results?.length > 0 ? (
              reviews?.results.map(data => (
                <Box shadow={'md'} borderRadius={'md'} key={data?.id}>
                  <Box
                    m={2}
                    p={1}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'flex-start'}
                    alignItems={'flex-start'}
                  >
                    <Avatar
                      name={data?.author_details?.name || data?.author}
                      src={posterImagePath + data?.author_details?.avatar_path}
                    />
                    <Text
                      letterSpacing={1}
                      fontWeight={'semibold'}
                      fontSize={'sm'}
                    >
                      {data?.author_details?.name || data?.author}
                    </Text>
                    {data?.author_details?.rating && (
                      <Code
                        p={0.5}
                        display={'flex'}
                        alignItems={'center'}
                        bgColor={'black'}
                        borderRadius={'md'}
                        fontSize={'xs'}
                        color={'white'}
                        w={10}
                      >
                        <AiFillStar size={13} style={{ marginRight: '3px' }} />
                        {data?.author_details?.rating}
                      </Code>
                    )}
                    <Text mt={2} color={'gray.500'} fontSize={'sm'}>
                      {data?.content.length > 300 ? (
                        <Text>
                          {read
                            ? data?.content
                            : data?.content.substring(0, 300)}

                          <Link
                            onClick={e => setReadMore(data => !data)}
                            ml={2}
                            color={'black'}
                            fontWeight={'bold'}
                          >
                            {!read ? 'Read More' : 'Read Less'}
                          </Link>
                        </Text>
                      ) : (
                        data?.content
                      )}
                    </Text>
                  </Box>
                </Box>
              ))
            ) : (
              <Text>No reviews yet!</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default MovieDetails;
