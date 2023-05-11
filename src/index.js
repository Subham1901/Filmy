import React from 'react';
// requires a loader
import 'react-multi-carousel/lib/styles.css';
import 'react-alice-carousel/lib/alice-carousel.css';
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
