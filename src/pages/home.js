import React from 'react';
import Hero from '../components/home/hero';
import Second from '../components/home/second';
import CTA from '../components/home/cta';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Hero></Hero>
      <Second></Second>
      <CTA></CTA>
    </Box>
  );
};

export default Home;
