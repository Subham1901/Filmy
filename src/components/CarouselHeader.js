import { Box, Container, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import useCarousel from '../hooks/useCarousel';
import { backdropImagePath, imageURL } from '../utility/util';
const CarouselHeader = () => {
  const images = useCarousel();

  return (
    <Carousel autoPlay={false} showStatus={false}>
      {images.map(data => (
        <>
          <Img
            height={['40rem', '45rem']}
            objectFit={'cover'}
            borderRadius={'md'}
            shadow={'dark-lg'}
            className="carousel"
            key={data?.id}
            src={backdropImagePath + data?.image}
          />
        </>
      ))}
      {/* <Text color={'filmy.heading'}>Trending</Text> */}
    </Carousel>
  );
};

export default CarouselHeader;
