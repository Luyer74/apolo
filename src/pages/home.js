import React from 'react';
import Hero from '../components/home/hero';
import Second from '../components/home/second';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Hero></Hero>
      <Second></Second>
    </Box>
  );
};

export default Home;
