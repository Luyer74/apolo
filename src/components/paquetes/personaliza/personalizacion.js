import React from 'react';
import {
  Box,
  Heading,
  Button,
  Text,
  Flex,
  SimpleGrid,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import ButtonRow from './buttonRow';
import PriceBar from './priceBar';

const Personalizacion = ({ data, title, reset, imagePath }) => {
  const [currSubida, setCurrSubida] = useState(null);
  const [currBajada, setCurrBajada] = useState(null);
  const [currMetodo, setCurrMetodo] = useState(null);

  const setSubida = dato => {
    setCurrSubida(dato);
  };
  const setBajada = dato => {
    setCurrBajada(dato);
  };
  const setMetodo = dato => {
    setCurrMetodo(dato);
  };

  const calcPrecio = new Map();
  const subidas = new Set();
  const bajadas = new Set();
  const metodos = new Set();

  data.Informacion.map(paquete => {
    subidas.add(paquete.Subida);
    bajadas.add(paquete.Bajada);
    metodos.add(paquete.Metodo);
    var key =
      paquete.Subida.toString() + paquete.Bajada.toString() + paquete.Metodo;
    calcPrecio.set(key, paquete.Precio);
  });
  return (
    <Box>
      <Flex
        bg="color1"
        justifyContent={'space-between'}
        color="white"
        position="sticky"
        top="60px"
        p={5}
      >
        <Heading
          textAlign={'center'}
          fontSize={useBreakpointValue({ base: '20px', md: '28px' })}
          ml={5}
        >
          {title}
        </Heading>
        <PriceBar
          subida={currSubida}
          bajada={currBajada}
          metodo={currMetodo}
          mapaPrecio={calcPrecio}
        ></PriceBar>
      </Flex>
      <SimpleGrid columns={[1, 1, 1, 2]}>
        <Image
          src={imagePath}
          maxW={{ lg: '500px' }}
          m={useBreakpointValue({ base: 'auto', md: 10 })}
          height={{ base: '300px', lg: '400px' }}
          objectFit="cover"
        ></Image>
        <Box m={10}>
          <Text fontSize="20px">Métodos</Text>
          <ButtonRow data={[...metodos]} setData={setMetodo}></ButtonRow>
          <Text fontSize="20px">Velocidades de Subida</Text>
          <ButtonRow data={[...subidas]} setData={setSubida}></ButtonRow>
          <Text fontSize="20px">Velocidades de Bajada</Text>
          <ButtonRow data={[...bajadas]} setData={setBajada}></ButtonRow>
          <Button onClick={() => reset()}>Regresar</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Personalizacion;
