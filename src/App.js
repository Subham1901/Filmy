import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import CarouselHeader from './components/CarouselHeader';
import NowPlaying from './components/NowPlaying';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import HomeContainer from './components/MainContainer';
import SearchPage from './components/SearchPage';
import MoviesbyCat from './components/MoviesbyCat';

const AppLayout = () => {
  return (
    <Container className="main-body" bgColor={'filmy.bg'}>
      <Header />
      <Outlet />
    </Container>
  );
};

export const createRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomeContainer />,
      },
      {
        path: '/movie',
        element: <MovieDetails />,
      },
      {
        path: '/movie/search',
        element: <SearchPage />,
      },
      {
        path: '/discover',
        element: <MoviesbyCat />,
      },
    ],
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);

const App = () => {
  return <AppLayout />;
};

export default App;
