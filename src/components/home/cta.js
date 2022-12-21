import React from 'react';
import { Box, Heading, Button, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

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
        <Link as={ReactLink} to="/personaliza">
          Cotiza Ahora
        </Link>
      </Button>
    </Box>
  );
};

export default CTA;
