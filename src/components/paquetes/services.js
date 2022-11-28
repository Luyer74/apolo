import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  useBreakpointValue,
  List,
  ListItem,
} from '@chakra-ui/react';

const Services = () => {
  return (
    <Box bg="color2" p={20}>
      <SimpleGrid columns={[1, 1, 1, 2]}>
        <Heading textAlign="center">
          Contamos con más servicios en toda la república como...
        </Heading>
        <List listStyleType={'none'} textAlign="center" mt={2}>
          <ListItem>Cableado de fibra óptica a largas distancias</ListItem>
          <ListItem>Técnicos de Redes</ListItem>
          <ListItem>Plantas de Luz</ListItem>
          <ListItem>Estaciones de Energía Portátil</ListItem>
          <ListItem>Manejo y Administración de Redes</ListItem>
          <ListItem>Internet Punto a Punto (Monterrey)</ListItem>
        </List>
      </SimpleGrid>
      <Box textAlign={'center'}>
        <Button
          bg="color1"
          rounded={'full'}
          color={'white'}
          width="200px"
          mt={'50px'}
          boxShadow="lg"
        >
          Seleccionar
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
