import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import PackCards from '../components/paquetes/packCards';
import Services from '../components/paquetes/services';

const Paquetes = () => {
  return (
    <Box>
      <PackCards></PackCards>
      <Services></Services>
    </Box>
  );
};

export default Paquetes;
