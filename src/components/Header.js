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
  DrawerFooter,
  Heading,
  FormControl,
} from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
import { params } from '../utility/util';
import useNowPlaying from '../hooks/useNowPlyaing';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Header = ({ source }) => {
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
        flexWrap={'wrap'}
        justifyContent={'space-between'}
      >
        <Button p={0} onClick={onOpen} borderRadius={'full'}>
          <GrMenu className="menu" size={20} />
        </Button>
        {/* <Heading
          className="left-text"
          letterSpacing={2}
          fontSize={'4xl'}
          color={'filmy.text'}
          textTransform={'uppercase'}
        >
          filmy
        </Heading> */}

        {source !== 'searchpage' && (
          <Box
            p={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <form onSubmit={getSearchData}>
              <Input
                onChange={e => setSearchText(e.target.value)}
                className="search-input"
                borderRadius={'full'}
                w={'300px'}
                placeholder="Search movie"
              />
            </form>
          </Box>
        )}
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            letterSpacing={2}
            fontSize={'4xl'}
            p={6}
            textTransform={'uppercase'}
          >
            filmy
          </DrawerHeader>

          <DrawerBody>
            <Link to={'/'}>
              <Button
                onClick={onClose}
                w={'full'}
                _hover={{ backgroundColor: 'none' }}
                bgColor={'filmy.bg'}
                color={'filmy.text'}
              >
                Home
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Text>Made by Subham</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Header;
