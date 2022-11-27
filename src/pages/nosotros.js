import React from 'react';
import Cards from '../components/nosotros/cards';
import { Box, Text, Heading } from '@chakra-ui/react';
import Description from '../components/nosotros/description';
import Quote from '../components/nosotros/quote';

const Nosotros = () => {
  return (
    <Box>
      <Cards></Cards>
      <Description></Description>
      <Quote></Quote>
    </Box>
  );
};

export default Nosotros;
