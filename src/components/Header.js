import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Container,
  Button,
  Input,
  Box,
  Text,
} from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
import { params } from '../utility/util';
import useNowPlaying from '../hooks/useNowPlyaing';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(null);
  const [data, setData] = useState({});

  const getSearchData = event => {
    event.preventDefault();
    navigate(`/search/?q=${encodeURI(searchText)}`);
  };

  return (
    <Container p={2} className="header">
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Button p={0} borderRadius={'full'}>
          <GrMenu className="menu" size={20} />
        </Button>

        <form onSubmit={getSearchData}>
          <Input
            onChange={e => setSearchText(e.target.value)}
            className="search-input"
            borderRadius={'full'}
            w={'xs'}
            placeholder="Search movie"
          />
        </form>
      </Box>
    </Container>
  );
};

export default Header;
