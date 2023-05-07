import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './utility/util';
const root = createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
