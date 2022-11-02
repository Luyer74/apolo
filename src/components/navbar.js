import React from 'react';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LinkItem = ({ href, children }) => {
  return (
    <Link as={NavLink} to={href}>
      <Text p={2}>{children}</Text>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1} bg="white" mt={-2}>
      <Container
        display="flex"
        p={3}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mt={1} mr={5}>
          <NavLink to="/">
            <Heading size="lg" letterSpacing="normal">
              APOLO
            </Heading>
          </NavLink>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="space-around"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/paquetes">Paquetes</LinkItem>
          <LinkItem href="/personaliza">Personaliza</LinkItem>
          <LinkItem href="/nosotros">Nosotros</LinkItem>
          <LinkItem href="/contacto">Contacto</LinkItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
