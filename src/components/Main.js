import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import './global.css';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const [movie, setmovie] = useState('');
  const handleSearch = event => {
    event.preventDefault();
    navigate(`/${movie}`);
  };
  return (
    <Box
      p={7}
      className="container"
      display={'flex'}
      justifyContent="center"
      alignItems={'center'}
      flexDirection={['row', 'column']}
    >
      <Box p={10} border={'2px solid white'}>
        <form onSubmit={handleSearch}>
          <Input
            color={'black'}
            fontWeight="bold"
            bg="whiteAlpha.900"
            opacity={'0.6'}
            placeholder="Search Movie"
            required
            name="movie"
            onChange={e => setmovie(e.target.value)}
          />
          <Button
            opacity={0.9}
            w={'100%'}
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Main;
