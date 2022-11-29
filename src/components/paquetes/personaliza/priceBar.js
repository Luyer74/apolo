import React from 'react';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';

const PriceBar = ({ subida, bajada, metodo, mapaPrecio }) => {
  const completeData = subida && bajada && metodo ? true : false;
  console.log(mapaPrecio);
  var precio = 'N/A';
  if (completeData) {
    let key = subida.toString() + bajada.toString() + metodo;
    console.log(key);
    precio = mapaPrecio.get(key);
  }
  return (
    <Heading
      mr={10}
      fontSize={useBreakpointValue({ base: '20px', md: '28px' })}
    >
      {precio}
    </Heading>
  );
};

export default PriceBar;
