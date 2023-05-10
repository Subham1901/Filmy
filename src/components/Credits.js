import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import React, { useRef } from 'react';
import { posterImagePath } from '../utility/util';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const Credits = ({ credits }) => {
  const buttonRef = useRef();
  const scroll = Offset => {
    buttonRef.current.scrollLeft += Offset;
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <>
      <Heading
        mt={5}
        textTransform={'uppercase'}
        letterSpacing={'2px'}
        fontSize={'3xl'}
        fontWeight={'md'}
        color={'filmy.heading'}
        textAlign={'center'}
      >
        top cast
      </Heading>

      <Carousel responsive={responsive}>
        {credits.map(data => (
          <Box
            key={data?.id}
            m={4}
            p={2}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Avatar
              name={data?.original_name}
              size={['lg', 'xl', '2xl']}
              src={posterImagePath + data?.profile_path}
            />
            <Text
              m={1}
              textAlign={'center'}
              fontSize={['xs', 'sm']}
              color={'filmy.text'}
            >
              {data?.original_name}
            </Text>
            <Text
              m={1}
              textAlign={'center'}
              fontSize={['xs', 'sm']}
              color={'gray.400'}
            >
              {data?.character}
            </Text>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default Credits;
