import React from 'react';
import { ChakraProvider, Text } from '@chakra-ui/react';
import theme from './lib/theme.js';
import MainRouter from './lib/router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainRouter></MainRouter>
    </ChakraProvider>
  );
}

export default App;
