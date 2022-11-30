import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Card from './card';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contacts = () => {
  return (
    <Box bg="color1" minH="600px" textAlign={'center'}>
      <Heading pt={'100px'} textColor="white">
       Para mas informacion, contactanos!
      </Heading>
      <Box p={10}>
        <SimpleGrid columns={[1, 1, 2, 2]} gap={6}>
          <Card cardIcon={BsPhone}>Telefono de la empresa: 8180277078</Card>
          <Card cardIcon={AiOutlineMail}>Correo: panoramamty@gmail.com</Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contacts;
