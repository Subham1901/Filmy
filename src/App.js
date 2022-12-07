import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Input,
  Progress,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Movie from './components/Movie';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
