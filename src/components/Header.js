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
} from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container p={2} className="header">
      <Button p={0} borderRadius={'full'}>
        <GrMenu className="menu" size={20} />
      </Button>
    </Container>
  );
};

export default Header;
