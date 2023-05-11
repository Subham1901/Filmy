import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
import useCarousel from '../hooks/useCarousel';
import { backdropImagePath } from '../utility/util';
import AliceCarousel from 'react-alice-carousel';
const CarouselHeader = () => {
  const images = useCarousel();
  let imageList = [];
  if (images) {
    imageList = images.map(data => {
      return (
        <Box className="carousel-box">
          <Img
            height={['40rem', '45rem']}
            objectFit={'cover'}
            w={'full'}
            borderRadius={'md'}
            shadow={'dark-lg'}
            className="carousel"
            key={data?.id}
            src={backdropImagePath + data?.image}
          />
          <Text
            w={'sm'}
            borderRadius={'md'}
            p={1}
            fontSize={'lg'}
            className="text-carousel"
            textAlign={'center'}
            color={'white'}
          >
            {data?.title}
          </Text>
        </Box>
      );
    });
  }

  return (
    <>
      {imageList && (
        <AliceCarousel
          mouseTracking
          infinite={true}
          items={imageList}
          animationDuration={1800}
          autoPlay
          autoPlayInterval={900}
          disableButtonsControls={false}
        />
      )}
    </>
  );
};

export default CarouselHeader;
