import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { posterImagePath } from '../utility/util';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const Credits = ({ credits }) => {
  const buttonRef = useRef();
  const scroll = Offset => {
    buttonRef.current.scrollLeft += Offset;
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
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button
          m={'1rem !important'}
          borderRadius={'full'}
          bgColor={'gray.700'}
          _hover={{ backgroundColor: 'none' }}
          color={'filmy.text'}
          p={0}
          textAlign={'center'}
          onClick={() => scroll(-200)}
        >
          <IoIosArrowBack size={20} />
        </Button>
        <HStack
          className="cast"
          ref={buttonRef}
          flexWrap={'nowrap'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
          mt={5}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {credits.map(data => (
            <Box
              m={4}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Avatar
                size={['lg', 'xl', '2xl']}
                src={posterImagePath + data?.profile_path}
              />
              <Text color={'filmy.text'}>{data?.original_name}</Text>
              <Text color={'gray.400'}>{data?.character}</Text>
            </Box>
          ))}
        </HStack>
        <Button
          m={'1rem !important'}
          borderRadius={'full'}
          bgColor={'gray.700'}
          _hover={{ backgroundColor: 'none' }}
          color={'filmy.text'}
          p={0}
          textAlign={'center'}
          onClick={() => scroll(200)}
        >
          <IoIosArrowForward size={20} />
        </Button>
      </Box>
    </>
  );
};

export default Credits;
