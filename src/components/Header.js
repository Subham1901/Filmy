import React from 'react';
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
} from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <form>
          <Input
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
