import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Quote = () => {
  return (
    <Box bg={'color2'} p={20} textAlign={'center'}>
      <Text fontSize="30px">
        "Las redes de Apolo son confiables, seguras y veloces"
      </Text>
      <Text as="i">Elon Musk - CEO de Tesla</Text>
    </Box>
  );
};

export default Quote;
