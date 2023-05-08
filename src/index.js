import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { createRoot } from 'react-dom/client';
import App, { createRoutes } from './App';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './utility/util';
import { RouterProvider } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={createRoutes} />
  </ChakraProvider>
);
