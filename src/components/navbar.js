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
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, children }) => {
  return (
    <Link as={NavLink} to={href}>
      <Text p={2}>{children}</Text>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1} bg="white" mt={-1}>
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
            <Heading size="lg" letterSpacing="wider">
              WIGO
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

        <Box
          flex={1}
          align="right"
          display={{ base: 'inline-block', md: 'none' }}
        >
          <Box ml={2}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                mt={1}
              ></MenuButton>
              <MenuList>
                <Link to="/paquetes" as={NavLink} passHref>
                  <MenuItem as={Link}>Paquetes</MenuItem>
                </Link>
                <Link to="/personaliza" as={NavLink} passHref>
                  <MenuItem as={Link}>Personaliza</MenuItem>
                </Link>
                <Link to="/nosotros" as={NavLink} passHref>
                  <MenuItem as={Link}>Nosotros</MenuItem>
                </Link>
                <Link to="/contacto" as={NavLink} passHref>
                  <MenuItem as={Link}>Contacto</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
