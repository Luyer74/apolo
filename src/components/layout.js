import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const Layout = props => {
  return (
    <Box as="main" pb={8}>
      <Container pt={14}>{props.children}</Container>
    </Box>
  );
};

export default Layout;
