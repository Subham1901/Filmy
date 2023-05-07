import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import CarouselHeader from './components/CarouselHeader';
import NowPlaying from './components/NowPlaying';

const App = () => {
  return (
    <Container className="main-body" bgColor={'filmy.bg'}>
      <Header />
      <CarouselHeader />
      <NowPlaying />
    </Container>
  );
};

export default App;
