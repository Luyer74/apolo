import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Card from './card';
import { GiSpeedometer } from 'react-icons/gi';
import { FaSatelliteDish, FaToolbox } from 'react-icons/fa';
import { ArrowFork } from 'tabler-icons-react';

const Cards = () => {
  return (
    <Box bg="color1" minH="600px">
      <Heading pt={'100px'} textColor="white" textAlign={'center'}>
        Tenemos todo lo que buscas para tu red
        <Box p={10}>
          <SimpleGrid columns={[1, 1, 2, 4]} gap={12}>
            <Card cardIcon={GiSpeedometer}>Velocidades Altas</Card>
            <Card cardIcon={FaSatelliteDish}>Disponibilidad</Card>
            <Card cardIcon={FaToolbox}>Instalación Rápida</Card>
            <Card cardIcon={ArrowFork}>Flexibilidad</Card>
          </SimpleGrid>
        </Box>
      </Heading>
    </Box>
  );
};

export default Cards;
