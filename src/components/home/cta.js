import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

const CTA = () => {
  return (
    <Box bg="color3" p={10} textAlign="center">
      <Heading color="white">¿Estás listo para conectarte?</Heading>
      <Button
        bg="color1"
        rounded={'full'}
        color={'white'}
        mt={'30px'}
        boxShadow="lg"
      >
        Cotiza Ahora
      </Button>
    </Box>
  );
};

export default CTA;
